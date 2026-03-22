"use client"

import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"

function Background() {
    const [stars, setStars] = useState([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const starCount = 30
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 3 + 2,
        }))
        setStars(newStars)
    }, [])

    if (!mounted) return null

    return (
        <>
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full opacity-20"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: "2px",
                            height: "2px",
                        }}
                        animate={{
                            opacity: [0.15, 0.35, 0.15],
                            scale: [star.scale, star.scale * 1.5, star.scale],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div
                className="absolute inset-0 -z-1"
                style={{
                    background:
                        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)",
                }}
            />
        </>
    )
}

export default memo(Background)
