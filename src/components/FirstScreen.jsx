"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FirstScreen({ onNext }) {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8 } }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center will-change-transform"
            >
                <motion.div
                    className="mb-10 w-32 h-32 rounded-full border border-primary/20 relative flex items-center justify-center"
                >
                    <motion.div
                        className="absolute inset-2 rounded-full bg-linear-to-br from-primary/30 to-secondary/10 backdrop-blur-md"
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
                        <Heart className="w-18 h-18 text-primary fill-current" />
                    </motion.div>
                </motion.div>

                {/* heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-6xl text-center mb-6 max-w-3xl text-balance leading-tight text-foreground font-medium"
                >
                    I made something
                    <span className="block text-primary">for you</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg text-foreground/90 text-center max-w-md mb-10 font-light"
                >
                    Something small... but straight from the heart :)
                </motion.p>

                {/* button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <button
                        onClick={onNext}
                        className="px-10 py-4 bg-linear-to-r from-primary to-secondary text-primary-foreground rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-secondary/90 hover:shadow-primary/20 flex items-center gap-2 font-medium"
                    >
                        Open it <Heart size={20} className="mb-1 fill-white" />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}
