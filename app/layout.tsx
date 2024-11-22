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
    title: "Ti co ví 💀 Mango Mango 🥭 - Objev Vituse",
    description: "Ti, co vědí, se smějí nejvíc! Stránka jen pro ty, co ví. 🤫",
    metadataBase: new URL("https://ticovi.cz/")
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
                <Link href="mailto:mango@ticovi.cz" className="absolute top-5 left-5 text-center text-xs text-black pb-4">
                    mango@ticovi.cz
                </Link>
                <Analytics />
            </body>
        </html>
    )
}
