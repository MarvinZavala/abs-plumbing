'use client';

import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useState } from 'react';
import {
  Wrench,
  Droplets,
  Flame,
  Toilet,
  Home,
  Zap,
  Search,
  Settings,
  Bath,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  popular?: boolean;
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'installation' | 'repair' | 'additional'>('installation');

  const installationServices: Service[] = [
    {
      title: "Water Heater Installation",
      description: "Complete water heater installation for tank and tankless systems with permits and warranties",
      icon: Flame,
      features: ["Tank & Tankless Options", "Permit Included", "Energy Efficient", "5-Year Warranty"],
      popular: true
    },
    {
      title: "Bathtub Installation",
      description: "Professional bathtub installation for all types including standard, walk-in, and luxury soaking tubs",
      icon: Bath,
      features: ["All Tub Types", "Proper Waterproofing", "Professional Finish", "Code Compliant"]
    },
    {
      title: "Toilet Installation",
      description: "Professional toilet installation with proper sealing, water connections, and efficiency optimization",
      icon: Toilet,
      features: ["Proper Sealing", "Water Efficient", "All Toilet Types", "Same Day Service"]
    },
    {
      title: "Faucet Installation",
      description: "Kitchen and bathroom faucet installation with precision fitting and leak-free connections",
      icon: Droplets,
      features: ["All Faucet Types", "Leak-Free Installation", "Water-Efficient Options", "Lifetime Support"]
    },
    {
      title: "Garbage Disposal Installation",
      description: "Complete garbage disposal installation with electrical connections and proper mounting",
      icon: UtensilsCrossed,
      features: ["Electrical Connection", "Proper Mounting", "All Major Brands", "Noise Reduction"]
    },
    {
      title: "Gas Line Installation",
      description: "Safe and code-compliant gas line installation for water heaters, stoves, and appliances",
      icon: Flame,
      features: ["Safety Certified", "Code Compliant", "Pressure Testing", "Emergency Support"]
    }
  ];

  const repairServices: Service[] = [
    {
      title: "Emergency Pipe Repair",
      description: "24/7 emergency pipe repair service for burst pipes, leaks, and water damage prevention",
      icon: Wrench,
      features: ["24/7 Emergency", "Same Day Service", "Water Damage Prevention", "Insurance Claims"],
      popular: true
    },
    {
      title: "Water Heater Repair",
      description: "Expert water heater repair, thermostat replacement, and efficiency restoration services",
      icon: Flame,
      features: ["All Repairs", "Thermostat Replacement", "Efficiency Restoration", "Same Day Fix"]
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning and clog removal using advanced equipment and techniques",
      icon: Droplets,
      features: ["Advanced Equipment", "Root Removal", "Video Inspection", "Preventive Maintenance"]
    },
    {
      title: "Faucet Repair",
      description: "Comprehensive faucet repair including leak fixes, cartridge replacement, and pressure restoration",
      icon: Droplets,
      features: ["Leak Repair", "Cartridge Replacement", "Pressure Restoration", "Water Savings"]
    },
    {
      title: "Toilet Repair",
      description: "Complete toilet repair services including leak fixes, running toilet solutions, and component replacement",
      icon: Toilet,
      features: ["Leak Repair", "Running Toilet Fix", "Component Replacement", "Water Efficiency"]
    },
    {
      title: "Sewer Line Repair",
      description: "Advanced sewer line repair using trenchless technology and traditional methods",
      icon: Home,
      features: ["Trenchless Options", "Video Inspection", "Minimal Disruption", "Long-Term Solutions"]
    }
  ];

  const additionalServices: Service[] = [
    {
      title: "Plumbing Inspection",
      description: "Comprehensive plumbing system inspection with detailed report and maintenance recommendations",
      icon: Search,
      features: ["Comprehensive Inspection", "Detailed Report", "Maintenance Plan", "Problem Prevention"]
    },
    {
      title: "Complete System Installation",
      description: "Full plumbing system installation for new construction and major renovations",
      icon: Home,
      features: ["New Construction", "Renovation Work", "Complete Systems", "Project Management"]
    },
    {
      title: "Preventive Maintenance",
      description: "Regular maintenance service to prevent issues and extend the life of your plumbing system",
      icon: Settings,
      features: ["Regular Checkups", "Issue Prevention", "System Optimization", "Priority Support"]
    }
  ];

  const getServices = () => {
    switch (activeCategory) {
      case 'installation': return installationServices;
      case 'repair': return repairServices;
      case 'additional': return additionalServices;
      default: return installationServices;
    }
  };

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
        service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {service.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-bl-xl text-xs sm:text-sm font-semibold flex items-center gap-1">
          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
          Popular
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
              {service.title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          {service.description}
        </p>
        
        <div className="space-y-2 mb-4 sm:mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm sm:text-base">
          Get Quote
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

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
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                Professional Plumbing Services
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
                Expert Plumbing
                <span className="block text-blue-300">Solutions</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                From emergency repairs to complete installations, we deliver professional plumbing services 
                across the San Francisco Bay Area with guaranteed quality and fair pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base">
                  View All Services
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 border-2 border-blue-400 text-sm sm:text-base">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container-default px-4 sm:px-6">
            {/* Mobile Category Selector */}
            <div className="lg:hidden mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Service Categories</h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: 'installation', label: 'Installation', count: installationServices.length },
                    { id: 'repair', label: 'Repair', count: repairServices.length },
                    { id: 'additional', label: 'Additional', count: additionalServices.length }
                  ].map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id as any)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="font-medium text-sm">{category.label} Services</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-8 items-start">
              <div className="w-1/4">
                <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Service Categories</h3>
                  <div className="space-y-2">
                    {[
                      { id: 'installation', label: 'Installation Services', count: installationServices.length },
                      { id: 'repair', label: 'Repair Services', count: repairServices.length },
                      { id: 'additional', label: 'Additional Services', count: additionalServices.length }
                    ].map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id as any)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="font-medium">{category.label}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeCategory === category.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="w-3/4">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 capitalize">
                    {activeCategory} Services
                  </h2>
                  <p className="text-xl text-gray-600">
                    {activeCategory === 'installation' && 'Professional installation services with quality materials and expert craftsmanship'}
                    {activeCategory === 'repair' && 'Expert repair services to fix any plumbing problem quickly and efficiently'}
                    {activeCategory === 'additional' && 'Comprehensive plumbing services beyond standard installation and repair work'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 service-cards">
                  {getServices().map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Services Grid */}
            <div className="lg:hidden">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 capitalize">
                  {activeCategory} Services
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  {activeCategory === 'installation' && 'Professional installation services with quality materials and expert craftsmanship'}
                  {activeCategory === 'repair' && 'Expert repair services to fix any plumbing problem quickly and efficiently'}
                  {activeCategory === 'additional' && 'Comprehensive plumbing services beyond standard installation and repair work'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 service-cards">
                {getServices().map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose AB's Plumbing?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100">
                We're committed to delivering exceptional service with every job
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Zap,
                  title: "Fast Response",
                  description: "Same-day service available for most repairs and installations"
                },
                {
                  icon: Settings,
                  title: "Quality Work",
                  description: "Every job done right the first time with premium materials"
                },
                {
                  icon: Wrench,
                  title: "Expert Team",
                  description: "Licensed, insured professionals with years of experience"
                },
                {
                  icon: Home,
                  title: "Fair Pricing",
                  description: "Transparent pricing with no hidden fees or surprises"
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-blue-200 leading-relaxed text-sm sm:text-base px-2 sm:px-0">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style jsx>{`
        .service-cards {
          animation: fadeInUp 0.8s ease-out;
        }

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
          .service-cards,
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