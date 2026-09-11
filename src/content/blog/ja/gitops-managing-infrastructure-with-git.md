---
title: "GitOps:Gitでインフラ管理"
description: "宣言的インフラ、PRレビュー、ドリフト検知、自動同期。"
pubDate: 2024-11-25
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 9
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["GitOps", "Kubernetes", "DevOps"]
---

## はじめに

Git リポジトリを唯一の真実のソース（Single Source of Truth）とする：宣言的インフラ定義、プルリクエスト（PR）によるコードレビュー、自動ドリフト検知、そしてクラスタへの自動同期を実現します。本ガイドでは、基本概念からトレードオフ、今週から現場へ導入できる本番仕様のワークフローまでを詳しく解説します。

## なぜ重要なのか

- **開発者ベロシティの向上**: 開発者は使い慣れた Git ワークフローでインフラ変更を提案・承認でき、運用のボトルネックを解消します。
- **システムの信頼性向上**: すべての構成変更履歴が Git に記録され、万一の障害時にもコミット単位で安全に即座ロールバックが可能です。
- **コストコントロール**: クラウドコンソール上での手動プロビジョニングによる放置リソース（シャドウ IT）を撲滅します。

## コアコンセプト

### 1. 最小の実装スライスから着手する

全クラスタに一挙に GitOps コントローラーを展開する前に、まずはエンドツーエンドで動作する単一のバーティカルスライスを完成させます。**GitOps:Gitでインフラ管理**においては、単一の開発用ネームスペースを対象に ArgoCD または Flux を配備し、初日から同期状態の可観測性を確立することを意味します。

### 2. 「成功の落とし穴」を広く設ける

個々のエンジニアに kubectl のクラスタ管理者権限を配布するのではなく、コントローラーによるプル（Pull）型の同期モデルを採用します。本番対応の最小スターター構成例：

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

1. Git コミットハッシュと同期ステータスを紐付けた構造化監査ログを導入する。
2. 緊急メンテナンス時に自動同期を一時停止できる同期サスペンド機能を設定する。
3. リリース前にクラスタ側の設定を手動変更した際、GitOps コントローラーが自動修復（Self-Healing）するかを検証する。
4. 発生頻度の高い上位 3 つの障害シナリオ（同期デッドロック、CRD 競合、Helm リポジトリ接続断）に対する運用手順書（Runbook）を整備する。

## よくある落とし穴

> 実際のユーザーが付く前にプラットフォームを過剰に作り込まないこと。早期に選んだ技巧的な技術よりも、適切に選ばれた堅実な技術のほうが遥かに成果を生みます。

- 緊急時に本番クラスタで `kubectl edit` を直接実行し、次回の Git 同期で上書きされて事故になること。
- シークレットを平文のまま Git リポジトリへコミットしてしまうこと（Sealed Secrets や外部 Vault を活用すべき）。
- 深夜の緊急呼び出しにつながるドリフト検知未通知の放置。

## まとめ

**GitOps:Gitでインフラ管理**は、小さく観測可能なステップで反復を重ねるチームに大きな成果をもたらします。上記のチェックリストを起点に、週に 1 つの課題を自動化し、エンジニアリングの成功を積み重ねていきましょう。
