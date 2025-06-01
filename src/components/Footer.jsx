import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 py-8 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Branding / Copyright */}
        <div>
          <h3 className="text-xl font-bold text-blue-600">Mubashir Ali Hassan</h3>
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links (optional) */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="text-gray-700 hover:text-red-600">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
