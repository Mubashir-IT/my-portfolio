"use client"

import { Button } from "../ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
    const projects = [
        {
            title: "TRAVELIZO-Website",
            description: "A simple and clean travel website showcasing popular destinations and basic booking features.",
            image: "src/assets/travel.png?height=300&width=400",
            tags: ["WEB DESIGN", "DEVELOPMENT"],
            liveUrl: "https://travelizo-u2bt.vercel.app/",
            githubUrl: "",
        },
        {
            title: "MERN Auth System",
            description: "A secure and scalable user authentication system built with MongoDB, Express, React, and Node.js.",
            image: "src/assets/mern.png?height=300&width=400",
            tags: ["WEB APP", "DEVELOPMENT", "AUTHENTICATION"],
            liveUrl: "#",
            githubUrl: "#",
        }
        ,
        {
            title: "Utility Web App",
            category: "WEB DEVELOPMENT",
            description: "A simple and practical website featuring a To-Do List and an Age Calculator to help manage tasks and track age effortlessly.",
            image: "src/assets/todo.png?height=300&width=400",
            tags: ["WEB APP", "TOOLS"],
            liveUrl: "https://code-alpha-task1-gules.vercel.app/",
            githubUrl: "#",
        }
        ,
        {
            title: "Portfolio Website",
            category: "WEB DESIGN",
            description: "Clean and modern portfolio website for a creative professional.",
            image: "src/assets/portfolio.png?height=300&width=400",
            tags: ["WEB DESIGN", "DEVELOPMENT"],
            liveUrl: "https://my-portfolio-azure-five-45.vercel.app/",
            githubUrl: "#",
        },
        {
            title: "OrthoStride App ",
            category: "WEB DESIGN",
            description: `Developed a smart health monitoring mobile app using React Native and Node.js, designed to track gait patterns for users wearing sensor-equipped smart shoes.
            * Integrated real-time data collection via Bluetooth from multiple force sensors embedded in both shoes to provide accurate gait analysis.`
            ,
            image: "/placeholder.svg?height=300&width=400",
            tags: ["WEB DESIGN", "DEVELOPMENT"],
            liveUrl: "#",
            githubUrl: "#",
        }

        // {
        //     title: "Restaurant App",
        //     category: "MOBILE APP",
        //     description: "Food ordering mobile app with seamless user experience.",
        //     image: "/placeholder.svg?height=300&width=400",
        //     tags: ["MOBILE APP", "DEVELOPMENT"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        // },
    ]

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
                        My <span className="text-red-400">Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        Here are some of my recent projects that showcase my skills and creativity.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                    <Button className="rounded-full bg-gray-200 hover:bg-gray-300">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                    <Button className="rounded-full bg-gray-200 hover:bg-gray-300">
                                        <Github className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs text-red-400 font-medium mb-2">{project.category}</div>
                                <h3 className="text-xl font-medium text-gray-800 mb-3">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
