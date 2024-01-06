"use client";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
};

export default function Slide({ children, delay = 0, duration = 1000 }: Props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`transition-transform ${
        animate ? "translate-y-0" : "translate-y-20"
      } ease-in duration-${duration}`}
    >
      {children}
    </div>
  );
}
