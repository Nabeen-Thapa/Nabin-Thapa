import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import './globals.css'
import QualificationsSection from '@/components/QualificationsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <QualificationsSection/>
      <ContactSection />
    </>
  )
}