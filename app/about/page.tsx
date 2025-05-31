import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";
import { 
  Calendar, 
  CheckCircle2, 
  BrainCircuit, 
  Users, 
  TrendingUp
} from "lucide-react";
import Image from "next/image";

export const metadata = createMetadata({
  title: '会社概要',
  description: 'Nexeed Labの企業理念、価値観、そして革新的なAIとWeb開発ソリューションについてご紹介します。',
});

export default function AboutPage() {
  return (
    <div className="py-16 space-y-24">
      {/* Hero Section */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              title="Nexeed Labについて"
              description="ビジネスを変革するインテリジェントなデジタルソリューションの創造に情熱を注いでいます。"
              align="left"
            />
            
            <p className="text-lg">
              Nexeed LabはAIを活用したWebソリューションと業務システム開発を行っています。最先端技術とクリエイティブなデザインを組み合わせ、実際のビジネス課題を解決する卓越したデジタル体験を提供しています。
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="The Nexeed Lab team working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-muted rounded-2xl -z-10" />
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <SectionHeading
            title="ミッション & バリュー"
            description="明確な目的と強い信念を持って、卓越性を追求します。"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">ミッション</h3>
              <p className="text-muted-foreground">
                インテリジェントなデジタルソリューションで企業の成長、効率化、イノベーションを支援します。複雑なテクノロジーと実用的なビジネスアプリケーションの架け橋となり、すべての組織が先進技術を活用できるようにすることを目指しています。
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">バリュー</h3>
              <ul className="space-y-3">
                {[
                  "イノベーション：常に境界を押し広げ、新しい可能性を探求",
                  "卓越性：提供するすべてにおいて最高品質へのこだわり",
                  "誠実性：信頼、透明性、正直さに基づく関係構築",
                  "協働：真のパートナーとしてクライアントと密接に協力",
                  "インパクト：実測可能な成果を生み出すソリューションの追求"
                ].map((value) => (
                  <li key={value} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Expertise */}
      <section className="container">
        <SectionHeading
          title="専門分野"
          description="私たちを特別な存在にする専門的なスキルとテクノロジー"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: BrainCircuit,
              title: "AI & 機械学習",
              description: "学習し、適応し、パーソナライズされた体験と自動化を提供するインテリジェントシステムの開発"
            },
            {
              icon: TrendingUp,
              title: "モダンWeb開発",
              description: "最新のフレームワークとテクノロジーを使用した、高速で応答性の高い魅力的なWebアプリケーションの作成"
            },
            {
              icon: Users,
              title: "ユーザー中心設計",
              description: "ユーザーを魅了し、ビジネス目標を達成する直感的なインターフェースとシームレスな体験の創造"
            }
          ].map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      
    </div>
  );
}