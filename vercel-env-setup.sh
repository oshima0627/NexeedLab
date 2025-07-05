#!/bin/bash

# Vercel環境変数設定スクリプト
# 使用方法: chmod +x vercel-env-setup.sh && ./vercel-env-setup.sh

echo "🚀 Vercel環境変数設定を開始します..."

# 環境変数を設定
echo "📧 メール設定用環境変数を追加中..."

vercel env add SMTP_HOST <<< "smtp.gmail.com"
vercel env add SMTP_PORT <<< "587"
vercel env add SMTP_USER <<< "oshima6.27@gmail.com"
vercel env add SMTP_PASS <<< "npsmqzdjieuxogky"

echo "🌐 サイトURL環境変数を追加中..."
vercel env add NEXT_PUBLIC_SITE_URL <<< "https://www.nexeed-web.com"

echo "✅ 環境変数設定完了！"
echo "⚠️  重要: 設定後は必ず再デプロイしてください"
echo "💡 コマンド: vercel --prod"

echo ""
echo "🔍 設定した環境変数:"
echo "- SMTP_HOST: smtp.gmail.com"
echo "- SMTP_PORT: 587" 
echo "- SMTP_USER: oshima6.27@gmail.com"
echo "- SMTP_PASS: [設定済み]"
echo "- NEXT_PUBLIC_SITE_URL: https://www.nexeed-web.com"