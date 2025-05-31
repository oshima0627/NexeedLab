"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete && once) return;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 70); // Typing speed

    return () => clearInterval(interval);
  }, [currentIndex, text, isComplete, once]);

  return (
    <span className={cn("", className)}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}