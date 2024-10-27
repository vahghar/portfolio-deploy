"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  texts: string[];  // Change to accept an array of strings
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  texts,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0); // Track the current text index

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < texts[textIndex].length) {
        setDisplayedText(texts[textIndex].substring(0, i + 1));
        setI(i + 1);
      } else {
        // After finishing typing, reset index and i to start the next text
        clearInterval(typingEffect);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length); // Cycle to the next text
          setI(0); // Reset the index for the next text
        }, 1000); // Optional pause before switching to the next text
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, textIndex, texts]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
    </h1>
  );
}
