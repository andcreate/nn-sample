"use client";

import * as motion from "motion/react-client"
import { useRef } from 'react';

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const divRef = useRef(null);
  return (
    <>
    <motion.div 
    ref={divRef}
    className="fixed w-full h-full bg-gray1 dark:bg-gray4 z-50 top-0 left-0"
    initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        exit={{visibility: "hidden"}}
        onAnimationComplete={() => {
        // アニメーション終了時に実行する処理
        divRef.current.style.display = 'none'; // 要素を非表示にする
      }}>
    </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </>
  );
}