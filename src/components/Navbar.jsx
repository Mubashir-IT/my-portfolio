import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Desktop nav links: no borders, simple style
  const desktopNavLinks = (
    <ul className="flex flex-row items-center gap-10 text-lg font-medium">
      {['Home', 'About', 'Projects', 'Contact'].map((text) => (
        <li key={text}>
          <Link
            to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );

  // Mobile nav links: glassmorphism + borders + padding + hover shadows
  const mobileNavLinks = (
    <ul className="flex flex-col items-center gap-4 text-lg font-medium">
      {['Home', 'About', 'Projects', 'Contact'].map((text) => (
        <li key={text} className="w-full">
          <Link
            to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            onClick={toggleMenu}
            className="
              block w-50 text-center
              px-4 py-2 rounded-lg
              border-2 border-white/30
              bg-white/10
              backdrop-blur-sm
              hover:bg-white/20
              hover:border-blue-500
              hover:text-blue-600
              transition-all duration-300
              shadow-sm
            "
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        <div className="hidden md:flex">{desktopNavLinks}</div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-blue-600">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with centered links and glassmorphism */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full px-6
          bg-white/85 backdrop-blur-xl border border-white/40 rounded-b-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out
          flex flex-col  items-center min-h-[calc(55vh-60px)]
          ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        style={{ backdropFilter: 'blur(24px)' }}
      >
        {mobileNavLinks}
      </div>
    </nav>
  );
};

export default Navbar;
