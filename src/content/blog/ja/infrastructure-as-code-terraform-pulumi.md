---
title: "Terraform・PulumiでIaC"
description: "HCLか汎用言語か、状態管理、モジュール設計。"
pubDate: 2024-12-01
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: false
tags: ["IaC", "Terraform", "Pulumi"]
---

## はじめに

宣言的な専用言語 HCL か、TypeScript/Python などの汎用プログラミング言語か？リモートステート管理、ロック機構、モジュール設計のベストプラクティスまで：Terraform と Pulumi の比較を通じて、堅牢な IaC（Infrastructure as Code）を設計します。本ガイドでは、基本概念からトレードオフ、今週から現場へ導入できる本番仕様のワークフローまでを詳しく解説します。

## なぜ重要なのか

- **開発者ベロシティの向上**: クラウドインフラをコード化することで、検証環境を数分で複製・再構築できる敏捷性を手に入れます。
- **システムの信頼性向上**: 変更適用前のプレビュー（Plan/Preview）検証により、人為的設定ミスによる本番ダウンを防止します。
- **コストコントロール**: Infracost などのツールを用いて、PR レビュー段階で将来のインフラ課金増減を事前に可視化します。

## コアコンセプト

### 1. 最小の実装スライスから着手する

全社インフラの全量を一括でコード化する前に、まずはエンドツーエンドで動作する単一のバーティカルスライスを完成させます。**Terraform・PulumiでIaC**においては、単一の VPC やオブジェクトストレージバケットからコード化し、初日から CI による自動 Plan 検証を確立することを意味します。

### 2. 「成功の落とし穴」を広く設ける

開発者がゼロからリソースを定義するのではなく、セキュリティ要件を満たした再利用可能な社内モジュールライブラリを提供します。本番対応の最小スターター構成例：

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

1. リモートステートのバージョン管理と実行者 ID を付与した構造化監査ログを導入する。
2. 破壊的変更（リソースの再作成など）を検知して適用をブロックする保護ガードレールを設定する。
3. リリース前に静的セキュリティ解析ツール（tfsec や Checkov）による自動スキャンを実施する。
4. 発生頻度の高い上位 3 つの障害シナリオ（ステートファイルロック解除不能、リソース競合、依存循環）に対する運用手順書（Runbook）を整備する。

## よくある落とし穴

> 実際のユーザーが付く前にプラットフォームを過剰に作り込まないこと。早期に選んだ技巧的な技術よりも、適切に選ばれた堅実な技術のほうが遥かに成果を生みます。

- 全インフラを単一の巨大なステートファイルで管理し、1 回の Plan に数十分かかるようにしてしまうこと。
- リモートステートのロックを有効化せず、複数人の同時実行でステートを破壊すること。
- 深夜の緊急呼び出しにつながるステート不整合アラートの未設定。

## まとめ

**Terraform・PulumiでIaC**は、小さく観測可能なステップで反復を重ねるチームに大きな成果をもたらします。上記のチェックリストを起点に、週に 1 つの課題を自動化し、エンジニアリングの成功を積み重ねていきましょう。
