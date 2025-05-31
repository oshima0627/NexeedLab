"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  BrainCircuit, 
  Globe, 
  Database, 
  Wrench, 
  Search,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    id: "ai-web-apps",
    title: "AIアプリケーション開発",
    description: "人工知能を活用して、パーソナライズされた体験と複雑なタスクの自動化を提供するスマートで適応性の高いWebアプリケーションを開発します。",
    icon: BrainCircuit,
    color: "from-blue-600 to-purple-600",
  },
  {
    id: "website-design",
    title: "Webサイト制作",
    description: "モダンなデザイン原則、直感的なユーザーインターフェース、シームレスな体験で、魅力的なレスポンシブWebサイトを制作します。",
    icon: Globe,
    color: "from-teal-600 to-emerald-600",
  },
  {
    id: "business-systems",
    title: "業務システム開発",
    description: "業務を効率化し、生産性を向上させ、意思決定に役立つ洞察を提供するカスタムソフトウェアソリューションを開発します。",
    icon: Database,
    color: "from-orange-600 to-amber-600",
  },
  {
    id: "maintenance",
    title: "保守・運用",
    description: "包括的な保守・運用サービスにより、デジタル資産のセキュリティ、最新性、最適なパフォーマンスを確保します。",
    icon: Wrench,
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "seo-meo",
    title: "SEO・MEO対策",
    description: "戦略的な検索エンジン最適化とマップ最適化サービスにより、オンラインでの視認性を向上させ、ターゲットトラフィックとコンバージョンを増加させます。",
    icon: Search,
    color: "from-purple-600 to-pink-600",
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/30" id="services">
      <div className="container">
        <SectionHeading
          title="サービス"
          description="最新技術を活用した包括的なデジタルソリューションで、デジタル時代におけるビジネスの成功を支援します。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              className={cn(
                "relative group rounded-xl p-6 bg-card hover:shadow-md transition-all duration-300 overflow-hidden",
                activeService === service.id ? "shadow-lg" : ""
              )}
            >
              <div 
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r", 
                  service.color
                )} 
              />
              
              <div className="relative z-10">
                <div className={cn(
                  "inline-flex p-3 rounded-lg mb-4 bg-gradient-to-r", 
                  service.color
                )}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}