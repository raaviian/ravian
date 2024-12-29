import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">Hi, Welcome</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition duration-300">
            About
          </a>
          <a href="#experience" className="text-gray-300 hover:text-white transition duration-300">
            Experience
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition duration-300">
            My Works
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 p-2 rounded hover:bg-gray-700 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white transition duration-300" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-gray-300 hover:text-white transition duration-300" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition duration-300" onClick={toggleMenu}>
                My Works
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
