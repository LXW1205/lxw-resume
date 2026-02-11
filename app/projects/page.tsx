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

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [ditheringConfig, setDitheringConfig] = useState(generateDitheringConfig())

  const projects = [
    {
      title: "Project Title",
      description: "Brief description of your project and its impact.",
      technologies: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Another Project",
      description: "What you built and what technologies you used.",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Side Project",
      description: "An interesting project that showcases your skills.",
      technologies: ["Python", "FastAPI", "React"],
      link: "#"
    }
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
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>projects</span>
            <Link
              href="/tech"
              className={`transition-opacity hover:opacity-60 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              tech
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col mt-16">
          <h1 className="text-4xl font-normal mb-2">Notable Projects</h1>
          <p className="text-sm opacity-60 mb-12">Showcasing my work and technical expertise</p>

          {/* Projects Grid */}
          <div className="space-y-8 flex-1">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`border-l-2 pl-6 py-4 transition-opacity hover:opacity-70 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-normal mb-2">{project.title}</h3>
                    <p className="text-sm opacity-70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 rounded-full ${isDarkMode
                            ? "bg-white/10 text-white"
                            : "bg-black/10 text-black"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="ml-4 text-sm opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
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
