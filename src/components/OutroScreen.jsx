"use client"

import { motion } from "framer-motion"

export default function OutroScreen() {
    return (
        <div className="w-full flex flex-col items-center justify-center relative">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-7 will-change-transform"
            >
                {/* GIF */}
                <motion.img
                    src="/gifs/cute.gif"
                    alt="cute teddy"
                    className="w-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Outro Text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl md:text-3xl text-foreground text-center text-balance leading-normal drop-shadow-[0_0_8px_rgba(155,77,255,0.35)]"
                >
                    This was meant for you❤️ 
                </motion.p>

            </motion.div>
        </div>
    )
}
