# Vercelデプロイ時の環境変数設定

## 問題
ローカルでは動作するメール送信機能が、Vercelデプロイ後に動作しない。

## 原因
`.env.local`ファイルはVercelに自動的に反映されません。

## 解決方法

### 1. Vercel Dashboard設定
1. https://vercel.com/dashboard にアクセス
2. プロジェクトを選択
3. Settings > Environment Variables
4. 以下の環境変数を追加：

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=oshima6.27@gmail.com
SMTP_PASS=npsmqzdjieuxogky
```

### 2. Vercel CLI設定
```bash
vercel env add SMTP_HOST
# 値入力: smtp.gmail.com

vercel env add SMTP_PORT
# 値入力: 587

vercel env add SMTP_USER  
# 値入力: oshima6.27@gmail.com

vercel env add SMTP_PASS
# 値入力: npsmqzdjieuxogky
```

### 3. 再デプロイ
環境変数設定後、再デプロイが必要：
```bash
vercel --prod
```

## 本番環境URL
本番サイト: https://www.nexeed-web.com

## 確認方法
- Vercel Function Logsでエラーメッセージ確認
- 環境変数が正しく読み込まれているかログ確認
- 本番環境でのお問い合わせフォームテスト