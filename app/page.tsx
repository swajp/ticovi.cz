"use client"

import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"

export default function Home() {
    return (
        <div className="py-8 h-full flex items-center justify-center flex-col gap-3 bg-orange-100">
            <motion.div
                initial={{
                    y: 0,
                    rotate: 0,
                    opacity: 0.8,
                    filter: "brightness(1)"
                }}
                animate={{
                    y: [0, -10, 0], // Pohyb nahoru a dolů
                    rotate: [0, 8, -2, 0], // Jemná rotace
                    opacity: [0.8, 1, 0.8], // Mírné zjasnění a stmívání
                    filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] // Zvýraznění glow efektu
                }}
                transition={{
                    duration: 3, // Délka animace
                    repeat: Infinity, // Nekonečné opakování
                    ease: "easeInOut" // Hladké přechody
                }}
                style={{
                    fontSize: "5rem",
                    display: "inline-block",
                    textAlign: "center",
                    textShadow: "0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6)", // Gl
                    color: "white" // Barva textu pro hologram
                }}
            >
                🥭
            </motion.div>

            <div className="flex flex-col gap-4 text-center items-center justify-center">
                <h1 className="text-3xl max-w-md font-bold">Šiřte tuto fotku na invernetu, JEN PRO TY CO VÍ!🥭</h1>
                <Image src="/mango.jpg" alt="ti co ví" width={300} height={1125} />
            </div>
        </div>
    )
}
