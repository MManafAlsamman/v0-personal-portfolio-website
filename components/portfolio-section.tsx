"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Globe, Server } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const { t, language } = useLanguage()

  const applications = [
    {
      title: "YesApp",
      description: language === "en" ? "Mobile communication platform" : "منصة اتصالات متنقلة",
      year: "2021",
    },
    {
      title: "HizApp",
      description: language === "en" ? "Service delivery application" : "تطبيق تقديم الخدمات",
      year: "2019",
    },
    { title: "Pazar", description: language === "en" ? "E-commerce marketplace" : "سوق إلكتروني", year: "2019" },
    {
      title: "Medrese",
      description: language === "en" ? "Educational management system" : "نظام إدارة تعليمي",
      year: "2022",
    },
    {
      title: "ComeTax",
      description: language === "en" ? "Tax calculation & filing app" : "تطبيق حساب وتقديم الضرائب",
      year: "2020",
    },
    { title: "Ab Reabear", description: language === "en" ? "Real estate management" : "إدارة العقارات", year: "2019" },
    {
      title: "Cantin",
      description: language === "en" ? "Cafeteria ordering system" : "نظام طلب الكافتيريا",
      year: "2021",
    },
    {
      title: "BetaNet",
      description: language === "en" ? "Network management tool" : "أداة إدارة الشبكات",
      year: "2019",
    },
    {
      title: "OpenSooq",
      description: language === "en" ? "Classified ads platform" : "منصة إعلانات مبوبة",
      year: "2012",
    },
    {
      title: "TomApp",
      description: language === "en" ? "Cryptocurrency trading platform" : "منصة تداول العملات المشفرة",
      year: "2021",
    },
    {
      title: "SCCO",
      description: language === "en" ? "Syrian Community in the Sultanate of Oman" : "الجالية السورية في سلطنة عمان",
      year: "2024",
    },
  ]

  const websites = [
    {
      title: language === "en" ? "Turkish Ministry of Tourism" : "وزارة السياحة التركية",
      description: language === "en" ? "Official government portal" : "البوابة الحكومية الرسمية",
      year: "2014",
    },
    {
      title: language === "en" ? "Harran University Portal" : "بوابة جامعة حران",
      description: language === "en" ? "Academic institution website" : "موقع المؤسسة الأكاديمية",
      year: "2015",
    },
    {
      title: language === "en" ? "100+ Corporate & Personal Sites" : "أكثر من 100 موقع شركات وشخصي",
      description: language === "en" ? "Diverse web development projects" : "مشاريع تطوير ويب متنوعة",
      year: "2010-2025",
    },
  ]

  const systems = [
    {
      title: "YUBS",
      description:
        language === "en"
          ? "Academic System - Turkish Ministry of Education"
          : "النظام الأكاديمي - وزارة التعليم التركية",
      year: "2013",
    },
    {
      title: "Orange",
      description: language === "en" ? "Financial Transfers System" : "نظام التحويلات المالية",
      year: "2016",
    },
    {
      title: "CAM",
      description: language === "en" ? "Border Monitoring System - Syria" : "نظام مراقبة الحدود - سوريا",
      year: "2015",
    },
  ]

  return (
    <section id="portfolio" className="relative py-32 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 text-glow ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
            style={{ color: "#00FFD1" }}
          >
            {t("portfolioTitle")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}
          >
            {language === "en"
              ? "Software projects spanning applications, websites, and enterprise systems"
              : "مشاريع برمجية تشمل التطبيقات والمواقع والأنظمة المؤسسية"}
          </p>
        </div>

        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 glass-morphism mb-12">
            <TabsTrigger value="applications" className={language === "ar" ? "font-cairo" : ""}>
              <Smartphone className="w-4 h-4 mr-2" />
              {t("applications")}
            </TabsTrigger>
            <TabsTrigger value="websites" className={language === "ar" ? "font-cairo" : ""}>
              <Globe className="w-4 h-4 mr-2" />
              {t("websites")}
            </TabsTrigger>
            <TabsTrigger value="systems" className={language === "ar" ? "font-cairo" : ""}>
              <Server className="w-4 h-4 mr-2" />
              {t("systems")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((project, index) => (
                <Card
                  key={index}
                  className="glass-morphism p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg group-hover:animate-pulse-glow"
                      style={{ backgroundColor: "rgba(0, 255, 209, 0.2)" }}
                    >
                      <Smartphone className="w-6 h-6" style={{ color: "#00FFD1" }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">{project.year}</div>
                      <h3
                        className={`text-xl font-bold text-foreground group-hover:text-cyan-green transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
                    {project.description}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="websites">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websites.map((project, index) => (
                <Card
                  key={index}
                  className="glass-morphism p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg group-hover:animate-pulse-glow"
                      style={{ backgroundColor: "rgba(58, 229, 255, 0.2)" }}
                    >
                      <Globe className="w-6 h-6" style={{ color: "#3AE5FF" }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">{project.year}</div>
                      <h3
                        className={`text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
                    {project.description}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="systems">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systems.map((project, index) => (
                <Card
                  key={index}
                  className="glass-morphism p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3 rounded-lg group-hover:animate-pulse-glow"
                      style={{ backgroundColor: "rgba(107, 50, 255, 0.2)" }}
                    >
                      <Server className="w-6 h-6" style={{ color: "#6B32FF" }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">{project.year}</div>
                      <h3
                        className={`text-xl font-bold text-foreground group-hover:text-neon-violet transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-muted-foreground leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}>
                    {project.description}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-morphism border-primary/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className={`text-2xl ${language === "ar" ? "font-cairo" : ""}`} style={{ color: "#00FFD1" }}>
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription
              className={`text-muted-foreground text-base pt-4 ${language === "ar" ? "font-cairo" : ""}`}
            >
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
