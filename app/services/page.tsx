import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";
import { 
  BrainCircuit, 
  Globe, 
  Database, 
  Wrench, 
  Search,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import { StructuredData } from "@/components/seo/structured-data";
import { servicesStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: 'サービス一覧 - AI開発・Web制作・業務システム',
  description: 'Nexeed LabのAI開発、Webアプリケーション開発、Webサイト制作、業務システム開発、SEO・MEO対策サービスをご紹介。大阪を拠点に最新技術でビジネスを支援します。',
  keywords: ['AI開発', 'Webアプリケーション開発', 'Webサイト制作', '業務システム開発', 'SEO対策', 'MEO対策', '大阪', 'システム開発'],
  openGraph: {
    title: 'サービス一覧 - AI開発・Web制作・業務システム | Nexeed Lab',
    description: 'AI開発、Webアプリケーション開発、Webサイト制作、業務システム開発、SEO・MEO対策サービスをご紹介。大阪を拠点に最新技術でビジネスを支援します。',
    url: 'https://www.nexeed-web.com/services',
  },
});

const services = [
  {
    id: "ai-web-apps",
    title: "AIアプリケーション開発",
    description: "人工知能を活用して、パーソナライズされた体験と複雑なタスクの自動化を提供するスマートで適応性の高いWebアプリケーションを開発します。",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "ビジネスニーズに合わせたカスタムAIモデル",
      "チャットボットとコンテンツ分析のための自然言語処理",
      "予測分析のための機械学習アルゴリズム",
      "画像認識のためのコンピュータビジョンソリューション",
      "音声認識と音声処理アプリケーション",
      "インテリジェントな推奨システム"
    ],
    icon: BrainCircuit,
  },
  {
    id: "website-design",
    title: "Webサイト制作",
    description: "モダンなデザイン原則、直感的なユーザーインターフェース、シームレスな体験で、魅力的なレスポンシブWebサイトを制作します。",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "すべてのデバイスで最適な表示を実現するレスポンシブデザイン",
      "エンゲージメント向上のためのユーザー中心設計",
      "カスタムアニメーションとインタラクティブ要素",
      "高速読み込みのためのパフォーマンス最適化",
      "インクルーシブなユーザー体験のためのアクセシビリティ対応",
      "アクションを促すコンバージョン重視のレイアウト"
    ],
    icon: Globe,
  },
  {
    id: "business-systems",
    title: "業務システム開発",
    description: "業務を効率化し、生産性を向上させ、意思決定に役立つ洞察を提供するカスタムソフトウェアソリューションを開発します。",
    image: "https://images.pexels.com/photos/1181281/pexels-photo-1181281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "カスタムCRMおよびERPシステム開発",
      "自動化されたワークフローと業務プロセス管理",
      "在庫管理とサプライチェーンソリューション",
      "人事・従業員管理システム",
      "財務・会計ソフトウェアの統合",
      "データ分析とビジネスインテリジェンスダッシュボード"
    ],
    icon: Database,
  },
  {
    id: "maintenance",
    title: "保守・運用",
    description: "包括的な保守・運用サービスにより、デジタル資産のセキュリティ、最新性、最適なパフォーマンスを確保します。",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "定期的なセキュリティ更新と脆弱性評価",
      "パフォーマンスモニタリングと最適化",
      "バックアップと災害復旧計画",
      "技術サポートと問題解決",
      "コンテンツ更新と管理",
      "ソフトウェアとプラットフォームのアップグレード"
    ],
    icon: Wrench,
  },
  {
    id: "seo-meo",
    title: "SEO・MEO対策",
    description: "戦略的な検索エンジン最適化とマップ最適化サービスにより、オンラインでの視認性を向上させ、ターゲットトラフィックとコンバージョンを増加させます。",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "包括的なキーワードリサーチと戦略",
      "オンページと技術的なSEO最適化",
      "検索のためのコンテンツ戦略と制作",
      "Googleマイビジネス最適化",
      "ローカル検索とマップ表示の強化",
      "分析とパフォーマンスレポート"
    ],
    icon: Search,
  },
];

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={servicesStructuredData} />
      <div className="py-16 space-y-24">
        <div className="container">
          <SectionHeading
            title="サービス"
            description="最新技術を活用した包括的なデジタルソリューションで、デジタル時代におけるビジネスの成功を支援します。"
          />
        </div>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="py-16">
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">{service.description}</p>
                
                <div className="space-y-3 pt-4">
                  <h3 className="text-xl font-medium">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      </div>
    </>
  );
}