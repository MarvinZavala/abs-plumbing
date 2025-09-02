'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconChevronLeft, IconChevronRight, IconStar, IconStarFilled } from '@tabler/icons-react';

// Sample reviews from ABS Plumbing Services
const reviews = [
  {
    id: 1,
    name: "Maria R.",
    location: "Oakland, CA",
    rating: 5,
    text: "Abraham and his team did an excellent job replacing our water heater. Very professional, fair pricing, and they cleaned up everything afterward. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "John S.",
    location: "San Francisco, CA",
    rating: 5,
    text: "Emergency drain cleaning at 11pm - they came out quickly and fixed the problem. No hidden fees, exactly what they quoted. Great local business!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Lisa C.",
    location: "Berkeley, CA",
    rating: 5,
    text: "Complete bathroom renovation plumbing. Abraham was honest about costs upfront and the quality of work exceeded our expectations. Will definitely use again!",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Robert M.",
    location: "Alameda, CA",
    rating: 5,
    text: "Fast response time and excellent service. Had a leaking pipe under the sink that they fixed same day. Courteous and cleaned up after themselves. Pricing was reasonable.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Sophia L.",
    location: "Richmond, CA",
    rating: 5,
    text: "Abraham installed a new tankless water heater for us and the service was impeccable. He explained everything clearly and worked efficiently. Highly recommend for any plumbing needs.",
    date: "2 months ago",
  }
];

const YelpReviewsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Open popup after a delay when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || !isOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [autoplay, isOpen]);

  // Pause autoplay when hovering
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white rounded-xl shadow-2xl border border-blue-200 z-50 overflow-hidden"
        style={{ maxWidth: '500px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header with title and close button */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-yellow-400 rounded">
              <IconStarFilled className="w-5 h-5 text-blue-900" />
            </div>
            <h3 className="font-bold text-lg">Top-Rated on Yelp!</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-blue-700 rounded-full p-1 transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel content */}
        <div className="p-4 relative">
          <div className="overflow-hidden">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[180px]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {reviews[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500">{reviews[currentIndex].location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">Verified</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <IconStarFilled key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5/5</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-3">
                "{reviews[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{reviews[currentIndex].date}</span>
                <div className="flex items-center space-x-1">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">yelp</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-4 mb-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -mt-12 bg-white/80 rounded-full p-1 shadow-md hover:bg-gray-100"
              aria-label="Previous review"
            >
              <IconChevronLeft className="w-5 h-5 text-blue-700" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -mt-12 bg-white/80 rounded-full p-1 shadow-md hover:bg-gray-100"
              aria-label="Next review"
            >
              <IconChevronRight className="w-5 h-5 text-blue-700" />
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 flex justify-center border-t border-gray-100">
          <a
            href="https://www.yelp.com/biz/abs-plumbing-services-oakland-13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors"
          >
            Read all our reviews on Yelp
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default YelpReviewsPopup;
