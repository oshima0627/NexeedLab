# Vercelメール送信問題の診断ガイド

## 確認された問題点

### 1. 環境変数の設定状況
**現在の状況:**
- ✅ Development環境に設定済み
- ❌ Production環境に未設定（推定）

**解決策:**
```bash
# Production環境変数を設定
vercel env add SMTP_HOST production
vercel env add SMTP_PORT production
vercel env add SMTP_USER production
vercel env add SMTP_PASS production
```

### 2. Vercel設定で確認すべき項目

#### A. Environment Variables（環境変数）
https://vercel.com/nexeed-lab/nexeedlab/settings/environment-variables

**確認項目:**
- [ ] SMTP_HOST: `smtp.gmail.com` (Production)
- [ ] SMTP_PORT: `587` (Production)
- [ ] SMTP_USER: `oshima6.27@gmail.com` (Production)
- [ ] SMTP_PASS: `npsmqzdjieuxogky` (Production)

#### B. Domains（ドメイン設定）
https://vercel.com/nexeed-lab/nexeedlab/settings/domains

**確認項目:**
- [ ] `www.nexeed-web.com` が正しく設定されている
- [ ] SSL証明書が有効

#### C. Functions（関数ログ）
https://vercel.com/nexeed-lab/nexeedlab/functions

**確認項目:**
- [ ] `/api/contact` エンドポイントが表示されている
- [ ] Function Logsでエラーメッセージを確認

### 3. 考えられる原因と解決策

#### 原因1: Production環境変数未設定
**症状:** お問い合わせフォーム送信時にエラー
**解決:** Production環境に環境変数を追加

#### 原因2: Vercelの実行時間制限
**症状:** タイムアウトエラー
**解決:** 軽量メールサービス（Resend）への移行

#### 原因3: Gmail認証設定
**症状:** 認証エラー
**解決:** 
- Googleアカウントの2段階認証確認
- アプリパスワード再生成
- セキュリティ設定確認

#### 原因4: ドメイン設定
**症状:** 本番環境でのみ動作しない
**解決:** カスタムドメイン設定の確認

### 4. 緊急時の代替手段

#### Resend（推奨）
```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@nexeed-web.com',
  to: 'oshima6.27@gmail.com',
  subject: 'お問い合わせ',
  html: emailContent
});
```

### 5. 即座に実行すべき手順

1. **環境変数確認**
   ```bash
   vercel env ls
   ```

2. **Production環境変数追加**
   ```bash
   vercel env add SMTP_HOST production
   # 以下同様に全て追加
   ```

3. **再デプロイ**
   ```bash
   vercel --prod
   ```

4. **Function Logs確認**
   - Vercel Dashboard → Functions → View Function Logs
   - お問い合わせフォーム送信後のログ確認

5. **テスト実行**
   - https://www.nexeed-web.com/contact でテスト送信
   - ログでエラー内容確認

### 6. ログで確認すべき項目

**成功パターン:**
```
✅ 環境変数チェック完了
✅ SMTP接続テスト成功
✅ 管理者メール送信成功
```

**失敗パターン:**
```
❌ 必要な環境変数が設定されていません
❌ 認証エラー
❌ タイムアウトエラー
```