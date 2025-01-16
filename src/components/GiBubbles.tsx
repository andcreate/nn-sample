"use client"

import { useState } from "react";
import { motion } from "motion/react"
import { GiBubbles } from "react-icons/gi";

export default function ChessKnight() {
    const [isHover, setHover] = useState(false);
    return(
        <>
            <motion.div animate={{ scale: isHover ? 1.5 : 1, rotate: isHover ? 720 : 0 }}
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}>
                    <div className="py-6"><GiBubbles /></div>
            </motion.div>
        </>
    );
}