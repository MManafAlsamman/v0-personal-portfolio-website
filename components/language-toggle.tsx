"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="glass-morphism border-neon-blue/30 hover:border-neon-blue/60 transition-all bg-transparent"
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="font-orbitron">{language === "en" ? "🇸🇦 AR" : "🇬🇧 EN"}</span>
    </Button>
  )
}
