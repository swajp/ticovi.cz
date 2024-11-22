"use client"

import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"

export default function Home() {
    const [isClicked, setIsClicked] = React.useState(false)
    return (
        <div className="py-8 flex items-center justify-center flex-col gap-3 bg-orange-100">
            {!isClicked && (
                <>
                    <motion.div
                        role="button"
                        onClick={() => setIsClicked(!isClicked)}
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
                    <Image className="rounded-lg" src="/2211.png" alt="ti co ví" width={300} height={1125} />
                    <div className="w-full mx-auto max-w-lg p-6">
                        <h1 className="text-xl font-bold mx-auto mb-4 max-w-sm text-center text-gray-800">
                            Sushi Sam a Meatball Martin: Hovor století 🍣📞🍝
                        </h1>
                        <div className="h-64 overflow-y-auto border border-gray-300 rounded p-4 bg-gray-50">
                            <p className="text-gray-700">
                                Jednoho dne se Sushi Sam rozhodl zavolat svému starému kamarádovi Meatball Martinovi. Bylo to trochu zvláštní
                                přátelství – co má sushi společného s masovou koulí? Ale jejich absurdní smysl pro humor je spojoval už od první
                                konference o jídlech z celého světa.
                            </p>
                            <br />
                            <p className="text-gray-700">
                                Sam zvedl svůj smartphone (obal samozřejmě z mořských řas) a vytočil číslo. Na druhé straně linky se ozval hluboký
                                hlas s italským přízvukem:
                            </p>
                            <br />
                            <p className="text-gray-700 italic">
                                „Meatball Martin, maestro chutí a šampion špaget! Co pro tebe můžu udělat, Sammy-boy?“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                „Martine!“ zvolal Sam radostně. „Poslouchej, mám geniální nápad! Pojďme otevřít bistro. Ty budeš dělat své legendární
                                špagety a já sushi. Nazveme to… Fusion Fiesta!“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                Martin se zamyslel. „Sam, to zní úžasně, ale... sushi a špagety? Lidi by si mohli myslet, že jsme ztratili rozum!“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                „A co kdybychom to udělali právě proto?“ odpověděl Sam. „Představ si to: Špageto-sushi rolky! Masové kuličky v rýži!
                                Nebo… sushi s boloňskou omáčkou!“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                Na druhé straně bylo slyšet, jak Martinův rotariový telefon trochu vrže. „Sammy, to zní tak šíleně, že to MUSÍ
                                fungovat! Ale co marketing? Lidi nás musí nejdřív znát.“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                Sam se pousmál. „Martine, jsme už mem. Stačí zveřejnit, jak spolu voláme! Všechny generace Z to budou sdílet.“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                Martin se zasmál tak silně, až málem spadl z talíře. „Dobrá, Sammy-boy. Ale když to nevyjde, ty zaplatíš účet za
                                špagety!“
                            </p>
                            <br />
                            <p className="text-gray-700">
                                A tak spolu Sushi Sam a Meatball Martin nejenže zahájili nový gastronomický trend, ale stali se virálním hitem na
                                sociálních sítích. Lidi stáli fronty, aby ochutnali jejich šílené kombinace – a přitom se smáli, jak dvě tak rozdílná
                                jídla dokážou být nejlepšími přáteli.
                            </p>
                            <br />
                            <p className="text-gray-700 font-semibold">Motto jejich bistra? „Pro ty, co ví. A pro ty, co mají hlad.“ 😄</p>
                        </div>
                    </div>
                </>
            )}

            {isClicked && (
                <div className="flex flex-col gap-4 text-center items-center justify-center">
                    <h1 className="text-3xl max-w-md font-bold">Jsem Vitus, jsem jediný kdo ví, jsem mango🥭</h1>
                    <Image src="/mango.jpg" alt="ti co ví" width={300} height={1125} />
                </div>
            )}
        </div>
    )
}
