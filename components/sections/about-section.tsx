"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="The Nexeed Lab team working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-muted rounded-2xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeading
              title="Nexeed Labについて"
              description="革新的なデジタルソリューションの創造に情熱を注いでいます"
              align="left"
            />
            
            <div className="space-y-4">
              <p>
                Nexeed Labでは、最先端技術とクリエイティブなデザインを組み合わせ、卓越したデジタル体験を提供しています。AIとWeb開発における私たちの専門知識により、実際のビジネス課題を解決するインテリジェントなソリューションを構築しています。
              </p>
            </div>
            
            <Button asChild>
              <Link href="/about">
                会社概要を見る
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}