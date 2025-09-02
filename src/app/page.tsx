'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo';
import LayoutGridDemo from '@/components/layout-grid-demo';
import YelpReviewsPopup from '@/components/yelp-reviews-popup';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Home() {
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: testimonialsHeaderRef, isVisible: testimonialsHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: testimonialsCardsRef, visibleItems: testimonialsCardsVisible } = useStaggeredScrollAnimation(3, { threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: serviceAreaRef, isVisible: serviceAreaVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: serviceAreaHeaderRef, isVisible: serviceAreaHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: serviceAreaCardsRef, visibleItems: serviceAreaCardsVisible } = useStaggeredScrollAnimation(4, { threshold: 0.1 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: galleryHeaderRef, isVisible: galleryHeaderVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Services Carousel */}
        <section className="bg-gray-50">
          <AppleCardsCarouselDemo />
        </section>

        {/* Customer Testimonials Section */}
        <section ref={testimonialsRef} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={testimonialsHeaderRef} className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-800 ${
                testimonialsHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                What Our Customers Say
              </h2>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto mb-6 transition-all duration-800 delay-200 ${
                testimonialsHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Over 500 five-star reviews from satisfied customers across the Bay Area
              </p>
              <a
                href="https://www.yelp.com/biz/abs-plumbing-services-oakland-13"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg font-medium ${
                  testimonialsHeaderVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 fill-current transition-all duration-300 ${
                      testimonialsHeaderVisible ? 'animate-twinkle' : ''
                    }`} style={{animationDelay: `${600 + i * 100}ms`}} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                Read All Reviews on Yelp
              </a>
            </div>

            <div ref={testimonialsCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                testimonialsCardsVisible[0] ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">MR</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Maria R.</h4>
                      <p className="text-sm text-gray-500">Oakland, CA</p>
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
                      <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Abraham and his team did an excellent job replacing our water heater. Very professional, fair pricing, and they cleaned up everything afterward. Highly recommend!"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">2 weeks ago</span>
                  <div className="flex items-center space-x-1">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">yelp</div>
                    <span className="text-gray-500 text-xs">Review</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                testimonialsCardsVisible[1] ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">JS</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">John S.</h4>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
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
                      <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Emergency drain cleaning at 11pm - they came out quickly and fixed the problem. No hidden fees, exactly what they quoted. Great local business!"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">1 month ago</span>
                  <div className="flex items-center space-x-1">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">yelp</div>
                    <span className="text-gray-500 text-xs">Review</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                testimonialsCardsVisible[2] ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">LC</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lisa C.</h4>
                      <p className="text-sm text-gray-500">Berkeley, CA</p>
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
                      <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Complete bathroom renovation plumbing. Abraham was honest about costs upfront and the quality of work exceeded our expectations. Will definitely use again!"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">3 weeks ago</span>
                  <div className="flex items-center space-x-1">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">yelp</div>
                    <span className="text-gray-500 text-xs">Review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div 
                ref={ctaRef}
                className={`bg-blue-600 text-white p-8 rounded-2xl max-w-2xl mx-auto transition-all duration-800 ${
                  ctaVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">Join Our 500+ Happy Customers</h3>
                <p className="text-blue-200 mb-6">
                  Experience the difference of working with a local, family-owned plumbing business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+15107538649"
                    className="bg-white text-blue-600 hover:bg-gray-50 font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    Call (510) 753-8649
                  </a>
                  <a
                    href="https://www.yelp.com/biz/abs-plumbing-services-oakland-13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    Read More Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section ref={serviceAreaRef} className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div ref={serviceAreaHeaderRef} className="text-center mb-8 sm:mb-12">
              <div className={`inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all duration-800 ${
                serviceAreaHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Service Coverage
              </div>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-800 delay-200 ${
                serviceAreaHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Serving the Entire San Francisco Bay Area
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 transition-all duration-800 delay-400 ${
                serviceAreaHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Professional plumbing services across 16+ cities throughout the Bay Area. 
                From emergency repairs to complete installations, we're your local experts.
              </p>
            </div>

            <div ref={serviceAreaCardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-2 sm:px-0">
              {[
                "San Francisco",
                "Oakland", 
                "San Jose",
                "Berkeley"
              ].map((city, index) => (
                <div 
                  key={city}
                  className={`bg-white rounded-xl p-4 sm:p-6 text-center shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group ${
                    serviceAreaCardsVisible[index] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                  }`}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{city}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Full Coverage</p>
                </div>
              ))}
            </div>

            <div className={`text-center transition-all duration-800 delay-600 ${
              serviceAreaVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Complete Bay Area Coverage</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We proudly serve customers throughout the San Francisco Bay Area with professional plumbing services. 
                  <span className="font-medium text-blue-600">16+ cities covered</span> - see our complete service area coverage.
                </p>
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Local Family Business</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="/service-areas"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View All Service Areas
                  </a>
                  <a
                    href="tel:+15107538649"
                    className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Gallery Section */}
        <section ref={galleryRef} className="section-padding bg-white">
          <div className="container-default">
            <div ref={galleryHeaderRef} className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-800 ${
                galleryHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Our Recent Work
              </h2>
              <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-800 delay-200 ${
                galleryHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                See the quality of our plumbing installations and repairs. Every project completed with precision and care.
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${
              galleryVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
            }`}>
              <LayoutGridDemo />
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
      
      {/* Yelp Reviews Popup */}
      <YelpReviewsPopup />

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

        /* Spin Slow Animation */
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
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

        /* Reduced Motion Preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-fade-in,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-bounce-in,
          .animate-scale-in,
          .animate-pulse-soft,
          .animate-twinkle,
          .animate-spin-slow,
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
        .animate-counter {
          will-change: transform, opacity;
        }

        .animate-pulse-soft,
        .animate-twinkle,
        .animate-spin-slow,
        .animate-subtle-float {
          will-change: transform;
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

        .translate-y-4 {
          transform: translateY(1rem);
        }

        .-translate-x-12 {
          transform: translateX(-3rem);
        }

        .translate-x-12 {
          transform: translateX(3rem);
        }

        .-translate-x-8 {
          transform: translateX(-2rem);
        }

        .scale-50 {
          transform: scale(0.5);
        }

        .scale-50 {
          transform: scale(0.5);
        }

        .scale-75 {
          transform: scale(0.75);
        }

        .scale-95 {
          transform: scale(0.95);
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

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }

        .delay-500 {
          transition-delay: 500ms;
        }

        .delay-700 {
          transition-delay: 700ms;
        }

        .delay-1000 {
          transition-delay: 1000ms;
        }
      `}</style>
    </>
  );
}
