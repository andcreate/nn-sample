"use client"

import { motion, useScroll, useSpring } from "motion/react"

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
      <motion.div
        className="progress-bar dark:progress-bar-dark z-50 block"
         style={{ scaleX }}
      />
  );
}
