"use client"

import { Card } from "@/components/ui/card"
import { Clock, Brain } from "lucide-react"

export function VisionSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Card className="glass-morphism p-12 md:p-20 text-center relative overflow-hidden group">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 opacity-20 group-hover:opacity-40 transition-opacity">
            <Clock className="w-32 h-32 text-amber-500 animate-spin" style={{ animationDuration: "20s" }} />
          </div>
          <div className="absolute bottom-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
            <Brain className="w-32 h-32 text-orange-500 animate-pulse" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent text-glow">
                "Time never changed…
              </span>
              <br />
              <span className="text-foreground">minds did.</span>
              <br />
              <span className="text-primary text-glow">Let's reprogram the future."</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">— Dr. Mouhammad Samman</p>
          </div>

          {/* Animated Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(251, 191, 36)" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" />
              </linearGradient>
            </defs>
            <path
              d="M 0,100 Q 200,50 400,100 T 800,100"
              stroke="url(#circuit-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="30" dur="2s" repeatCount="indefinite" />
            </path>
            <path
              d="M 0,300 Q 200,250 400,300 T 800,300"
              stroke="url(#circuit-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
            >
              <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </Card>
      </div>
    </section>
  )
}
