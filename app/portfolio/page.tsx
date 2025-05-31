import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = createMetadata({
  title: '実績紹介',
  description: 'AIアプリケーション、Web開発プロジェクト、業務システムの実績をご紹介します。',
});

const categories = [
  { id: "ai", name: "AI開発", icon: "🤖" },
  { id: "web", name: "Web開発", icon: "💻" },
  { id: "business", name: "業務システム", icon: "📊" },
  { id: "mobile", name: "モバイルアプリ", icon: "📱" },
  { id: "seo", name: "SEO・MEO対策", icon: "📈" }
];

export default function PortfolioPage() {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeading
          title="実績紹介"
          description="各分野における実績を随時更新しています。"
        />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground mb-8">
            私たちは多くのクライアント様と共に、革新的なデジタルソリューションを創造してきました。
            実績事例は、プロジェクトの完了に応じて順次公開していきます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-card p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground">順次公開予定</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}