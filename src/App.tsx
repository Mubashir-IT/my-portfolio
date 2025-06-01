"use client"

import HeroSection from "./Compoenets/Sections/HeroSection"
import AboutSection from "./Compoenets/Sections/AboutSection"
import ServicesSection from "./Compoenets/Sections/ServiceSection"
import SkillsSection from "./Compoenets/Sections/SkillsSection"
import ProjectsSection from "./Compoenets/Sections/ProjectSection"
import ContactSection from "./Compoenets/Sections/ContactSection"
import FloatingMenu from "./Compoenets/ui/FloatingMenu"
import ScrollToTop from "./Compoenets/ui/ScrollToTop"

export default function App() {

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
