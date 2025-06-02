"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react"
import emailjs from "emailjs-com"
import toast, { Toaster } from "react-hot-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, subject, message } = formData

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields")
      return
    }

    emailjs
      .send(
        "service_99s7owh",
        "template_01s2ycm",
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        "IN_SXb2VXO1JMfxUc"
      )
      .then(() => {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch(() => {
        toast.error("Failed to send message. Try again.")
      })
  }

  return (
    <section className="pt-20 pb-5 px-4 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
            Get in <span className="text-red-400">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-800 mb-4 flex items-center">
                <Mail className="w-5 h-5 text-red-400 mr-3" />
                Mail & Website
              </h3>
              <div className="space-y-2 ml-8">
                <div className="text-gray-600">maubashirali9323@gmail.com</div>
               <div> <a
                  href="https://github.com/Mubashir-IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  github.com/Mubashir-IT
                </a></div>
                
                <div>
                  <a
                  href="www.linkedin.com/in/mubashir-ali-hassan-7bb115369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  Linkdin.com/mubashir-ali-hassan-7bb115369
                </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-800 mb-4 flex items-center">
                <Phone className="w-5 h-5 text-red-400 mr-3" />
                Contact
              </h3>
              <div className="space-y-2 ml-8">
                <div className="text-gray-600">+92 3289323307</div>
                <div className="text-gray-600">+92 3096132212</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-medium text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-red-400 mr-3" />
                Address
              </h3>
              <div className="text-gray-600 ml-8">Multan, Punjab</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="rounded-xl border-gray-200"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border-gray-200"
                />
              </div>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="rounded-xl border-gray-200"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="rounded-xl border-gray-200 resize-none"
              />
              <Button
                type="submit"
                className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-xl w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center pt-8 px-20 border-t border-gray-200">
          <p className="text-gray-500 text-[12px] md:mb-0">
            Copyright © 2025. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <Facebook className="w-3 h-3 text-white" />
            </div>
            <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
              <Twitter className="w-3 h-3 text-white" />
            </div>
            <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
              <Instagram className="w-3 h-3 text-white" />
            </div>
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <Linkedin className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
