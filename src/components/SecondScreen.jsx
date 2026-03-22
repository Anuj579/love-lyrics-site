"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center will-change-transform"
            >
                <motion.div
                    className="mb-10 w-32 h-32 rounded-full border border-secondary/20 relative flex items-center justify-center"
                >
                    <motion.div
                        className="absolute inset-2 rounded-full bg-linear-to-br from-secondary/30 to-primary/10 backdrop-blur-md"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }}
                    />
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Heart className="w-18 h-18 text-secondary fill-current" />
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl text-center mb-10 max-w-3xl text-foreground leading-tight font-medium"
                >
                    Something I wanted to share
                </motion.h1>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <button
                        onClick={onNext}
                        className="px-10 py-4 bg-linear-to-r from-secondary to-primary rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:from-secondary/90 hover:to-primary/90 hover:shadow-secondary/20 flex items-center gap-2 font-medium"
                    >
                        Show me
                        <Heart size={20} className="mb-1 fill-white" />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
