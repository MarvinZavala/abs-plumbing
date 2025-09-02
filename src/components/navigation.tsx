'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/service-areas', label: 'Service Areas' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="AB's Plumbing Services home">
            <Image
              src="/logo/abslogo.png"
              alt="AB's Plumbing Services logo"
              width={120}
              height={48}
              priority
              className="h-12 w-auto md:h-14 lg:h-16"
            />
            <div className="block">
              <span className="text-lg sm:text-xl font-bold text-blue-900">AB'S PLUMBING</span>
              <div className="text-xs text-blue-600">Licensed & Insured</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="tel:+15107538649" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>


          {/* Mobile call button and menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+15107538649"
              className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-lg"
              aria-label="Call now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={toggleMenu}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
