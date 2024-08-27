import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    color: string;
    size: string;
    top: string;
    left: string;
    delay: number;
}

const FloatingShape = (props: Props) => {
    const { color, size, top, left, delay } = props
    return (
        <motion.div className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl `}
            animate={{
                y: ["0%", "100%", "0%"],
                x: ["0%", "100%", "0%"],
                rotate: [0, 360],
            }}
            transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                delay,
            }}
            style={{top, left}}
            aria-hidden="true"
        />
    )
}

export default FloatingShape