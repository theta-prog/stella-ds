# ✦ Stella UI

**ウェブアプリ、ポートフォリオ、MV演出、3D空間まで対応するスケーラブルなデザインシステム。**

> English version: [README.md](./README.md)

---

## 概要

Stella UI はモノレポ構成のデザインシステムで、以下を提供します。

- **フレームワーク非依存のデザイントークン** — カラー・タイポグラフィ・スペーシング・シャドウ等を JSON と CSS カスタムプロパティ（`--stella-*`）として配布。
- **React コンポーネントライブラリ** — [Radix UI Primitives](https://www.radix-ui.com/) を基盤としたアクセシブルで合成可能なコンポーネント。スタイリングは CSS Modules で完結。
- **インタラクティブなドキュメント** — Storybook 8 によるライブプレビュー・コントロール・**JP / EN 言語切替**ツールバー付き。

---

## 技術スタック

| 役割 | ツール |
|---|---|
| パッケージ管理 | [pnpm](https://pnpm.io/) workspaces |
| 言語 | TypeScript 5 |
| コンポーネントビルド | [tsup](https://tsup.egoist.dev/) |
| UI プリミティブ | [Radix UI](https://www.radix-ui.com/) |
| スタイリング | CSS Modules |
| ドキュメント | [Storybook 8](https://storybook.js.org/) + Vite |

---

## ディレクトリ構造

```
stella-ui/
├── packages/
│   ├── theme/          # デザイントークン（JSON + CSS変数、フレームワーク非依存）
│   └── react/          # React コンポーネントライブラリ（Radix UI + CSS Modules）
├── apps/
│   └── docs/           # Storybook ドキュメント（JP / EN 対応）
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```

---

## はじめかた

### 前提条件

- Node.js ≥ 18
- pnpm ≥ 9 — `npm install -g pnpm` でインストール

### インストール

```bash
pnpm install
```

### パッケージのビルド

```bash
# 全パッケージをビルド
pnpm build

# 個別にビルド
pnpm --filter @stella-ui/theme build
pnpm --filter @stella-ui/react build
```

### Storybook を起動

```bash
pnpm storybook
# → http://localhost:6006
```

---

## パッケージ詳細

### `@stella-ui/theme`

デザイントークンを以下の形式で配布します。

- **`import { tokens } from '@stella-ui/theme'`** — JS/TS 向け生 JSON オブジェクト。
- **`import { cssVariables, generateCSSVarsString, injectCSSVars } from '@stella-ui/theme'`** — CSS 変数マップとユーティリティ関数。
- **`@stella-ui/theme/css`** — コンパイル済み `dist/tokens.css`（スタイルシートから直接インポート可能）。

トークンカテゴリ: `color`, `typography`, `spacing`, `borderRadius`, `shadow`, `transition`

### `@stella-ui/react`

Radix UI Primitives を基盤とした React コンポーネント。

```tsx
import { Button } from '@stella-ui/react';

// ソリッド（デフォルト）
<Button variant="solid" size="md">クリック</Button>

// グロウエフェクト
<Button variant="glow" size="lg">✦ 起動</Button>

// ポリモーフィック — asChild で <a> タグとして描画
<Button asChild variant="outline">
  <a href="/docs">ドキュメントを読む</a>
</Button>

// ローディング状態
<Button loading>保存中…</Button>
```

**Button props:**

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `variant` | `solid \| outline \| ghost \| glow` | `solid` | ビジュアルスタイル |
| `size` | `sm \| md \| lg` | `md` | サイズプリセット |
| `loading` | `boolean` | `false` | スピナー表示・操作無効化 |
| `asChild` | `boolean` | `false` | 子要素をルートとして描画（Radix Slot） |

---

## Storybook: 言語切替

Storybook ツールバーの **🌍 地球アイコン**で言語を切り替えられます。

- 🇺🇸 **English**
- 🇯🇵 **日本語**

ストーリーのラベル・説明・ボタンテキストがリアルタイムで切り替わります。

---

## スクリプト一覧

| コマンド | 説明 |
|---|---|
| `pnpm install` | 全ワークスペースの依存関係をインストール |
| `pnpm build` | 全パッケージをビルド |
| `pnpm storybook` | Storybook 開発サーバーを起動 |
| `pnpm build-storybook` | Storybook の静的ビルド |
| `pnpm typecheck` | 全パッケージの TypeScript チェック |

---

## ライセンス

MIT
