'use client';

import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MapPin, CheckCircle, ArrowRight, Home, Users, Star } from 'lucide-react';

export default function ServiceAreasPage() {
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
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
          </div>
          
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                Service Coverage
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                Serving the Entire
                <span className="block text-blue-300">San Francisco Bay Area</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                Professional plumbing services throughout the San Francisco Bay Area. 
                From San Francisco to San Jose, we're your local plumbing experts.
              </p>
              
              <div className="flex items-center justify-center space-x-4 sm:space-x-8 text-blue-200 text-sm sm:text-base">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">Bay Area</div>
                  <div className="text-xs sm:text-sm opacity-80">Complete Coverage</div>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">16+</div>
                  <div className="text-xs sm:text-sm opacity-80">Main Cities</div>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">Local</div>
                  <div className="text-xs sm:text-sm opacity-80">Experts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-default px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Complete Bay Area Coverage
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly serve customers throughout the San Francisco Bay Area with professional plumbing services
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Bay Area Cities We Serve
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {mainCities.map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose Local Bay Area Service?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-12 sm:mb-16">
                The advantages of working with your neighborhood plumbing experts
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
                    className="text-center group animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                      <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">{benefit.title}</h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base px-2">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-600/50">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Serve Your Area</h3>
                <p className="text-blue-100 mb-6 text-sm sm:text-base">
                  No matter where you are in the Bay Area, AB's Plumbing is ready to provide professional, 
                  reliable plumbing service with the personal touch you deserve.
                </p>
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base flex items-center gap-2 mx-auto">
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
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}