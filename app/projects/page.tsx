"use client"

import { useState } from "react"
import Link from "next/link"
import { Dithering } from "@paper-design/shaders-react"

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

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
        {/* Theme toggle button */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
            }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

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

          {/* Footer */}
          <div className="mt-12 border-t border-opacity-20" style={{ borderColor: isDarkMode ? "white" : "black" }}>
            <p className="text-xs opacity-50 mt-6">
              Each project represents my commitment to clean code, thoughtful design, and solving real problems.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 95%)"}
          colorFront={isDarkMode ? "hsl(320, 100%, 70%)" : "hsl(220, 100%, 70%)"}
          shape="cat"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  )
}
