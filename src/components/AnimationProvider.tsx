"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// iOS 17 style spring config - bouncy, responsive
export const iosSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

// Softer spring for larger elements
export const iosSoftSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
  mass: 1,
};

// Snappy spring for buttons/toggles
export const iosSnappySpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
  mass: 0.5,
};

// iOS-style fade up with scale
export const iosFadeUp = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: iosSoftSpring,
};

// iOS-style card press animation
export const iosCardPress = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02, y: -4 },
  transition: iosSnappySpring,
};

// Stagger children animation
export const iosStagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

// Parallax scroll wrapper
export function ParallaxCard({
  children,
  className,
  offset = 30,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

// iOS blur-in animation
export const iosBlurIn = {
  initial: { opacity: 0, filter: "blur(10px)", scale: 0.9 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
  transition: { ...iosSoftSpring, duration: 0.6 },
};

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
