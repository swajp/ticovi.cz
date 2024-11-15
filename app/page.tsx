import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center flex-col gap-3">
            <h1 className="text-4xl font-bold">ti co ví 💀 mango mango 🥭</h1>
            <Image src="/mango.jpg" alt="ti co ví" width={300} height={1125} />
        </div>
    )
}
