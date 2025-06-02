"use client"

import { Button } from "../ui/button"
import { ChevronDown, Download } from "lucide-react"
import image from "../../assets/profile.jpg"

export default function HeroSection() {
    const scrollToNext = () => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative bg-gray-50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-light text-gray-600 mb-4">My Self,</h1>
                        <h2 className="text-4xl md:text-6xl font-light text-red-400 mb-8">Mubashir Ali Hassan</h2>
                        <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                            I’m a Full Stack Developer focused on building modern, responsive web experiences. I create scalable and user-centered solutions using the MERN stack, always eager to learn and grow in the tech world..            </p>
                        <a
                            href="https://drive.google.com/uc?export=download&id=112k1M-KGZjOd3ZTbeeJExHAwL8qVVD8n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full px-8 py-3 border-gray-400 text-gray-600 hover:border-red-400 hover:text-red-400 transition-colors text-lg"
                        >
                            <Button
                                className="rounded-full px-8 py-3 border-gray-400 text-gray-600 hover:border-red-400 hover:text-red-400 transition-colors text-lg"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download CV
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative order-1 lg:order-2">
                    <div className="relative bg-gray-200 rounded-3xl p-8 max-w-md mx-auto">
                        {/* <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Rob Oliver - Professional Portrait"
              width={400}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            /> */}
                        <img
                            src={image}
                            alt="Rob Oliver - Professional Portrait"
                            className="w-full h-auto rounded-2xl object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-8">
                        <div className="bg-white rounded-2xl px-6 py-4 shadow-lg">
                            <p className="text-gray-500 text-sm mb-1">I am a</p>
                            <p className="text-blue-500 font-semibold text-lg border-b-2 border-blue-500 inline-block">Web developer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors"
            >
                <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
        </section>
    )
}
