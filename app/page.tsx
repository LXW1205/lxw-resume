"use client"

import { Dithering } from "@paper-design/shaders-react"
import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <div
        className={`w-1/2 p-8 font-mono relative z-10 flex flex-col ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Theme toggle button in top right of left panel */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
            }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            // Sun icon for light mode
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav className="absolute top-8 left-8">
          <div className="flex space-x-8 text-sm">
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>home</span>
            <Link 
              href="/projects" 
              className={`transition-opacity hover:opacity-60 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              projects
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Header */}
          <div className="mt-16">
            <h1 className="text-sm font-mono mb-12 opacity-60">lee.xiu.wei</h1>
            <div className="mb-12">
              <h2 className="text-4xl font-normal mb-2">LEE XIU WEI</h2>
              <h3 className="text-lg opacity-70">Victor</h3>
              <p className="text-sm opacity-60 mt-4">Computer Science Student</p>
              <p className="text-sm opacity-60">Specializing in Software Engineering</p>
            </div>

            {/* Bio */}
            <div className="max-w-md space-y-4 text-sm leading-relaxed opacity-80 mb-12">
              <p>Passionate about learning new technologies and beautiful design.</p>
              <p>Building elegant solutions that solve real problems.</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <div className="border-t border-opacity-20" style={{ borderColor: isDarkMode ? "white" : "black" }}></div>
            <div className="space-y-2 text-sm">
              <div>
                <p className="opacity-60 mb-1">Email</p>
                <a 
                  href="mailto:xiuwei1205@gmail.com"
                  className="hover:opacity-60 transition-opacity"
                >
                  xiuwei1205@gmail.com
                </a>
              </div>
              <div>
                <p className="opacity-60 mb-1">LinkedIn</p>
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
