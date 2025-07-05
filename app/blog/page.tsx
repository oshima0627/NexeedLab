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
    id: "ai-job-transformation",
    title: "AI時代の職業変革：影響を受ける仕事と新しく生まれる仕事の完全ガイド",
    excerpt: "AI技術により2030年までに8億人の労働者が影響を受けると予測される中、どの職業が変化し、どんな新しい仕事が生まれるのかを詳しく解説します。",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-01",
    author: "大島直孝",
    category: "AI・未来の働き方",
    link: "https://note.com/oshima0627/n/n4cf99f78bc89",
    isExternal: true,
  },
  {
    id: "claude-code-beginner",
    title: "【完全初心者向け】ClaudeCodeって何？プログラミング未経験でも理解できる解説",
    excerpt: "プログラミング未経験者でもAIの力を借りてアプリケーション開発ができる時代。ClaudeCodeを使った学習体験談をお話しします。",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-04",
    author: "大島直孝",
    category: "プログラミング学習",
    link: "https://note.com/oshima0627/n/n63175335e288",
    isExternal: true,
  },
  {
    id: "claude-code-business-success",
    title: "Claude Code企業導入成功事例：売上10億円増加を実現した革新的ビジネス活用法",
    excerpt: "Claude Code導入により大幅なコスト削減と効率向上を実現した企業の成功事例を詳しく紹介します。",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-07",
    author: "大島直孝",
    category: "ビジネス活用",
    link: "https://note.com/oshima0627/n/ncb5796b4fbaa",
    isExternal: true,
  },
  {
    id: "ai-writing-tools-guide",
    title: "AIライティングツール完全活用ガイド：ブログ・SNS投稿を効率化する方法",
    excerpt: "進化し続けるAIライティングツールを活用して、様々なプラットフォームでのコンテンツ作成を効率化する方法を解説します。",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-10",
    author: "大島直孝",
    category: "コンテンツ制作",
    link: "https://note.com/oshima0627/n/n9645b4e62b4d",
    isExternal: true,
  },
  {
    id: "claude-tips-and-tricks",
    title: "【Claude初心者が知らないと損する10の裏技】効率10倍アップの使い方",
    excerpt: "Claude初心者でも効率を劇的に向上させることができる10の裏技テクニックを実例付きで紹介します。",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-13",
    author: "大島直孝",
    category: "AI活用術",
    link: "https://note.com/oshima0627/n/n093de137d490",
    isExternal: true,
  },
  {
    id: "digital-transformation-guide",
    title: "中小企業のDX成功事例：デジタル変革で売上300%アップした方法",
    excerpt: "中小企業がデジタルトランスフォーメーションを成功させ、大幅な業績向上を実現するための具体的な手法とプロセスを解説します。",
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-16",
    author: "大島直孝",
    category: "DX・デジタル変革",
    link: "https://note.com/oshima0627/n/note-url-placeholder",
    isExternal: true,
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
                  <Link 
                    href={featuredPost.link}
                    target={featuredPost.isExternal ? "_blank" : "_self"}
                    rel={featuredPost.isExternal ? "noopener noreferrer" : undefined}
                  >
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
                  <Link 
                    href={post.link}
                    target={post.isExternal ? "_blank" : "_self"}
                    rel={post.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {post.title}
                  </Link>
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