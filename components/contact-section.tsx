"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Linkedin, Instagram, Phone } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { language } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 text-glow text-primary ${language === "ar" ? "font-cairo" : "font-orbitron"}`}
          >
            {language === "en" ? "Let's Connect" : "لنتواصل"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${language === "ar" ? "font-cairo" : ""}`}
          >
            {language === "en"
              ? "Ready to transform your organization with AI? Let's start the conversation."
              : "هل أنت مستعد لتحويل مؤسستك بالذكاء الاصطناعي؟ لنبدأ المحادثة."}
          </p>
        </div>

        <Card className="glass-morphism p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className={`text-sm font-medium text-foreground ${language === "ar" ? "font-cairo" : ""}`}
              >
                {language === "en" ? "Name" : "الاسم"}
              </label>
              <Input
                id="name"
                placeholder={language === "en" ? "Your name" : "اسمك"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-morphism border-primary/20 focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className={`text-sm font-medium text-foreground ${language === "ar" ? "font-cairo" : ""}`}
              >
                {language === "en" ? "Email" : "البريد الإلكتروني"}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={language === "en" ? "your.email@example.com" : "بريدك@example.com"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-morphism border-primary/20 focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className={`text-sm font-medium text-foreground ${language === "ar" ? "font-cairo" : ""}`}
              >
                {language === "en" ? "Message" : "الرسالة"}
              </label>
              <Textarea
                id="message"
                placeholder={
                  language === "en" ? "Tell me about your project or inquiry..." : "أخبرني عن مشروعك أو استفسارك..."
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-morphism border-primary/20 focus:border-primary min-h-[150px]"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className={`w-full neon-border bg-primary/10 hover:bg-primary/20 text-primary text-lg group ${language === "ar" ? "font-cairo" : ""}`}
            >
              {language === "en" ? "Send Message" : "إرسال الرسالة"}
              <Send
                className={`${language === "ar" ? "mr-2" : "ml-2"} w-5 h-5 group-hover:translate-x-1 transition-transform`}
              />
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <p className={`text-center text-muted-foreground mb-6 ${language === "ar" ? "font-cairo" : ""}`}>
              {language === "en"
                ? "Scan to chat with my AI Resume Assistant"
                : "امسح للدردشة مع مساعد السيرة الذاتية بالذكاء الاصطناعي"}
            </p>
            <div className="flex justify-center mb-8">
              <a
                href="https://chatgpt.com/g/g-685fce84e9fc8191ad0a2a753f5eae0b-lsyr-ldhty-lldktwr-mhmd-lsmn"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 glass-morphism rounded-lg neon-border hover:scale-105 transition-transform cursor-pointer"
              >
                <Image
                  src="/qr-code-resume.png"
                  alt="QR Code for AI Resume Assistant"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className={`text-center text-muted-foreground mb-6 ${language === "ar" ? "font-cairo" : ""}`}>
              {language === "en" ? "Connect with me" : "تواصل معي"}
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="glass-morphism hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
                asChild
              >
                <a href="tel:+96871504100" aria-label="Phone">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-morphism hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
                asChild
              >
                <a href="mailto:dr.samman@example.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-morphism hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/mouhammad-al-samman-eng-programmer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="glass-morphism hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
                asChild
              >
                <a
                  href="https://www.instagram.com/dr.eng_samman?igsh=MTh5amtleG9xcDFmNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
