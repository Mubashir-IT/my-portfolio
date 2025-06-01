"use client"

import { useEffect, useState } from "react"
import HeroSection from "./Compoenets/Sections/HeroSection"
import AboutSection from "./Compoenets/Sections/AboutSection"
import ResumeSection from "./Compoenets/Sections/ResumeSection"
import ServicesSection from "./Compoenets/Sections/ServiceSection"
import SkillsSection from "./Compoenets/Sections/SkillsSection"
import ProjectsSection from "./Compoenets/Sections/ProjectSection"
// import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "./Compoenets/Sections/ContactSection"
import FloatingMenu from "./Compoenets/ui/FloatingMenu"
import ScrollToTop from "./Compoenets/ui/ScrollToTop"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "skills", "projects",   "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation activeSection={activeSection} /> */}
      <FloatingMenu />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        {/* <section id="resume">
          <ResumeSection />
        </section> */}

        <section id="services">
          <ServicesSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>


        {/* <section id="blog">
          <BlogSection />
        </section> */}

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <ScrollToTop />
    </div>
  )
}
