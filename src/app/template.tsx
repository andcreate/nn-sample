"use client";

import * as motion from "motion/react-client"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <motion.div
      //   initial={{ y: 20, opacity: 0 }}
      //   animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
          initial={{ opacity: 0 }} // 初期状態
          animate={{ opacity: 1 }} // マウント時
          exit={{ opacity: 0 }}    // アンマウント時
      >
        {children}
      </motion.div>
  );
}