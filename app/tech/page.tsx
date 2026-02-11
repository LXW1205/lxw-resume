"use client"

import { Dithering } from "@paper-design/shaders-react"
import { useState } from "react"
import Link from "next/link"

const generateDitheringConfig = () => {
    const shapes = ["cat", "circle", "square", "triangle", "star"]
    const types = ["4x4", "8x8", "2x2"]
    const pxSizes = [2, 3, 4, 5]

    const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
    const randomType = types[Math.floor(Math.random() * types.length)]
    const randomPxSize = pxSizes[Math.floor(Math.random() * pxSizes.length)]
    const randomRotation = Math.floor(Math.random() * 360)
    const randomScale = (Math.random() * 0.5 + 0.6).toFixed(2)

    // Random colors for light mode
    const lightHues = [220, 240, 280, 300, 320, 20, 40, 60]
    const randomLightHue = lightHues[Math.floor(Math.random() * lightHues.length)]

    // Random colors for dark mode
    const darkHues = [280, 300, 320, 340, 20, 40, 120, 200]
    const randomDarkHue = darkHues[Math.floor(Math.random() * darkHues.length)]

    return {
        shape: randomShape,
        type: randomType,
        pxSize: randomPxSize,
        rotation: randomRotation,
        scale: parseFloat(randomScale),
        lightHue: randomLightHue,
        darkHue: randomDarkHue,
    }
}

export default function TechPage() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [ditheringConfig, setDitheringConfig] = useState(generateDitheringConfig())

    const techStack = [
        { name: "HTML5", badge: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS3", badge: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
        { name: "TailwindCSS", badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        { name: "JavaScript", badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
        { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
        { name: "React Native", badge: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
        { name: "Node.js", badge: "https://img.shields.io/badge/node.js-%2333993D.svg?style=for-the-badge&logo=node.js&logoColor=white" },
        { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
        { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" }
    ]

    const design = [
        { name: "Canva", badge: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" },
        { name: "Figma", badge: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" },
        { name: "Gimp", badge: "https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF" },
        { name: "LaTeX", badge: "https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white" },
    ]

    const devOps = [
        { name: "Git", badge: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
        { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Nginx Proxy Manager", badge: "https://img.shields.io/badge/nginx_proxy_manager-%23F15833.svg?style=for-the-badge&logo=nginxproxymanager&logoColor=white" },
        { name: "Portainer", badge: "https://img.shields.io/badge/portainer-%2313BEF9.svg?style=for-the-badge&logo=portainer&logoColor=white" },
    ]

    return (
        <div className="relative min-h-screen overflow-hidden flex">
            <div
                className={`w-1/2 p-8 font-mono relative z-10 flex flex-col ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
            >
                {/* Theme and randomize buttons in top right */}
                <div className="absolute top-8 right-8 flex flex-col gap-3 z-50">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors relative ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                            }`}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={() => setDitheringConfig(generateDitheringConfig())}
                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors relative ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                            }`}
                        aria-label="Randomize dithering effect"
                        title="Randomize effect"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none">
                            <path d="M1 4v6h6M23 20v-6h-6" />
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64M3.51 15A9 9 0 0 0 18.36 18.36" />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="absolute top-8 left-8">
                    <div className="flex space-x-8 text-sm">
                        <Link
                            href="/"
                            className={`transition-opacity hover:opacity-60 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                            home
                        </Link>
                        <Link
                            href="/projects"
                            className={`transition-opacity hover:opacity-60 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                            projects
                        </Link>
                        <span className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>tech</span>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="flex-1 flex flex-col mt-16">
                    <h1 className="text-4xl font-normal mb-2">Tech Stack</h1>
                    <p className="text-sm opacity-60 mb-12">Technologies and tools I work with</p>

                    {/* Tech Categories */}
                    <div className="space-y-12 flex-1">
                        {/* Tech Stack */}
                        <div>
                            <h2 className="text-xl font-normal mb-4 flex items-center gap-2">
                                <span>Tech Stack</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <img key={index} src={tech.badge} alt={tech.name} className="h-7" />
                                ))}
                            </div>
                        </div>

                        {/* Design */}
                        <div>
                            <h2 className="text-xl font-normal mb-4 flex items-center gap-2">
                                <span>Design</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {design.map((tool, index) => (
                                    <img key={index} src={tool.badge} alt={tool.name} className="h-7" />
                                ))}
                            </div>
                        </div>

                        {/* DevOps / Tools */}
                        <div>
                            <h2 className="text-xl font-normal mb-4 flex items-center gap-2">
                                <span>DevOps / Tools</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {devOps.map((tool, index) => (
                                    <img key={index} src={tool.badge} alt={tool.name} className="h-7" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <div className="border-t border-opacity-20" style={{ borderColor: isDarkMode ? "white" : "black" }}></div>
                        <div className="space-y-4 text-base">
                            <div>
                                <p className="opacity-60 mb-2">Email</p>
                                <a
                                    href="mailto:xiuwei1205@gmail.com"
                                    className="hover:opacity-60 transition-opacity"
                                >
                                    xiuwei1205@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="opacity-60 mb-2">GitHub</p>
                                <a
                                    href="https://github.com/LXW1205"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-60 transition-opacity"
                                >
                                    github.com/LXW1205
                                </a>
                            </div>
                            <div>
                                <p className="opacity-60 mb-2">LinkedIn</p>
                                <a
                                    href="https://linkedin.com/in/xiu-wei"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-60 transition-opacity"
                                >
                                    linkedin.com/in/xiu-wei
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 relative">
                <Dithering
                    style={{ height: "100%", width: "100%" }}
                    colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)"}
                    colorFront={isDarkMode ? `hsl(${ditheringConfig.darkHue}, 100%, 70%)` : `hsl(${ditheringConfig.lightHue}, 100%, 70%)`}
                    shape={ditheringConfig.shape}
                    type={ditheringConfig.type}
                    pxSize={ditheringConfig.pxSize}
                    offsetX={0}
                    offsetY={0}
                    scale={ditheringConfig.scale}
                    rotation={ditheringConfig.rotation}
                    speed={0.1}
                />
            </div>
        </div>
    )
}
