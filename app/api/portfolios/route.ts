import { NextResponse } from 'next/server';

// ポートフォリオデータ（静的データとして管理）
const portfolios = [
  {
    id: 1,
    title: "AI チャットボット開発",
    slug: "ai-chatbot",
    description: "自然言語処理を活用したカスタマーサポート用チャットボットの開発。24時間対応で顧客満足度を向上させました。",
    project_url: "https://example.com/chatbot",
    status: "completed",
    created_at: "2024-01-15",
    updated_at: "2024-01-15"
  },
  {
    id: 2,
    title: "ECサイト構築",
    slug: "ecommerce-site",
    description: "モダンなデザインと高いパフォーマンスを実現したECサイト。売上向上に貢献しました。",
    project_url: "https://example.com/ecommerce",
    status: "completed",
    created_at: "2024-02-10",
    updated_at: "2024-02-10"
  },
  {
    id: 3,
    title: "業務管理システム",
    slug: "business-system",
    description: "企業の業務効率化を実現する管理システム。タスク管理から売上分析まで一元化しました。",
    project_url: "https://example.com/business-system",
    status: "completed",
    created_at: "2024-03-05",
    updated_at: "2024-03-05"
  }
];

export async function GET() {
  try {
    return NextResponse.json(portfolios);
  } catch (error) {
    return NextResponse.json(
      { error: 'ポートフォリオデータの取得に失敗しました' },
      { status: 500 }
    );
  }
} 