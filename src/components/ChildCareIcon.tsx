"use client"

import { useState } from "react";
import * as motion from "motion/react-client"
import ChildCareIcon from '@mui/icons-material/ChildCare';

export default function ChessKnight() {
    const [isHover, setHover] = useState(false);
    return(
        <>
            <motion.div animate={{ scale: isHover ? 1.5 : 1, rotate: isHover ? 720 : 0 }}
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}>
                    <div className="py-6"><ChildCareIcon fontSize="large" /></div>
            </motion.div>
        </>
    );
}