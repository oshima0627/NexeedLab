"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Portfolio {
  id: number;
  title: string;
  slug: string;
  description: string;
  project_url?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export function PortfolioSection() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`);
        if (response.ok) {
          const data = await response.json();
          setPortfolios(data);
        }
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolios();
  }, []);

  if (loading) {
    return (
      <section className="py-20" id="portfolio">
        <div className="container">
          <SectionHeading
            title="実績紹介"
            description="各分野における実績を随時更新しています。"
          />
          <div className="text-center">
            <p className="text-muted-foreground">読み込み中...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="portfolio">
      <div className="container">
        <SectionHeading
          title="実績紹介"
          description="各分野における実績を随時更新しています。"
        />

        {portfolios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{portfolio.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {portfolio.description}
                </p>
                {portfolio.project_url && (
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={portfolio.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        詳細を見る
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              実績事例は、プロジェクトの完了に応じて順次公開していきます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { id: "ai", name: "AI開発", icon: "🤖" },
                { id: "web", name: "Web開発", icon: "💻" },
                { id: "business", name: "業務システム", icon: "📊" }
              ].map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl shadow-sm text-center"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">順次公開予定</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}