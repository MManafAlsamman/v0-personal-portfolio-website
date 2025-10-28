import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AchievementsSection } from "@/components/achievements-section"
import { VisionSection } from "@/components/vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { NeuralBackground } from "@/components/neural-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NeuralBackground />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <AchievementsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
