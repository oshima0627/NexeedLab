# Nexeed Lab - Next.js フルスタックアプリケーション デプロイガイド

## 🚨 本番公開前チェックリスト

### 1. 環境変数設定

#### 本番環境用 .env.production
```bash
# Next.js設定
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# メール送信設定（必要に応じて）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# データベース設定（将来的に追加する場合）
# DATABASE_URL=postgresql://username:password@localhost:5432/nexeedlab
```

### 2. ビルド設定

#### next.config.js の最適化
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // API Routesを使用するため静的エクスポートは無効
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['yourdomain.com'],
  },
  // 本番環境での最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### 3. API Routes設定

#### 現在実装されているAPI
- `/api/portfolios` - ポートフォリオデータの取得
- `/api/contact` - お問い合わせフォームの送信

#### 将来的な拡張
- `/api/blog` - ブログ記事の管理
- `/api/auth` - 認証機能（管理画面用）
- `/api/admin` - 管理機能

### 4. SEO最適化

#### メタデータの設定
- sitemap.xml の生成
- robots.txt の設定
- Open Graph画像の最適化
- 構造化データの追加

### 5. パフォーマンス最適化

#### 画像最適化
- WebP形式への変換
- 適切なサイズ設定
- 遅延読み込み

#### バンドルサイズ最適化
```bash
npm run build
npm run analyze # バンドルサイズ分析
```

### 6. セキュリティ設定

#### Content Security Policy
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
```

## 🚀 デプロイオプション

### Option 1: Vercel（推奨）
```bash
npm install -g vercel
vercel --prod
```

#### Vercel設定
- 環境変数の設定
- カスタムドメインの設定
- Analytics の有効化
- API Routes の自動デプロイ

### Option 2: Netlify
```bash
npm run build
# .next フォルダをNetlifyにアップロード
# Functions設定でAPI Routesをサポート
```

### Option 3: 自前サーバー
```bash
# ビルド
npm run build

# PM2での起動
npm install -g pm2
pm2 start npm --name "nexeed-lab" -- start
```

### Option 4: Docker
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Next.js standalone output用
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

## 📊 監視・分析

### 1. パフォーマンス監視
- Google PageSpeed Insights
- Core Web Vitals
- Lighthouse CI

### 2. エラー監視
- Sentry設定
- ログ監視
- API エラートラッキング

### 3. アクセス解析
- Google Analytics 4
- Google Search Console

## 🔧 本番環境での最適化

### 1. CDN設定
- 静的ファイルのCDN配信
- 画像最適化サービス

### 2. キャッシュ戦略
- ブラウザキャッシュ
- CDNキャッシュ
- API レスポンスキャッシュ

### 3. 圧縮設定
- Gzip/Brotli圧縮
- 画像圧縮

## ⚠️ 注意事項

### セキュリティ
- 環境変数の適切な管理
- API エンドポイントのレート制限
- CORS設定の確認

### パフォーマンス
- API Routes のレスポンス時間監視
- データベース接続プールの設定（将来的に）
- メモリ使用量の監視

### 運用
- ログローテーション
- バックアップ戦略
- 障害対応手順

## 📝 今後の拡張予定

### データベース統合
- PostgreSQL または MongoDB の導入
- Prisma ORM の設定
- データマイグレーション

### 認証機能
- NextAuth.js の導入
- 管理画面の実装
- ユーザー管理機能

### メール送信機能
- SendGrid または Resend の統合
- お問い合わせ自動返信
- 通知機能

### CMS機能
- ブログ記事の管理
- ポートフォリオの動的管理
- 画像アップロード機能

## 🚀 デプロイ後チェックリスト

- [ ] サイトが正常に表示される
- [ ] お問い合わせフォームが動作する
- [ ] ポートフォリオデータが表示される
- [ ] レスポンシブデザインが正常
- [ ] ページ読み込み速度が適切
- [ ] SEOメタデータが正しい
- [ ] エラー監視が動作している
- [ ] SSL証明書が有効
- [ ] Google Search Consoleに登録
- [ ] Google Analyticsが動作している 