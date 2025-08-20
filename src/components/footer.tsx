import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-100">AB's Plumbing Services</h3>
            <p className="text-blue-200">
              Professional plumbing services across the entire San Francisco Bay Area. 
              Family-owned and operated with over 500 five-star reviews.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-300" />
              <span className="text-sm text-blue-200">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-300" />
              <span className="text-sm text-blue-200">Family Owned & Operated</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-100">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+14155551234"
                className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(415) 555-1234</span>
              </a>
              <a
                href="mailto:info@absplumbing.com"
                className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@absplumbing.com</span>
              </a>
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin className="w-5 h-5" />
                <span>San Francisco Bay Area</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-100">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/services"
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/emergency"
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Emergency Service
              </Link>
              <Link
                href="/service-areas"
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Service Areas
              </Link>
              <Link
                href="/gallery"
                className="block text-blue-200 hover:text-white transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="block text-blue-200 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Reviews & Trust */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-100">Why Choose Us?</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-blue-200 text-sm">500+ 5-Star Reviews</span>
              </div>
              <p className="text-sm text-blue-200">✓ Fair, transparent pricing</p>
              <p className="text-sm text-blue-200">✓ Always on time</p>
              <p className="text-sm text-blue-200">✓ Clean, respectful service</p>
              <p className="text-sm text-blue-200">✓ 10% off for new customers</p>
              <div className="bg-blue-800 p-3 rounded-lg mt-4">
                <p className="text-sm font-semibold text-blue-100">New Customer Special</p>
                <p className="text-xs text-blue-200">10% off any service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-300">
              © 2024 AB's Plumbing Services. All rights reserved.
            </div>
            <div className="text-sm text-blue-300">
              License #: ABC123456 | Insured & Bonded
            </div>
            <div className="flex items-center space-x-1 text-sm text-blue-300">
              <span>Find us on</span>
              <a
                href="https://www.yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white font-semibold"
              >
                Yelp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}