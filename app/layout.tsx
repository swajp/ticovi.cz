import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import Link from "next/link"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
})

export const metadata: Metadata = {
    title: "ti co ví 💀 mango mango 🥭",
    description: "Stránka jen pro ty, co ví. 🤫"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="cs">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <Link href="mailto:mango@ticovi.cz" className="absolute bottom-0 left-0 right-0 text-center text-xs text-black pb-4">
                    mango@ticovi.cz
                </Link>
                <Analytics />
            </body>
        </html>
    )
}
