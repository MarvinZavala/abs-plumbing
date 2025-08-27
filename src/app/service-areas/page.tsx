'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, CheckCircle, ArrowRight, Home, Users, Star } from 'lucide-react';

export default function ServiceAreasPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero section animations
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: heroBadgeRef, isVisible: heroBadgeVisible } = useScrollAnimation({ threshold: 0.8 });
  const { ref: heroTitleRef, isVisible: heroTitleVisible } = useScrollAnimation({ threshold: 0.6 });
  const { ref: heroDescRef, isVisible: heroDescVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: heroStatsRef, isVisible: heroStatsVisible } = useScrollAnimation({ threshold: 0.3 });
  
  // Service areas section
  const { ref: serviceAreasRef, isVisible: serviceAreasVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: serviceAreasHeaderRef, isVisible: serviceAreasHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: citiesGridRef, visibleItems: citiesVisible } = useStaggeredScrollAnimation(16, { threshold: 0.2 });
  
  // Why choose section
  const { ref: whyChooseRef, isVisible: whyChooseVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: whyChooseHeaderRef, isVisible: whyChooseHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: whyChooseCardsRef, visibleItems: whyChooseCardsVisible } = useStaggeredScrollAnimation(3, { threshold: 0.2 });
  const mainCities = [
    "San Francisco", "Oakland", "San Jose", "Berkeley", "Fremont", "Hayward",
    "Sunnyvale", "Santa Clara", "Mountain View", "Palo Alto", "Redwood City",
    "San Mateo", "Daly City", "Richmond", "Vallejo", "Alameda"
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10">
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] transition-all duration-1000 ${heroVisible ? 'animate-subtle-float' : ''}`}></div>
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)] transition-all duration-1000 ${heroVisible ? 'animate-subtle-float' : ''}`}></div>
          </div>
          
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div 
                ref={heroBadgeRef}
                className={`inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm transition-all duration-800 ${
                  heroBadgeVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                <MapPin className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-1000 ${heroBadgeVisible ? 'animate-pulse-soft' : ''}`} />
                Service Coverage
              </div>
              
              <h1 
                ref={heroTitleRef}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight transition-all duration-800 ${
                  heroTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Serving the Entire
                <span className={`block text-blue-300 transition-all duration-800 delay-300 ${
                  heroTitleVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-12'
                }`}>San Francisco Bay Area</span>
              </h1>
              
              <p 
                ref={heroDescRef}
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0 transition-all duration-800 delay-500 ${
                  heroDescVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Professional plumbing services throughout the San Francisco Bay Area. 
                From San Francisco to San Jose, we're your local plumbing experts.
              </p>
              
              <div 
                ref={heroStatsRef}
                className={`flex items-center justify-center space-x-4 sm:space-x-6 text-blue-200 text-sm sm:text-base transition-all duration-800 delay-700 ${
                  heroStatsVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>Bay Area Coverage</span>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Home className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>16+ Cities</span>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Users className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>Local Experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-12 sm:py-16 lg:py-20" id="service-areas" data-animate>
          <div className="container-default px-4 sm:px-6">
            <div ref={serviceAreasHeaderRef} className="text-center mb-12 sm:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-700 ${serviceAreasHeaderVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
                Complete Bay Area Coverage
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ${serviceAreasHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                We proudly serve customers throughout the San Francisco Bay Area with professional plumbing services
              </p>
            </div>
            
            <div ref={serviceAreasRef} className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 max-w-4xl mx-auto transition-all duration-800 ${serviceAreasVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Bay Area Cities We Serve
                </h3>
              </div>
              
              <div ref={citiesGridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {mainCities.map((city, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-2 text-gray-700 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-all duration-500 hover:scale-105 hover:shadow-md ${
                      citiesVisible[idx] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">{city}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 text-lg">
                  ...and many more cities throughout the San Francisco Bay Area
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12 sm:mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sm:p-8 rounded-2xl inline-block shadow-xl max-w-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Don't See Your City?</h3>
                <p className="text-blue-100 mb-6 text-sm sm:text-base">
                  We serve many more areas throughout the Bay Area! Contact us to check service availability in your location.
                </p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto text-sm sm:text-base">
                  Check Availability
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Local */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden" id="why-choose" data-animate>
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)] transition-all duration-1000 ${whyChooseHeaderVisible ? 'animate-subtle-float' : ''}`}></div>
          <div className="container-default relative px-4 sm:px-6">
            <div ref={whyChooseHeaderRef} className="max-w-4xl mx-auto text-center">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-800 ${
                whyChooseHeaderVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Why Choose Local Bay Area Service?
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-blue-100 mb-12 sm:mb-16 transition-all duration-800 delay-300 ${
                whyChooseHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                The advantages of working with your neighborhood plumbing experts
              </p>
              
              <div ref={whyChooseCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {[
                  {
                    icon: Home,
                    title: "Local Knowledge",
                    description: "We understand Bay Area homes, from Victorian San Francisco to modern Silicon Valley construction"
                  },
                  {
                    icon: Users,
                    title: "Community Focused",
                    description: "We're invested in our community. Our reputation depends on the neighbors we serve every day"
                  },
                  {
                    icon: Star,
                    title: "Personal Service",
                    description: "As a local family business, we provide the personal attention large chains simply cannot match"
                  }
                ].map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className={`text-center group transition-all duration-800 ${
                      whyChooseCardsVisible[index] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 ${
                      whyChooseCardsVisible[index] ? 'animate-pulse-soft' : ''
                    }`}>
                      <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">{benefit.title}</h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base px-2">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              <div ref={whyChooseRef} className={`bg-blue-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-600/50 transition-all duration-800 ${
                whyChooseVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
              }`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Serve Your Area</h3>
                <p className="text-blue-100 mb-6 text-sm sm:text-base">
                  No matter where you are in the Bay Area, AB's Plumbing is ready to provide professional, 
                  reliable plumbing service with the personal touch you deserve.
                </p>
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base flex items-center gap-2 mx-auto animate-pulse-soft">
                  Get Your Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style jsx>{`
        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Slide In Left Animation */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Slide In Right Animation */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Bounce In Animation */
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Scale In Animation */
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        /* Slide Up Animation */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        /* Text Reveal Animation */
        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .animate-text-reveal {
          animation: textReveal 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        /* City Card Animation */
        @keyframes cityCard {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-city-card {
          animation: cityCard 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        /* Benefit Card Animation */
        @keyframes benefitCard {
          from {
            opacity: 0;
            transform: translateY(32px) rotateY(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateY(0deg);
          }
        }

        .animate-benefit-card {
          animation: benefitCard 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        /* Pulse Soft Animation */
        @keyframes pulseSoft {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }

        /* Twinkle Animation */
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }

        /* Subtle Float Animation */
        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-subtle-float {
          animation: subtleFloat 6s ease-in-out infinite;
        }

        /* Counter Animation */
        @keyframes counter {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-counter {
          animation: counter 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Scroll-based animation utilities */
        .opacity-0 {
          opacity: 0;
        }

        .opacity-100 {
          opacity: 1;
        }

        .translate-y-8 {
          transform: translateY(2rem);
        }

        .translate-y-12 {
          transform: translateY(3rem);
        }

        .translate-x-12 {
          transform: translateX(3rem);
        }

        .scale-50 {
          transform: scale(0.5);
        }

        .scale-75 {
          transform: scale(0.75);
        }

        /* Smooth transitions for scroll animations */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-800 {
          transition-duration: 800ms;
        }

        .duration-1000 {
          transition-duration: 1000ms;
        }

        .duration-500 {
          transition-duration: 500ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }

        .delay-500 {
          transition-delay: 500ms;
        }

        .delay-500 {
          transition-delay: 500ms;
        }

        .delay-700 {
          transition-delay: 700ms;
        }

        /* Line clamp utility */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Reduced Motion Preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-fade-in,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-bounce-in,
          .animate-scale-in,
          .animate-slide-up,
          .animate-text-reveal,
          .animate-city-card,
          .animate-benefit-card,
          .animate-pulse-soft,
          .animate-twinkle,
          .animate-subtle-float,
          .animate-counter {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        /* Performance Optimizations */
        .animate-fade-in-up,
        .animate-fade-in,
        .animate-slide-in-left,
        .animate-slide-in-right,
        .animate-bounce-in,
        .animate-scale-in,
        .animate-slide-up,
        .animate-text-reveal,
        .animate-city-card,
        .animate-benefit-card,
        .animate-counter {
          will-change: transform, opacity;
        }

        .animate-pulse-soft,
        .animate-twinkle,
        .animate-subtle-float {
          will-change: transform;
        }

        /* GPU acceleration for smoother animations */
        .animate-fade-in-up,
        .animate-fade-in,
        .animate-slide-in-left,
        .animate-slide-in-right,
        .animate-bounce-in,
        .animate-scale-in,
        .animate-slide-up,
        .animate-text-reveal,
        .animate-city-card,
        .animate-benefit-card {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </>
  );
}