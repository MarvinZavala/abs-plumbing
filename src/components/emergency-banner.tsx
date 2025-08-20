'use client';

import { Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="tel:+14155551234"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 animate-pulse"
      >
        <Phone className="w-5 h-5" />
        <div className="hidden sm:block">
          <div className="text-sm font-bold">24/7 Emergency</div>
          <div className="text-xs">(415) 555-1234</div>
        </div>
        <div className="sm:hidden">
          <div className="text-sm font-bold">Emergency</div>
        </div>
      </a>
    </div>
  );
}