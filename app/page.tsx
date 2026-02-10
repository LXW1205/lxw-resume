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

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [ditheringConfig, setDitheringConfig] = useState(generateDitheringConfig())

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <div
        className={`w-1/2 p-8 font-mono relative z-10 flex flex-col ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Theme and randomize buttons in top right */}
        <div className="absolute top-8 right-8 flex flex-col gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
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
          <button
            onClick={() => setDitheringConfig(generateDitheringConfig())}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
              }`}
            aria-label="Randomize dithering effect"
            title="Randomize effect"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64M3.51 15A9 9 0 0 0 18.36 18.36" />
            </svg>
          </button>
        </div>

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
            <h1 className="text-sm font-mono mb-12 opacity-60">lee.xiu.wei.cv</h1>
            <div className="mb-12">
              <h2 className="text-4xl font-normal mb-2">VICTOR LEE</h2>
              <h2 className="text-3xl font-normal mb-2">ASPIRING SOFTWARE ENGINEER</h2>
            </div>

            {/* Bio */}
            <div className="max-w-md space-y-4 text-sm leading-relaxed opacity-80 mb-12">
              <p>Passionate about learning new technologies and designs.</p>
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
