# メール送信デバッグガイド

## Vercelでメールが届かない場合の確認手順

### 1. Vercel環境変数の確認
```bash
# Vercel CLIで環境変数確認
vercel env ls

# または Vercel Dashboard
https://vercel.com/dashboard/[your-project]/settings/environment-variables
```

**必須環境変数:**
- `SMTP_HOST`: `smtp.gmail.com`
- `SMTP_PORT`: `587`
- `SMTP_USER`: `oshima6.27@gmail.com`
- `SMTP_PASS`: `npsmqzdjieuxogky`

### 2. Vercel Function Logsの確認
1. https://vercel.com/dashboard にアクセス
2. プロジェクトを選択
3. **Functions** タブをクリック
4. **View Function Logs** をクリック
5. お問い合わせフォーム送信後のログを確認

### 3. 期待されるログ出力
**成功時:**
```
=== メール送信開始 ===
実行環境: production
✅ 環境変数チェック完了
🔗 SMTP接続テスト開始...
✅ SMTP接続テスト成功
📤 管理者メール送信開始...
✅ 管理者メール送信成功
📤 お客様メール送信開始...
✅ お客様メール送信成功
🎉 全てのメール送信完了
```

**失敗時のパターン:**
```
❌ 必要な環境変数が設定されていません: SMTP_PASS
❌ 🔐 認証エラー: Gmailのユーザー名またはアプリパスワードが間違っています
❌ ⏰ タイムアウトエラー: SMTP接続がタイムアウトしました
❌ 🌐 DNS解決エラー: SMTPサーバーが見つかりません
```

### 4. トラブルシューティング

#### 環境変数未設定
```bash
# 全環境変数を再設定
./vercel-env-setup.sh
# または手動で設定
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
```

#### 認証エラー
1. Googleアカウント設定確認
2. 2段階認証が有効か確認
3. アプリパスワードを再生成

#### タイムアウトエラー
- Vercelの実行時間制限（10秒）に注意
- SMTP設定の`timeout`オプション調整検討

### 5. 緊急時の代替手段
**Resend（推奨）:**
```bash
npm install resend
vercel env add RESEND_API_KEY
```

**SendGrid:**
```bash
npm install @sendgrid/mail
vercel env add SENDGRID_API_KEY
```

### 6. 確認コマンド
```bash
# 環境変数確認
vercel env pull .env.local
cat .env.local

# 再デプロイ
vercel --prod

# ログリアルタイム監視
vercel logs --follow
```