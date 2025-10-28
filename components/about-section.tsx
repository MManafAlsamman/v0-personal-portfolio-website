"use client"

import { Card } from "@/components/ui/card"
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t, language } = useLanguage()

  const milestones = [
    {
      year: "2003",
      title: language === "en" ? "PhD in Information Technology" : "دكتوراه في تكنولوجيا المعلومات",
      icon: GraduationCap,
    },
    {
      year: "2010",
      title: language === "en" ? "PMP & AICT Certified Trainer" : "مدرب معتمد PMP و AICT",
      icon: Award,
    },
    {
      year: "2015",
      title: language === "en" ? "Executive Roles Across MENA" : "مناصب تنفيذية في منطقة الشرق الأوسط",
      icon: Briefcase,
    },
    {
      year: "2025",
      title: language === "en" ? "1,428 Trainees Worldwide" : "1,428 متدرب حول العالم",
      icon: BookOpen,
    },
  ]

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 text-glow ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
            style={{ color: "#00FFD1" }}
          >
            {t("aboutTitle")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}
          >
            {t("aboutBio")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-green to-neon-blue rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <Card className="relative glass-morphism p-2 overflow-hidden">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-green/20 to-neon-blue/20">
                <Image src="/dr-samman-profile.png" alt="Dr. Mouhammad Samman" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-morphism p-8">
              <h3
                className={`text-2xl font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}
                style={{ color: "#00FFD1" }}
              >
                {language === "en" ? "PhD in Information Technology" : "دكتوراه في تكنولوجيا المعلومات"}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
                {language === "en"
                  ? "20+ years of experience across Oman, UAE, Turkey, Saudi Arabia, and Syria"
                  : "أكثر من 20 عامًا من الخبرة في عُمان والإمارات وتركيا والسعودية وسوريا"}
              </p>
            </Card>

            <Card className="glass-morphism p-8">
              <h3
                className={`text-2xl font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}
                style={{ color: "#3AE5FF" }}
              >
                {language === "en" ? "AICT Certified Trainer | PMP" : "مدرب معتمد AICT | PMP"}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
                {language === "en"
                  ? "Certified in AI, project management, and digital transformation methodologies"
                  : "معتمد في الذكاء الاصطناعي وإدارة المشاريع ومنهجيات التحول الرقمي"}
              </p>
            </Card>

            <Card className="glass-morphism p-8">
              <h3
                className={`text-2xl font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}
                style={{ color: "#6B32FF" }}
              >
                {language === "en" ? "1,428 Professionals Trained" : "1,428 محترف تم تدريبهم"}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
                {language === "en"
                  ? "Delivered cutting-edge programs to ministries and enterprises worldwide"
                  : "قدم برامج متطورة للوزارات والمؤسسات حول العالم"}
              </p>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3
            className={`text-3xl font-bold text-center mb-12 ${language === "ar" ? "font-cairo" : ""}`}
            style={{ color: "#00FFD1" }}
          >
            {language === "en" ? "Journey Milestones" : "معالم الرحلة"}
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <Card
                  key={index}
                  className="glass-morphism p-6 text-center hover:scale-105 transition-transform duration-300 group"
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:animate-pulse-glow"
                    style={{ backgroundColor: "rgba(0, 255, 209, 0.2)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "#00FFD1" }} />
                  </div>
                  <div
                    className={`text-3xl font-bold mb-2 ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
                    style={{ color: "#00FFD1" }}
                  >
                    {milestone.year}
                  </div>
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}
                  >
                    {milestone.title}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
