'use client';

import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
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
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
          </div>
          
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                Family-Owned Business
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                Meet the Team Behind
                <span className="block text-blue-300">AB's Plumbing</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                A local Bay Area family business built on honesty, integrity, and exceptional craftsmanship. 
                We're not just your plumbers – we're your neighbors.
              </p>
              
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-blue-200 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Local Family Business</span>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Community Focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abraham's Story */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-default px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
                  Abraham G., Owner & Founder
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
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
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-lg">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container-default px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from the smallest repair to the largest installation project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 150}ms` }}
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
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-default px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Licensed, Insured & Certified
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                  Your peace of mind is important to us. We maintain all required licenses and insurance 
                  to protect both our customers and our team members.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:flex lg:items-end lg:justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our Service Approach
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-12 sm:mb-16">
                Every project follows our proven three-step process for guaranteed satisfaction
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
                    className="text-center group animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-3">{step.title}</h3>
                    <p className="text-blue-200 leading-relaxed text-sm sm:text-base px-2">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-600/50">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300 mx-auto mb-4" />
                <p className="text-lg sm:text-xl text-blue-100 mb-4 sm:mb-6 italic">
                  "When you call AB's Plumbing, you're not just hiring a contractor – you're partnering with a local business that cares about your satisfaction and our community's reputation."
                </p>
                <div className="flex items-center justify-center space-x-2 text-blue-300">
                  <span className="font-medium">- Abraham G., Owner & Founder</span>
                </div>
              </div>
              
              <div className="mt-12">
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