import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: 'ブログ',
  description: 'AI開発、Webテクノロジー、デジタルトランスフォーメーションに関する洞察、チュートリアル、ニュース',
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const posts = [
  {
    id: "ai-development-trends-2025",
    title: "2025年に注目すべきAI開発トレンド",
    excerpt: "2025年以降の開発領域を形作る新興AIテクノロジーと手法について探ります。",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-01-15",
    author: "大島直孝",
    category: "AI開発",
    link: "/blog/ai-development-trends-2025",
  },
  {
    id: "responsive-design-best-practices",
    title: "モダンウェブサイトのレスポンシブデザインベストプラクティス",
    excerpt: "あらゆるデバイスで最適なユーザー体験を提供する、真にレスポンシブなウェブサイトを作成するための必須テクニックとアプローチを学びます。",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-12-10",
    author: "大島直孝",
    category: "Webデザイン",
    link: "/blog/responsive-design-best-practices",
  },
  {
    id: "business-intelligence-guide",
    title: "ビジネスインテリジェンスソリューション完全ガイド",
    excerpt: "最新のBIツールと戦略を活用して、データを意思決定に活かせるインサイトに変換する方法を解説します。",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-11-28",
    author: "大島直孝",
    category: "業務システム",
    link: "/blog/business-intelligence-guide",
  },
  {
    id: "seo-strategies-2025",
    title: "2025年に効果的なSEO戦略",
    excerpt: "最新の検索エンジンアルゴリズムとユーザー行動トレンドに合わせた、実績のあるSEOテクニックで競合他社をリードしましょう。",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-11-15",
    author: "大島直孝",
    category: "SEO",
    link: "/blog/seo-strategies-2025",
  },
  {
    id: "chatbot-development-guide",
    title: "インテリジェントチャットボット開発ガイド",
    excerpt: "カスタマーエクスペリエンスを向上させ、サポートを効率化する高度な対話インターフェースを作成するためのステップバイステップアプローチ。",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-10-22",
    author: "大島直孝",
    category: "AI開発",
    link: "/blog/chatbot-development-guide",
  },
  {
    id: "mobile-app-performance",
    title: "ユーザー定着率を高めるモバイルアプリのパフォーマンス最適化",
    excerpt: "モバイルアプリケーションをスムーズに動作させ、優れたユーザー体験を提供するためのテクニックとベストプラクティス。",
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2024-10-05",
    author: "大島直孝",
    category: "モバイル開発",
    link: "/blog/mobile-app-performance",
  },
];

export default function BlogPage() {
  // Featured post is the most recent one
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading
          title="ブログ"
          description="AI開発、Webテクノロジー、デジタルトランスフォーメーションに関する洞察、チュートリアル、ニュース"
        />

        {/* Featured Post */}
        <div className="mb-16">
          <div className="group relative overflow-hidden rounded-xl bg-card shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative aspect-video lg:aspect-auto lg:h-auto overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-4">
                  <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featuredPost.date)}
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                  </div>
                </div>
                
                <Button asChild className="w-fit group">
                  <Link href={featuredPost.link}>
                    記事を読む
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden rounded-xl bg-card shadow hover:shadow-md transition-all duration-300">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                  
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}