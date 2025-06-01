import { Monitor, Code, Smartphone, Database, Palette, Link, Server, Layers } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Crafting responsive, fast, and accessible user interfaces using React and Tailwind CSS.",
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Building secure REST APIs, authentication, and server-side logic with Node.js and Express.",
    },
    {
      icon: Layers,
      title: "MERN Stack Development",
      description: "Complete projects using MongoDB, Express, React, and Node.js.",
    },
    {
      icon: Database,
      title: "Database Design & Integration",
      description: "Designing scalable NoSQL databases using MongoDB with efficient query structures.",
    },
    {
      icon: Link,
      title: "API Integration & Services",
      description: "Connecting applications with external APIs, services, and third-party tools like Stripe or Firebase.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            My <span className="text-red-400">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As a Full Stack Developer, I create complete, scalable, and high-performing digital solutions for web and mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg hover:bg-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-400 transition-colors">
                <service.icon className="w-8 h-8 text-red-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
