# Nexeed Lab - Next.js フルスタックアプリケーション

## 概要

Nexeed Labの公式ウェブサイトです。Next.js 14のApp Routerを使用したフルスタック構成で、フロントエンドとバックエンドの両方を統合しています。メール送信機能を実装し、お問い合わせフォームから直接連絡を受け取ることができます。

## 技術スタック

### フロントエンド
- **Next.js 14** - App Router使用
- **React 18** - UI構築
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Framer Motion** - アニメーション
- **Radix UI** - アクセシブルなUIコンポーネント
- **Shadcn/ui** - UIコンポーネントライブラリ

### バックエンド
- **Next.js API Routes** - サーバーサイドAPI
- **Nodemailer** - メール送信機能
- **Zod** - バリデーション
- **TypeScript** - 型安全性

### 開発ツール
- **ESLint** - コード品質
- **PostCSS** - CSS処理
- **Lucide React** - アイコン

## プロジェクト構造

```
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── contact/       # お問い合わせAPI
│   │   └── portfolios/    # ポートフォリオAPI
│   ├── blog/              # ブログページ
│   ├── contact/           # お問い合わせページ
│   ├── portfolio/         # ポートフォリオページ
│   ├── services/          # サービスページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
│   ├── animations/        # アニメーションコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   ├── sections/         # セクションコンポーネント
│   └── ui/               # UIコンポーネント
├── hooks/                # カスタムフック
├── lib/                  # ユーティリティ関数
└── public/               # 静的ファイル
```

## API エンドポイント

### GET /api/portfolios
ポートフォリオデータを取得します。

**レスポンス例:**
```json
[
  {
    "id": 1,
    "title": "AI チャットボット開発",
    "slug": "ai-chatbot",
    "description": "自然言語処理を活用したカスタマーサポート用チャットボット...",
    "project_url": "https://example.com/chatbot",
    "status": "completed",
    "created_at": "2024-01-15",
    "updated_at": "2024-01-15"
  }
]
```

### POST /api/contact
お問い合わせフォームの送信を処理し、管理者への通知メールとお客様への自動返信メールを送信します。

**リクエスト例:**
```json
{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "subject": "お問い合わせ",
  "message": "プロジェクトについて相談したいです。"
}
```

**レスポンス例:**
```json
{
  "success": true,
  "message": "お問い合わせを受け付けました。ありがとうございます。"
}
```

## セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/nexeed-lab.git
cd nexeed-lab

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 環境変数

`.env.local`ファイルを作成し、必要な環境変数を設定してください：

```bash
# 開発環境用
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# メール送信設定
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 開発

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# リンター実行
npm run lint
```

### 開発ガイドライン

1. **コンポーネント作成**: `components/`ディレクトリに機能別に整理
2. **API Routes**: `app/api/`ディレクトリにRESTful APIを実装
3. **型定義**: TypeScriptを活用した型安全な開発
4. **スタイリング**: Tailwind CSSとShadcn/uiコンポーネントを使用

## デプロイ

詳細なデプロイ手順については、[DEPLOYMENT.md](./DEPLOYMENT.md)を参照してください。

### 推奨デプロイ先
- **Vercel** - Next.jsに最適化されたプラットフォーム
- **Netlify** - 静的サイトホスティング
- **自前サーバー** - Docker対応

## 実装済み機能

- [x] **メール送信機能** - Nodemailerを使用したGmail SMTP経由での送信
- [x] **お問い合わせフォーム** - バリデーション付きフォーム
- [x] **自動返信メール** - お客様への確認メール送信
- [x] **管理者通知** - 新しいお問い合わせの即座な通知

## 今後の拡張予定

- [ ] データベース統合（PostgreSQL/MongoDB）
- [ ] 認証機能（NextAuth.js）
- [ ] 管理画面の実装
- [ ] CMS機能
- [ ] ブログ記事の動的管理
- [ ] 画像アップロード機能

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

- **メール**: oshima6.27@gmail.com
- **電話**: 08061760627
- **所在地**: 大阪府門真市  
