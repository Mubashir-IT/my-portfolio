import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'

import { Toaster } from "react-hot-toast";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
        {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

            <Toaster position="top-center" reverseOrder={false} />

    </>
  )
}

export default App

{/* <About />
<Projects />
<Contact /> */}