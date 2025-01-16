"use client"

import { motion, useScroll, useSpring } from "motion/react"
// import * as motion from "motion/react-client"

export default function Progressbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="dark">
      <motion.div className="progress-bar bg-brown1 dark:bg-gray0 z-50 block" style={{ scaleX }} />
    </div>
  )
}
