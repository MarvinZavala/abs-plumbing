import { Phone, Star, Shield, Clock, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 water-pattern opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-200">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                San Francisco Bay Area's
                <span className="block text-blue-300">Trusted Plumber</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                24/7 Emergency Service • Fair Pricing • Quality Work
                <br />
                <span className="text-lg">Family-owned business serving your community</span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <a 
                href="https://www.yelp.com/biz/abs-plumbing-services-oakland-13"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800/50 hover:bg-blue-700/50 rounded-lg p-4 transition-colors"
              >
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">5-Star Reviews</div>
              </a>
              
              <div className="bg-blue-800/50 rounded-lg p-4">
                <Clock className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Emergency Service</div>
              </div>
              
              <div className="bg-blue-800/50 rounded-lg p-4 col-span-2 md:col-span-1">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold">10%</div>
                <div className="text-sm text-blue-200">New Customer Discount</div>
              </div>
            </div>

            {/* Service Area */}
            <div className="space-y-4">
              <p className="text-blue-200 text-lg">
                Serving the entire San Francisco Bay Area
              </p>
            </div>
          </div>

          {/* Right Column - Service Highlights */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-100">Why Choose AB's Plumbing?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Fair, Transparent Pricing</div>
                    <div className="text-sm text-blue-200">No hidden fees, upfront estimates</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Always On Time</div>
                    <div className="text-sm text-blue-200">Respectful of your schedule</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Clean & Professional</div>
                    <div className="text-sm text-blue-200">Treat your home with respect</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Community Focused</div>
                    <div className="text-sm text-blue-200">Family-owned, locally operated</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}