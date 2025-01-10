"use client";

import { useState } from 'react';

export default function MyButton() {
    const [count, setCount] = useState(0);
  function onClickButton() {
    setCount(count + 1);
    alert('CLICK!');
  }

  return (
    <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" onClick={onClickButton}>Clicked {count} times</button>
  )

}