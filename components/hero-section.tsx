"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute top-8 right-8 z-20">
        <LanguageToggle />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div
        className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-cyan-green" />
          <span className="text-sm text-muted-foreground">AI Transformation Expert</span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
        >
          <span className="text-glow" style={{ color: "#00FFD1" }}>
            {t("heroHeadline")}
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}
        >
          {t("heroSubheadline")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="group neon-border text-lg px-8 py-6 transition-all duration-300"
            style={{ backgroundColor: "rgba(0, 255, 209, 0.1)", borderColor: "#00FFD1", color: "#00FFD1" }}
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("exploreWork")}
            <ArrowRight
              className={`${language === "ar" ? "mr-2 rotate-180" : "ml-2"} w-5 h-5 group-hover:translate-x-1 transition-transform`}
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-morphism text-lg px-8 py-6 hover:bg-primary/10 transition-all duration-300 bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("collaborate")}
          </Button>
        </div>

        {/* Holographic Grid Effect */}
        <div className="mt-20 relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFD1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3AE5FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 20}
                x2="800"
                y2={i * 20}
                stroke="url(#grid-gradient)"
                strokeWidth="1"
                opacity={1 - i * 0.05}
              />
            ))}
            {Array.from({ length: 40 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 20}
                y1="0"
                x2={i * 20}
                y2="400"
                stroke="url(#grid-gradient)"
                strokeWidth="1"
                opacity={0.3}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
