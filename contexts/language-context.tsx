"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero
    heroHeadline: "Empowering the Future with Intelligence.",
    heroSubheadline: "Dr. Mouhammad Samman — AI Transformation & Innovation Leader.",
    exploreWork: "Explore My Work",
    collaborate: "Let's Collaborate",

    // About
    aboutTitle: "About Dr. Samman",
    aboutBio:
      "Dr. Mouhammad Samman is an international AI and digital transformation expert with over 20 years of experience across Oman, UAE, Turkey, Saudi Arabia, and Syria. He has trained 1,428 professionals worldwide and delivered cutting-edge digital programs to ministries and enterprises.",
    education: "Education",
    executiveRoles: "Executive Roles",
    academicExperience: "Academic Experience",
    globalTraining: "Global Training Milestones",

    // Portfolio
    portfolioTitle: "Portfolio",
    applications: "Applications",
    websites: "Websites",
    systems: "Systems",

    // Achievements
    achievementsTitle: "Achievements",
    trainees: "Trainees",
    organizations: "Organizations",
    years: "Years",
    rating: "Rating",

    // Training
    trainingTitle: "Training in Oman",

    // Vision
    visionQuote: "Time never changed… minds did. Let's reprogram the future.",

    // Contact
    contactTitle: "Let's Connect",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    phone: "Phone",

    // Footer
    footerText: "Designed by AI",
  },
  ar: {
    // Hero
    heroHeadline: "نصنع المستقبل بالذكاء.",
    heroSubheadline: "الدكتور محمد السمان — خبير التحول الرقمي والذكاء الاصطناعي.",
    exploreWork: "استكشف أعمالي",
    collaborate: "تواصل معي",

    // About
    aboutTitle: "عن الدكتور السمان",
    aboutBio:
      "الدكتور محمد السمان هو خبير دولي في الذكاء الاصطناعي والتحول الرقمي مع أكثر من 20 عامًا من الخبرة في عُمان والإمارات وتركيا والسعودية وسوريا. قام بتدريب 1,428 محترفًا حول العالم وقدم برامج رقمية متطورة للوزارات والمؤسسات.",
    education: "التعليم",
    executiveRoles: "المناصب التنفيذية",
    academicExperience: "الخبرة الأكاديمية",
    globalTraining: "إنجازات التدريب العالمية",

    // Portfolio
    portfolioTitle: "الأعمال",
    applications: "التطبيقات",
    websites: "المواقع",
    systems: "الأنظمة",

    // Achievements
    achievementsTitle: "الإنجازات",
    trainees: "متدرب",
    organizations: "مؤسسة",
    years: "سنة",
    rating: "التقييم",

    // Training
    trainingTitle: "التدريب في عُمان",

    // Vision
    visionQuote: "الزمن لم يتغير... العقول هي التي تغيرت. فلنُعيد برمجة المستقبل.",

    // Contact
    contactTitle: "تواصل معنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send: "إرسال الرسالة",
    phone: "الهاتف",

    // Footer
    footerText: "بتصميم ذكاء اصطناعي",
  },
}
