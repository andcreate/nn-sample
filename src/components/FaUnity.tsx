"use client"

import { useState } from "react";
import * as motion from "motion/react-client"
import UnitySvg from "../components/img/UnitySvg";

export default function ChessKnight() {
    const [isHover, setHover] = useState(false);
    return(
        <>
            <motion.div animate={{ scale: isHover ? 1.5 : 1, rotate: isHover ? 720 : 0 }}
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}>
                    <div className="py-7 w-7 h-auto fill-brown1"><UnitySvg /></div>
            </motion.div>
        </>
    );
}