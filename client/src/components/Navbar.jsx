import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-glass backdrop-blur-glass border-b border-glassBorder font-inter">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-aiPrimary to-aiSecondary bg-clip-text text-transparent">
          AI Summarizer
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
              location.pathname === '/'
                ? 'bg-aiPrimary/20 text-aiPrimary shadow-glow'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
              location.pathname === '/dashboard'
                ? 'bg-aiPrimary/20 text-aiPrimary shadow-glow'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;