"use client"

import { Dithering } from "@paper-design/shaders-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import React from "react"
import Link from "next/link"

const generateDitheringConfig = () => {
  const shapes = ["simplex", "warp", "dots", "wave", "ripple", "swirl", "sphere"] as const
  const types = ["4x4", "8x8", "2x2", "random"] as const
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
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [ditheringConfig, setDitheringConfig] = useState(generateDitheringConfig())

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = theme === "dark"
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isCarouselHovered, setIsCarouselHovered] = useState(false)

  const projects = [
    {
      title: "Digital Scholarship and Tracking System",
      description: "A comprehensive platform for managing scholarship applications, tracking student eligibility, and automating award distribution workflows.",
      technologies: ["HTML", "TailwindCSS", "Java", "PostgreSQL"],
      link: "#",
      images: [
        "/screenshots/scholarship-system-1.png",
        "/screenshots/scholarship-system-2.png",
        "/screenshots/scholarship-system-3.png"
      ]
    },
    {
      title: "Database of Cinema Ticketing System",
      description: "Designed and implemented a relational database schema for managing movie screenings, ticket reservations, and customer transactions.",
      technologies: ["PostgreSQL"],
      link: "#",
      images: [
        "/screenshots/cinema-db-1.png",
        "/screenshots/cinema-db-2.png",
        "/screenshots/cinema-db-3.png"
      ]
    },
    {
      title: "Parking Lot System",
      description: "Object-oriented parking management system featuring real-time spot tracking, automated billing, and receipt generation.",
      technologies: ["Java"],
      link: "#",
      images: [
        "/screenshots/parking-system-1.png",
        "/screenshots/parking-system-2.png",
        "/screenshots/parking-system-3.png"
      ]
    },
    {
      title: "MixToolz",
      description: "A web-based toolbox featuring multiple utility applications with an intuitive interface and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      images: [
        "/screenshots/mixtools-1.png",
        "/screenshots/mixtools-2.png",
        "/screenshots/mixtools-3.png"
      ]
    },
    {
      title: "Seminar Management System",
      description: "Desktop application for coordinating seminar schedules, managing speaker assignments, and tracking attendee registrations.",
      technologies: ["Java"],
      link: "#",
      images: [
        "/screenshots/seminar-system-1.png",
        "/screenshots/seminar-system-2.png",
        "/screenshots/seminar-system-3.png"
      ]
    }
  ]

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null

  // Reset image index when selecting a different project
  React.useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedProjectIndex])

  // Auto-scroll effect for carousel
  React.useEffect(() => {
    if (selectedProject && !isCarouselHovered && selectedProject.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
      }, 3000) // 3 seconds auto-scroll
      return () => clearInterval(interval)
    }
  }, [selectedProject, isCarouselHovered])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Left Side - Content */}
      <div
        className={`w-full lg:w-1/2 p-8 font-mono relative z-10 flex flex-col min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Theme and randomize buttons in top right */}
        <div className="absolute top-8 right-8 flex flex-col gap-3 z-50">
          <button
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
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
          <p className="text-sm opacity-60 mb-12">Showcasing my academic work and technical expertise</p>

          {/* Projects List */}
          <div className="space-y-8 flex-1">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`border-l-2 pl-6 py-4 transition-all cursor-pointer ${selectedProjectIndex === index
                  ? isDarkMode
                    ? "border-white"
                    : "border-black"
                  : hoveredProjectIndex === index
                    ? isDarkMode
                      ? "border-gray-500"
                      : "border-gray-500"
                    : isDarkMode
                      ? "border-gray-700"
                      : "border-gray-300"
                  }`}
                onClick={() => setSelectedProjectIndex(index)}
                onMouseEnter={() => setHoveredProjectIndex(index)}
                onMouseLeave={() => setHoveredProjectIndex(null)}
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
          <div className="space-y-6 pb-8">
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

      {/* Right Side - Visuals (Dithering + Carousel) */}
      <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen lg:fixed lg:right-0 lg:top-0 lg:z-0">
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

        {/* Carousel Overlay */}
        {selectedProject && (
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${selectedProject ? "opacity-100" : "opacity-0"
              }`}
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            style={{ width: "95%", maxWidth: "1000px" }}
          >
            <div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{ aspectRatio: "16/9" }}
            >
              {/* Images */}
              <div className="relative w-full h-full overflow-hidden">
                {selectedProject.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="absolute inset-0 transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateY(${(imgIdx - currentImageIndex) * 100}%)`
                    }}
                  >
                    <img
                      src={img}
                      alt={`${selectedProject.title} screenshot ${imgIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {selectedProject.images.map((_, imgIdx) => (
                  <button
                    key={imgIdx}
                    onClick={() => setCurrentImageIndex(imgIdx)}
                    className={`w-2 h-2 rounded-full transition-all ${imgIdx === currentImageIndex
                      ? "bg-white w-4 shadow-lg"
                      : "bg-white/40 hover:bg-white/60"
                      }`}
                    aria-label={`View screenshot ${imgIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
