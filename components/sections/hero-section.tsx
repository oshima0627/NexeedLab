"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedGradientBackground } from "@/components/animations/animated-gradient-background";
import { AnimatedText } from "@/components/animations/animated-text";
import Link from "next/link";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <AnimatedGradientBackground />
      
      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              <span className="text-primary">AI駆動型</span>の<br /><AnimatedText text="ビジネスソリューション" className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent" />
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md">
              最先端技術とデザインで、アイデアをインテリジェントなデジタル体験に変換します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="gap-2 group">
                <Link href="/services">
                  サービスを見る
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  実績を見る
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/80 via-purple-500/80 to-blue-600/80 p-1">
              <div className="rounded-lg bg-background/90 backdrop-blur-sm h-full w-full flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    "AI開発", 
                    "Webアプリケーション", 
                    "SEO対策", 
                    "業務システム"
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-primary/5 dark:bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center text-center"
                    >
                      <p className="font-medium">{service}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 h-24 w-24 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}