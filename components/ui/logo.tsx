"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex items-center gap-1.5", className)}
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="relative"
        >
          <div className={cn(
            "font-bold tracking-tighter",
            sizes[size]
          )}>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">N</span>
            <span>exeed</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-primary bg-clip-text text-transparent ml-1">Lab</span>
          </div>
          <div className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 via-purple-500/50 to-blue-500/50 blur-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
}