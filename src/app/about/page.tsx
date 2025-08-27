'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';
import { 
  Heart, 
  Shield, 
  Award, 
  Star, 
  Clock, 
  CheckCircle, 
  Users, 
  Home,
  MapPin,
  Wrench,
  Target,
  Quote,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
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
  
  // Abraham's story section
  const { ref: storySectionRef, isVisible: storySectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: storyTextRef, isVisible: storyTextVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: missionBoxRef, isVisible: missionBoxVisible } = useScrollAnimation({ threshold: 0.3 });
  
  // Values section
  const { ref: valuesSectionRef, isVisible: valuesSectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: valuesHeaderRef, isVisible: valuesHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: valuesGridRef, visibleItems: valuesVisible } = useStaggeredScrollAnimation(4, { threshold: 0.1 });
  
  // Credentials section
  const { ref: credentialsSectionRef, isVisible: credentialsSectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: credentialsTextRef, isVisible: credentialsTextVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: certificationListRef, visibleItems: certificationsVisible } = useStaggeredScrollAnimation(5, { threshold: 0.1 });
  const { ref: reviewsBoxRef, isVisible: reviewsBoxVisible } = useScrollAnimation({ threshold: 0.3 });
  
  // Service approach section
  const { ref: approachSectionRef, isVisible: approachSectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: approachHeaderRef, isVisible: approachHeaderVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: approachStepsRef, visibleItems: approachStepsVisible } = useStaggeredScrollAnimation(3, { threshold: 0.1 });
  const { ref: quoteBoxRef, isVisible: quoteBoxVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: ctaButtonRef, isVisible: ctaButtonVisible } = useScrollAnimation({ threshold: 0.3 });
  const values = [
    {
      icon: Heart,
      title: "Honesty",
      description: "Transparent communication and fair pricing. No hidden fees, no surprises.",
      color: "red"
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Every job done right the first time with attention to detail and premium materials.",
      color: "green"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "We show up on time, keep our promises, and are available when you need us most.",
      color: "blue"
    },
    {
      icon: Home,
      title: "Respect",
      description: "We treat your home and family with the same care we'd want for our own.",
      color: "purple"
    }
  ];


  const certifications = [
    "Licensed Plumbing Contractor",
    "Fully Insured & Bonded", 
    "Gas Line Certified",
    "Backflow Prevention Certified",
    "Green Plumbing Practices"
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
                <Heart className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-1000 ${heroBadgeVisible ? 'animate-pulse-soft' : ''}`} />
                Family-Owned Business
              </div>
              
              <h1 
                ref={heroTitleRef}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight transition-all duration-800 ${
                  heroTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Meet the Team Behind
                <span className={`block text-blue-300 transition-all duration-800 delay-300 ${
                  heroTitleVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-12'
                }`}>AB's Plumbing</span>
              </h1>
              
              <p 
                ref={heroDescRef}
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0 transition-all duration-800 delay-500 ${
                  heroDescVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                A local Bay Area family business built on honesty, integrity, and exceptional craftsmanship. 
                We're not just your plumbers – we're your neighbors.
              </p>
              
              <div 
                ref={heroStatsRef}
                className={`flex items-center justify-center space-x-4 sm:space-x-6 text-blue-200 text-sm sm:text-base transition-all duration-800 delay-700 ${
                  heroStatsVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Award className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>Local Family Business</span>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Users className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>Community Focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abraham's Story */}
        <section ref={storySectionRef} className="py-12 sm:py-16 lg:py-20">
          <div className="container-default px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 
                  ref={storyTextRef}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left transition-all duration-800 ${
                    storyTextVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8'
                  }`}
                >
                  Abraham G., Owner & Founder
                </h2>
                
                <div className={`space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed transition-all duration-800 delay-200 ${
                  storyTextVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="relative">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 opacity-50 absolute -top-2 -left-2" />
                    <p className="pl-6 sm:pl-8">
                      I started AB's Plumbing Services because I was frustrated seeing how customers were being treated by large plumbing companies. Too many people were getting overcharged for subpar work, and I knew there had to be a better way.
                    </p>
                  </div>
                  
                  <p>
                    Growing up in the San Francisco Bay Area, I learned the value of hard work and treating people fairly. When I decided to start my own plumbing business, those values became the foundation of everything we do.
                  </p>
                  
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 italic">
                      "Our success isn't measured just by our profits, but by the trust our customers place in us and the relationships we build along the way."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div 
                  ref={missionBoxRef}
                  className={`bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-lg transition-all duration-800 ${
                    missionBoxVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To provide honest, reliable, and fairly-priced plumbing services while treating every customer's home with the same respect we'd want for our own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section ref={valuesSectionRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container-default px-4 sm:px-6">
            <div 
              ref={valuesHeaderRef}
              className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
                valuesHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Core Values
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-800 delay-300 ${
                valuesHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                These principles guide everything we do, from the smallest repair to the largest installation project.
              </p>
            </div>
            
            <div ref={valuesGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                    valuesVisible[index] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                  }`}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${value.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials & Certifications */}
        <section ref={credentialsSectionRef} className="py-12 sm:py-16 lg:py-20">
          <div className="container-default px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 
                  ref={credentialsTextRef}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-800 ${
                    credentialsTextVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8'
                  }`}
                >
                  Licensed, Insured & Certified
                </h2>
                <p className={`text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed transition-all duration-800 delay-200 ${
                  credentialsTextVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}>
                  Your peace of mind is important to us. We maintain all required licenses and insurance 
                  to protect both our customers and our team members.
                </p>
                
                <div ref={certificationListRef} className="space-y-3 sm:space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-3 bg-green-50 p-3 rounded-lg transition-all duration-500 ${
                        certificationsVisible[index] ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-4'
                      }`}
                    >
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:flex lg:items-end lg:justify-center">
                <div 
                  ref={reviewsBoxRef}
                  className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md transition-all duration-800 ${
                    reviewsBoxVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">500+ Five-Star Reviews</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Our customers consistently rate us 5 stars for quality work, fair pricing, and professional service.
                    </p>
                    <div className="mb-6">
                      <a
                        href="https://www.yelp.com/biz/abs-plumbing-services-oakland-13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                      >
                        Read Our Yelp Reviews
                      </a>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      <Users className="w-4 h-4" />
                      Family Owned & Operated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Approach */}
        <section ref={approachSectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)] transition-all duration-1000 ${approachSectionVisible ? 'animate-subtle-float' : ''}`}></div>
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                ref={approachHeaderRef}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-800 ${
                  approachHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Our Service Approach
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-blue-100 mb-12 sm:mb-16 transition-all duration-800 delay-300 ${
                approachHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Every project follows our proven three-step process for guaranteed satisfaction
              </p>
              
              <div ref={approachStepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {[
                  {
                    icon: CheckCircle,
                    title: "Professional Assessment",
                    description: "Thorough evaluation with clear explanation of work needed and transparent pricing"
                  },
                  {
                    icon: Wrench,
                    title: "Expert Execution",
                    description: "Skilled workmanship using premium materials and proven techniques for lasting results"
                  },
                  {
                    icon: Heart,
                    title: "Follow-Up Care",
                    description: "We stand behind our work and remain available for any questions or concerns"
                  }
                ].map((step, index) => (
                  <div 
                    key={step.title}
                    className={`text-center group transition-all duration-800 ${
                      approachStepsVisible[index] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 ${
                      approachStepsVisible[index] ? 'animate-pulse-soft' : ''
                    }`}>
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">{step.title}</h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base px-2">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div 
                ref={quoteBoxRef}
                className={`bg-blue-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-600/50 transition-all duration-800 ${
                  quoteBoxVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
                }`}
              >
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300 mx-auto mb-4" />
                <p className="text-lg sm:text-xl text-blue-100 mb-4 sm:mb-6 italic">
                  "When you call AB's Plumbing, you're not just hiring a contractor – you're partnering with a local business that cares about your satisfaction and our community's reputation."
                </p>
                <div className="flex items-center justify-center space-x-2 text-blue-300">
                  <span className="font-medium">- Abraham G., Owner & Founder</span>
                </div>
              </div>
              
              <div 
                ref={ctaButtonRef}
                className={`mt-12 transition-all duration-800 delay-500 ${
                  ctaButtonVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
              >
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

        .-translate-x-8 {
          transform: translateX(-2rem);
        }

        .-translate-x-4 {
          transform: translateX(-1rem);
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

        .duration-500 {
          transition-duration: 500ms;
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

        .delay-600 {
          transition-delay: 600ms;
        }

        .delay-700 {
          transition-delay: 700ms;
        }

        .delay-800 {
          transition-delay: 800ms;
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
        .animate-scale-in {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </>
  );
}