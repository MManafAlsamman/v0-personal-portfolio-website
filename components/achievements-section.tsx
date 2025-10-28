"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, TrendingUp, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="text-5xl md:text-6xl font-bold text-glow font-orbitron" style={{ color: "#00FFD1" }}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function AchievementsSection() {
  const { t, language } = useLanguage()

  const achievements = [
    { icon: Users, label: t("trainees"), value: 1428, suffix: "+" },
    { icon: TrendingUp, label: t("organizations"), value: 25, suffix: "+" },
    { icon: Award, label: t("years"), value: 20, suffix: "+" },
    { icon: Star, label: t("rating"), value: 98, suffix: "%" },
  ]

  const certifications = [
    { name: language === "en" ? "Civil Engineering" : "الهندسة المدنية", org: "2006" },
    { name: language === "en" ? "Microsoft Systems Engineering" : "هندسة أنظمة مايكروسوفت", org: "2008" },
    { name: "PhD IT", org: "2015" },
    { name: "PMI", org: "2019" },
    { name: language === "en" ? "Google ML Engineer" : "مهندس تعلم آلة جوجل", org: "2023" },
    { name: language === "en" ? "AI+ Executive" : "AI+ تنفيذي", org: "2025" },
    {
      name: language === "en" ? "AICT" : "مدرب معتمد",
      org: language === "en" ? "Certified Trainer 2025" : "مدرب معتمد 2025",
    },
  ]

  const countries = [
    { name: language === "en" ? "Oman" : "عُمان", flag: "🇴🇲" },
    { name: language === "en" ? "UAE" : "الإمارات", flag: "🇦🇪" },
    { name: language === "en" ? "Turkey" : "تركيا", flag: "🇹🇷" },
    { name: language === "en" ? "Saudi Arabia" : "السعودية", flag: "🇸🇦" },
    { name: language === "en" ? "Syria" : "سوريا", flag: "🇸🇾" },
  ]

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 text-glow ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
            style={{ color: "#00FFD1" }}
          >
            {t("achievementsTitle")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}
          >
            {language === "en"
              ? "Measurable impact across the Middle East and beyond"
              : "تأثير قابل للقياس في جميع أنحاء الشرق الأوسط وخارجه"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={index}
                className="glass-morphism p-8 text-center hover:scale-105 transition-transform duration-300 group"
              >
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 group-hover:animate-pulse-glow"
                  style={{ backgroundColor: "rgba(0, 255, 209, 0.2)" }}
                >
                  <Icon className="w-10 h-10" style={{ color: "#00FFD1" }} />
                </div>
                <div className="mb-2">
                  <Counter end={achievement.value} suffix={achievement.suffix} />
                </div>
                <p className={`text-muted-foreground text-lg ${language === "ar" ? "font-cairo" : ""}`}>
                  {achievement.label}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Special Recognition for Dubai Future Foundation */}
        <Card className="glass-morphism p-8 mb-20 text-center border-2 border-cyan-green/30">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award className="w-12 h-12" style={{ color: "#00FFD1" }} />
            <h3
              className={`text-3xl font-bold ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
              style={{ color: "#00FFD1" }}
            >
              {language === "en" ? "6th in Arab World" : "السادس في العالم العربي"}
            </h3>
          </div>
          <p className={`text-xl text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
            {language === "en"
              ? "Dubai Future Foundation's One Million Arab Programmers - Ranked 6th in both Back-End and Front-End specializations (2018)"
              : "مؤسسة دبي للمستقبل - مليون مبرمج عربي - المرتبة السادسة في تخصصي الواجهة الخلفية والأمامية (2018)"}
          </p>
        </Card>

        {/* Certifications Section */}
        <div className="mb-20">
          <h3
            className={`text-3xl font-bold text-center mb-12 ${language === "ar" ? "font-cairo" : ""}`}
            style={{ color: "#3AE5FF" }}
          >
            {language === "en" ? "Certifications & Credentials" : "الشهادات والاعتمادات"}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                className="glass-morphism px-6 py-3 text-lg border-cyan-green/30"
                style={{ backgroundColor: "rgba(0, 255, 209, 0.1)", color: "#00FFD1" }}
              >
                <Award className="w-4 h-4 mr-2" />
                <span className={language === "ar" ? "font-cairo" : ""}>{cert.name}</span>
                <span className="mx-2">•</span>
                <span className={`text-muted-foreground ${language === "ar" ? "font-cairo" : ""}`}>{cert.org}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Countries Section */}
        <div>
          <h3
            className={`text-3xl font-bold text-center mb-12 ${language === "ar" ? "font-cairo" : ""}`}
            style={{ color: "#6B32FF" }}
          >
            {language === "en" ? "Global Impact" : "التأثير العالمي"}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="glass-morphism p-6 text-center hover:scale-105 transition-transform group">
                <div className="text-5xl mb-3">{country.flag}</div>
                <p className={`text-lg font-semibold ${language === "ar" ? "font-cairo" : ""}`}>{country.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
