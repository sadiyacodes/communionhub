import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center pt-4 z-50">
      <header className="bg-mygray shadow-lg rounded-xl max-w-6xl w-11/12 mx-auto overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 pb-6">
            {/* Logo (on left) */}
            <div className="flex items-center">
              <img
                src="/communionLogo.png"
                alt="Logo"
                className="h-8"
              />
            </div>

            {/* Desktop Navigation (on right) */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-black font-qs font-semibold hover:text-primary transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0   left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#" className="text-black font-qs font-semibold hover:text-primary transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link to="/events"className="text-black font-qs font-semibold hover:text-primary transition-colors duration-300 relative group">
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Mobile hamburger menu (on right) */}
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-primary hover:border-primary transition duration-300"
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-mygray">
            <div className="px-4 sm:px-6 lg:px-8 flex flex-col space-y-4 pb-6">
              <Link to="/" className="text-black hover:text-primary transition-colors duration-300 py-2 border-b border-transparent hover:border-primary">Home</Link>
              <a href="#" className="text-black hover:text-primary transition-colors duration-300 py-2 border-b border-transparent hover:border-primary">About</a>
              <Link to="/events" className="text-black hover:text-primary transition-colors duration-300 py-2 border-b border-transparent hover:border-primary">Events</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;