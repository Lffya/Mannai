"use client"

import { useState } from "react"
import { Globe, MapPin, Phone, Mail, Copy, Sun, Moon } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [copySuccess, setCopySuccess] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handlePhoneClick = () => {
    window.location.href = "tel:+974-1234-5678"
  }

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText("info@mannai-ict.com")
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
          : "bg-gradient-to-br from-blue-50 via-white to-gray-100"
      }`}
    >
      {/* Full Background Animations */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Animated Gradient Orbs - Full Coverage */}
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? "bg-blue-500/10" : "bg-blue-400/20"
          }`}
        ></div>
        <div
          className={`absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full blur-3xl animate-pulse delay-1000 ${
            isDarkMode ? "bg-purple-500/10" : "bg-purple-400/20"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-2000 ${
            isDarkMode ? "bg-cyan-500/10" : "bg-cyan-400/20"
          }`}
        ></div>
        <div
          className={`absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse delay-3000 ${
            isDarkMode ? "bg-indigo-500/10" : "bg-indigo-400/20"
          }`}
        ></div>

        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              isDarkMode ? "bg-blue-400/30" : "bg-blue-600/40"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}

        {/* Geometric Background Pattern - Full Coverage */}
        <div className="absolute inset-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              className={isDarkMode ? "text-blue-400" : "text-blue-600"}
            />
          </svg>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
            isDarkMode
              ? "bg-slate-800/50 border-slate-700/50 text-yellow-400 hover:bg-slate-700/50"
              : "bg-white/50 border-gray-300/50 text-blue-600 hover:bg-white/70"
          }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Business Card Container */}
      <div className="z-10 w-full max-w-md">
        <div
          className={`w-full h-full backdrop-blur-xl rounded-3xl shadow-2xl border relative overflow-hidden transition-all duration-300 ${
            isDarkMode ? "bg-slate-800/90 border-slate-700/50" : "bg-white/90 border-gray-200/50"
          }`}
        >
          {/* Subtle Inner Glow */}
          <div
            className={`absolute inset-0 rounded-3xl ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                : "bg-gradient-to-br from-blue-400/10 to-purple-400/10"
            }`}
          ></div>

          <div className="card-content p-6 sm:p-8">
            {/* Header with Logo */}
            <div className="space-y-4 relative z-10 mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex-shrink-0 bg-white rounded-lg p-1">
                  <Image
                    src="/images/mannai-logo.jpg"
                    alt="Mannai ONE Logo"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h1
                    className={`text-xl sm:text-2xl font-bold leading-tight ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Mannai ITS
                  </h1>
                  <p className={`text-sm sm:text-base ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                    IT Solutions Division
                  </p>
                </div>
              </div>
              <p className={`text-xs sm:text-sm leading-tight ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Mannai Corporation QPSC
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5 relative z-10">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDarkMode ? "bg-green-500/20" : "bg-green-100"}`}>
                  <Phone className={`w-4 h-4 ${isDarkMode ? "text-green-400" : "text-green-600"}`} />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePhoneClick()
                  }}
                  className={`text-sm sm:text-base transition-colors underline min-w-0 hover:scale-105 transform duration-200 ${
                    isDarkMode ? "text-gray-300 hover:text-green-400" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  +974-1234-5678
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDarkMode ? "bg-blue-500/20" : "bg-blue-100"}`}>
                  <Mail className={`w-4 h-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleEmailCopy()
                  }}
                  className={`text-sm sm:text-base transition-colors flex items-center gap-2 min-w-0 hover:scale-105 transform duration-200 ${
                    isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <span className="truncate">info@mannai-ict.com</span>
                  <Copy className="w-3 h-3 flex-shrink-0" />
                </button>
                {copySuccess && (
                  <span className={`text-xs flex-shrink-0 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                    Copied!
                  </span>
                )}
              </div>

              {/* Website */}
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDarkMode ? "bg-purple-500/20" : "bg-purple-100"}`}>
                  <Globe className={`w-4 h-4 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />
                </div>
                <span className={`text-sm sm:text-base min-w-0 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  www.mannai-ict.com
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg flex-shrink-0 ${isDarkMode ? "bg-orange-500/20" : "bg-orange-100"}`}>
                  <MapPin className={`w-4 h-4 mt-0.5 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`} />
                </div>
                <div
                  className={`text-xs sm:text-sm leading-relaxed min-w-0 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <p>P.B. No. 76, Building No. 72, Zone 57</p>
                  <p>East Industrial Street No. 100</p>
                  <p>Doha, Qatar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-6 z-10">
        <p
          className={`text-sm italic text-center px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
            isDarkMode
              ? "text-gray-400 bg-gray-800/30 border-gray-700/30"
              : "text-gray-600 bg-white/30 border-gray-300/30"
          }`}
        >
          "Securing Today, Safeguarding Tomorrow"
        </p>
      </div>

      <style jsx>{`
        .card-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateZ(1px);
          min-width: 0;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-15px) rotate(120deg); 
            opacity: 0.8;
          }
          66% { 
            transform: translateY(8px) rotate(240deg); 
            opacity: 0.6;
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
