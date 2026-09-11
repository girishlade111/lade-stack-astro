---
title: "OAuth2・OpenID Connect実装"
description: "PKCE認可コード、トークン保管、ローテーション、ログアウトを最初から正しく。"
pubDate: 2024-12-06
author: "Girish Lade"
category: "Security in Web Apps"
readTime: 11
coverImage: "/blog-covers/security.svg"
featured: false
tags: ["OAuth2", "OIDC", "認証"]
---

## はじめに

PKCE（Proof Key for Code Exchange）を伴う認可コードフロー、クライアント側での安全なトークン保管戦略、リフレッシュトークンの自動ローテーション、そして確実なシングルログアウト：OAuth 2.0 と OpenID Connect（OIDC）を最初からセキュアかつ堅牢に実装します。本ガイドでは、基本概念からトレードオフ、今週から現場へ導入できる本番仕様のワークフローまでを詳しく解説します。

## なぜ重要なのか

- **開発者ベロシティの向上**: 業界標準プロトコルに準拠することで、サードパーティ連携や企業向け SSO（SAML/OIDC）への対応をスムーズにします。
- **システムの信頼性向上**: 短命なアクセストークンと自動更新により、万一のトークン漏洩時にも被害半径を最小化します。
- **コストコントロール**: 独自認証基盤のバグ対応やセキュリティ監査のやり直しに伴う莫大なコストを回避します。

## コアコンセプト

### 1. 最小の実装スライスから着手する

最初から複雑なマルチプロバイダー連携を組む前に、まずはエンドツーエンドで動作する単一のバーティカルスライスを完成させます。**OAuth2・OpenID Connect実装**においては、PKCE 認可コードフローによるログインと保護されたリソースへのアクセステストから着手し、初日からセッション可観測性を確立することを意味します。

### 2. 「成功の落とし穴」を広く設ける

個々のフロントエンドで手動でトークンをパースするのではなく、HttpOnly SameSite Cookie または堅牢な認証 SDK を介してトークンライフサイクルを管理します。本番対応の最小スターター構成例：

```typescript
// Minimal production-ready starter
export const config = {
  retries: 3,
  timeoutMs: 5_000,
  circuitBreaker: { failures: 5, cooldownMs: 30_000 },
};

export async function runWithResilience<T>(fn: () => Promise<T>): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= config.retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, attempt * 250));
    }
  }
  throw lastError;
}
```

### 3. 真に重要な指標を計測する

| 指標 | 推奨される初期ターゲット |
| --- | --- |
| p95 レイテンシ | < 300 ms |
| エラーバジェット消費率 | < 2% / 30 日 |
| デプロイ頻度 | 毎日 (Daily) |
| ロールバック所要時間 | < 10 分 |

## 本番チェックリスト

1. クライアント ID と認可セッション状態を付与した構造化認証ログを導入する。
2. 異常なトークン更新や複数拠点からのアクセスを検知した際の自動無効化フラグを設定する。
3. リリース前に認可コードの再利用防止と PKCE コード検証失敗時の挙動を検証する。
4. 発生頻度の高い上位 3 つの障害シナリオ（IdP 接続タイムアウト、JWKS 公開鍵更新失敗、リフレッシュトークン競合）に対する運用手順書（Runbook）を整備する。

## よくある落とし穴

> 実際のユーザーが付く前にプラットフォームを過剰に作り込まないこと。早期に選んだ技巧的な技術よりも、適切に選ばれた堅実な技術のほうが遥かに成果を生みます。

- シングルページアプリケーション（SPA）でリフレッシュトークンを localStorage に平文保存すること。
- リダイレクト URI の完全一致検証を怠り、オープンリダイレクター脆弱性を作ること。
- 深夜の緊急呼び出しにつながる認証成功率低下アラートの未設定。

## まとめ

**OAuth2・OpenID Connect実装**は、小さく観測可能なステップで反復を重ねるチームに大きな成果をもたらします。上記のチェックリストを起点に、週に 1 つの課題を自動化し、エンジニアリングの成功を積み重ねていきましょう。
