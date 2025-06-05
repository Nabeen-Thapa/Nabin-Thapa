import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import './globals.css'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}