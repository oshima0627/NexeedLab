# Nexeed Lab Frontend - 本番環境デプロイガイド

## 🚨 本番公開前チェックリスト

### 1. 環境変数設定

#### 本番環境用 .env.production
```bash
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com/api
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. ビルド設定

#### next.config.js の最適化
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Docker用
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

### 3. SEO最適化

#### メタデータの設定
- sitemap.xml の生成
- robots.txt の設定
- Open Graph画像の最適化
- 構造化データの追加

### 4. パフォーマンス最適化

#### 画像最適化
- WebP形式への変換
- 適切なサイズ設定
- 遅延読み込み

#### バンドルサイズ最適化
```bash
npm run build
npm run analyze # バンドルサイズ分析
```

### 5. セキュリティ設定

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

### Option 2: Netlify
```bash
npm run build
# dist フォルダをNetlifyにアップロード
```

### Option 3: 自前サーバー
```bash
# ビルド
npm run build

# PM2での起動
npm install -g pm2
pm2 start npm --name "nexeed-lab-frontend" -- start
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
- Service Worker

### 3. 圧縮設定
- Gzip/Brotli圧縮
- 画像圧縮

## ⚠️ 注意事項

### セキュリティ
- API キーの適切な管理
- HTTPS の強制
- セキュリティヘッダーの設定

### パフォーマンス
- 画像の最適化
- 不要なJavaScriptの削除
- 遅延読み込みの実装

### SEO
- メタタグの最適化
- 構造化データの実装
- サイトマップの生成

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