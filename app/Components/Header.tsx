  "use client"

  import React, { useState } from 'react';
  import Link from 'next/link';
  import Image from 'next/image';
  import { ThemeSwitch } from './ThemeSwitch'

  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <header className="fixed w-full bg-background backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="SmartEdu Logo"
                width={120}
                height={32}
                className="w-auto h-8"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-xl">
              <Link href="/" className="text-sm font-bold text-card-foreground hover:text-green-700 transition-all hover:scale-150">
                Home
              </Link>
              <Link href="/courses" className="text-sm font-bold text-card-foreground hover:text-green-700 transition-all hover:scale-150">
                Courses
              </Link>
              <Link href="/teachers" className="text-sm font-bold text-card-foreground hover:text-green-700 transition-all hover:scale-150">
                Teachers
              </Link>
              <Link href="/about" className="text-sm font-bold text-card-foreground hover:text-green-700 transition-all hover:scale-150">
                About
              </Link>
              <Link href="/contact" className="text-sm font-bold text-card-foreground hover:text-green-700 transition-all hover:scale-150">
                Contact
              </Link>
            </nav>
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login" className="text-sm font-bold text-card-foreground hover:text-green-700 transition-all hover:scale-150">
                Login
              </Link>
              <ThemeSwitch />
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-700 hover:text-green-700 transition-colors px-2 py-1.5 hover:bg-gray-50 rounded-lg">
                  Home
                </Link>
                <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1.5 hover:bg-gray-50 rounded-lg">
                  Courses
                </Link>
                <Link href="/teachers" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1.5 hover:bg-gray-50 rounded-lg">
                  Teachers
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1.5 hover:bg-gray-50 rounded-lg">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1.5 hover:bg-gray-50 rounded-lg">
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1.5 hover:bg-gray-50 rounded-lg">
                  Login
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-2 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-center">
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  export default Header;