import { Phone, Star, Shield, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';

export default function HeroSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.8 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.6 });
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, visibleItems: cardsVisible } = useStaggeredScrollAnimation(3, { threshold: 0.2 });
  const { ref: rightColumnRef, isVisible: rightColumnVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className={`absolute inset-0 water-pattern opacity-30 transition-all duration-1000 ${heroVisible ? 'animate-subtle-float' : ''}`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div 
                ref={badgeRef}
                className={`flex items-center space-x-2 text-blue-200 transition-all duration-800 ${
                  badgeVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-12'
                }`}
              >
                <Shield className={`w-5 h-5 transition-all duration-1000 ${badgeVisible ? 'animate-pulse-soft' : ''}`} />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              
              <h1 
                ref={titleRef}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-800 ${
                  titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Professional Plumbing
                <span 
                  ref={subtitleRef}
                  className={`block text-blue-300 transition-all duration-800 delay-300 ${
                    subtitleVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-12'
                  }`}
                >
                  Solutions You Can Trust
                </span>
              </h1>
              
              <p 
                ref={descRef}
                className={`text-xl lg:text-2xl text-blue-100 leading-relaxed transition-all duration-800 delay-500 ${
                  descVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                24/7 Emergency Service • Fair Pricing • Quality Work
                <br />
                <span className={`text-lg transition-all duration-800 delay-700 ${
                  descVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}>
                  Family-owned business serving your community
                </span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <a 
                href="https://www.yelp.com/biz/abs-plumbing-services-oakland-13"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-blue-800/50 hover:bg-blue-700/50 rounded-lg p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                  cardsVisible[0] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                }`}
              >
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                      cardsVisible[0] ? 'animate-twinkle' : ''
                    }`} style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <div className={`text-2xl font-bold transition-all duration-500 ${
                  cardsVisible[0] ? 'animate-counter' : ''
                }`}>500+</div>
                <div className="text-sm text-blue-200">5-Star Reviews</div>
              </a>
              
              <div className={`bg-blue-800/50 rounded-lg p-4 transition-all duration-500 ${
                cardsVisible[1] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
              }`}>
                <Clock className={`w-8 h-8 mx-auto mb-2 text-blue-300 transition-all duration-1000 ${
                  cardsVisible[1] ? 'animate-spin-slow' : ''
                }`} />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Emergency Service</div>
              </div>
              
              <div className={`bg-blue-800/50 rounded-lg p-4 col-span-2 md:col-span-1 transition-all duration-500 ${
                cardsVisible[2] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
              }`}>
                <CheckCircle className={`w-8 h-8 mx-auto mb-2 text-green-400 transition-all duration-1000 ${
                  cardsVisible[2] ? 'animate-pulse-soft' : ''
                }`} />
                <div className="text-2xl font-bold">10%</div>
                <div className="text-sm text-blue-200">New Customer Discount</div>
              </div>
            </div>

            {/* Service Area */}
            <div className="space-y-4">
              <p className={`text-blue-200 text-lg transition-all duration-800 delay-1000 ${
                cardsVisible[2] ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
              }`}>
                Serving the entire San Francisco Bay Area
              </p>
            </div>
          </div>

          {/* Right Column - Service Highlights */}
          <div className="space-y-6">
            <div 
              ref={rightColumnRef}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-800 ${
                rightColumnVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 text-blue-100 transition-all duration-800 delay-300 ${
                rightColumnVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
              }`}>
                Why Choose AB's Plumbing?
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Fair, Transparent Pricing", desc: "No hidden fees, upfront estimates" },
                  { title: "Always On Time", desc: "Respectful of your schedule" },
                  { title: "Clean & Professional", desc: "Treat your home with respect" },
                  { title: "Community Focused", desc: "Family-owned, locally operated" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-3 transition-all duration-800 ${
                      rightColumnVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                  >
                    <CheckCircle className={`w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 transition-all duration-1000 ${
                      rightColumnVisible ? 'animate-pulse-soft' : ''
                    }`} />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-blue-200">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}