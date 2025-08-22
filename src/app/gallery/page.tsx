'use client';

import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useState } from 'react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/use-scroll-animation';
import { 
  Camera, 
  Clock, 
  CheckCircle, 
  Star, 
  Eye, 
  MapPin, 
  Award,
  Users,
  Wrench,
  ArrowRight
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  services: string[];
  location: string;
  duration: string;
  featured?: boolean;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Scroll animation hooks
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: heroBadgeRef, isVisible: heroBadgeVisible } = useScrollAnimation({ threshold: 0.8 });
  const { ref: heroTitleRef, isVisible: heroTitleVisible } = useScrollAnimation({ threshold: 0.6 });
  const { ref: heroDescRef, isVisible: heroDescVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: heroStatsRef, isVisible: heroStatsVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const { ref: filterSectionRef, isVisible: filterSectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: filterHeaderRef, isVisible: filterHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: filterButtonsRef, isVisible: filterButtonsVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const { ref: projectsHeaderRef, isVisible: projectsHeaderVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: projectsGridRef, visibleItems: projectsVisible } = useStaggeredScrollAnimation(6, { threshold: 0.1 });
  
  const { ref: ctaSectionRef, isVisible: ctaSectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaHeaderRef, isVisible: ctaHeaderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { ref: ctaStatsRef, visibleItems: ctaStatsVisible } = useStaggeredScrollAnimation(3, { threshold: 0.2 });
  const { ref: ctaButtonsRef, isVisible: ctaButtonsVisible } = useScrollAnimation({ threshold: 0.3 });

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Master Bathroom Renovation",
      category: "Bathroom",
      description: "Complete bathroom transformation with walk-in shower, dual vanities, and premium fixtures in a San Francisco Victorian home.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Walk-in Shower", "Dual Vanities", "Luxury Fixtures", "Heated Floors"],
      location: "San Francisco",
      duration: "3 days",
      featured: true
    },
    {
      id: 2,
      title: "Emergency Water Heater Replacement",
      category: "Water Heaters",
      description: "Same-day tankless water heater installation after emergency failure, restoring hot water within 4 hours.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Tankless Installation", "Gas Line Work", "Permit Acquisition", "Same Day Service"],
      location: "Oakland",
      duration: "Same day",
      featured: true
    },
    {
      id: 3,
      title: "Modern Kitchen Sink Installation",
      category: "Kitchen",
      description: "Complete kitchen plumbing upgrade with undermount sink, garbage disposal, and water filtration system.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Sink Installation", "Garbage Disposal", "Water Filtration", "Faucet Upgrade"],
      location: "San Jose",
      duration: "1 day"
    },
    {
      id: 4,
      title: "Trenchless Sewer Line Repair",
      category: "Emergency Repairs",
      description: "Non-invasive sewer line repair using advanced trenchless technology, saving the customer's landscaping.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Trenchless Repair", "Video Inspection", "Root Removal", "Line Testing"],
      location: "Berkeley",
      duration: "2 days"
    },
    {
      id: 5,
      title: "Guest Bathroom Remodel",
      category: "Bathroom",
      description: "Space-efficient bathroom renovation maximizing functionality in a compact Fremont townhome.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Space Optimization", "New Fixtures", "Efficient Layout", "Modern Design"],
      location: "Fremont",
      duration: "2 days"
    },
    {
      id: 6,
      title: "High-Efficiency Water Heater Install",
      category: "Water Heaters",
      description: "Energy-efficient tank water heater installation with smart controls and expansion tank for optimal performance.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Tank Installation", "Smart Controls", "Expansion Tank", "Energy Efficiency"],
      location: "Hayward",
      duration: "1 day"
    }
  ];

  const categories = ["All", "Bathroom", "Kitchen", "Water Heaters", "Emergency Repairs"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
        project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
      } ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'}`}
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-bl-xl text-xs sm:text-sm font-semibold flex items-center gap-1 z-10">
          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
          Featured
        </div>
      )}
      
      {/* Before/After Images */}
      <div className="grid grid-cols-2 relative">
        <div className="relative overflow-hidden">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <div className="text-center text-gray-500">
              <Camera className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 opacity-50" />
              <div className="text-xs sm:text-sm font-medium">BEFORE</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            BEFORE
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <div className="text-center text-blue-600">
              <Camera className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2" />
              <div className="text-xs sm:text-sm font-medium">AFTER</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
            AFTER
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {project.category}
          </span>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{project.location}</span>
          </div>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
          {project.description}
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center text-gray-600">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>Duration: {project.duration}</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>Completed</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">Services:</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.services.slice(0, 3).map((service, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg"
                >
                  {service}
                </span>
              ))}
              {project.services.length > 3 && (
                <span className="text-xs text-gray-500">+{project.services.length - 3} more</span>
              )}
            </div>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm sm:text-base">
          View Project
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
                <Camera className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-1000 ${heroBadgeVisible ? 'animate-pulse-soft' : ''}`} />
                Project Gallery
              </div>
              
              <h1 
                ref={heroTitleRef}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight transition-all duration-800 ${
                  heroTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Our Work
                <span className={`block text-blue-300 transition-all duration-800 delay-300 ${
                  heroTitleVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-12'
                }`}>Speaks for Itself</span>
              </h1>
              
              <p 
                ref={heroDescRef}
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0 transition-all duration-800 delay-500 ${
                  heroDescVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Explore real before and after photos from actual projects across the San Francisco Bay Area. 
                Quality workmanship and satisfied customers are our best advertisement.
              </p>
              
              <div 
                ref={heroStatsRef}
                className={`flex items-center justify-center space-x-4 sm:space-x-6 text-blue-200 text-sm sm:text-base transition-all duration-800 delay-700 ${
                  heroStatsVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Award className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>500+ Projects</span>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Users className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-1000 ${heroStatsVisible ? 'animate-twinkle' : ''}`} />
                  <span>Real Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section ref={filterSectionRef} className="py-8 sm:py-12 bg-gray-50">
          <div className="container-default px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div ref={filterHeaderRef} className={`text-center mb-8 transition-all duration-800 ${
                filterHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Browse by Category
                </h2>
                <p className={`text-gray-600 text-sm sm:text-base transition-all duration-800 delay-300 ${
                  filterHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}>
                  Filter projects by type to see specific examples of our work
                </p>
              </div>
              
              <div 
                ref={filterButtonsRef}
                className={`flex flex-wrap justify-center gap-2 sm:gap-4 transition-all duration-800 delay-500 ${
                  filterButtonsVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
              >
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                    style={{ 
                      animationDelay: `${700 + index * 100}ms`,
                      opacity: filterButtonsVisible ? 1 : 0,
                      transform: filterButtonsVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {category}
                    <span className="ml-2 text-xs opacity-75">
                      ({category === 'All' ? projects.length : projects.filter(p => p.category === category).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container-default px-4 sm:px-6">
            <div ref={projectsHeaderRef} className={`mb-8 transition-all duration-800 ${
              projectsHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {activeFilter === 'All' ? 'All Projects' : `${activeFilter} Projects`}
                  </h3>
                  <p className={`text-gray-600 text-sm sm:text-base transition-all duration-800 delay-300 ${
                    projectsHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                  }`}>
                    Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>
            
            <div ref={projectsGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 project-cards">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isVisible={projectsVisible[index] || false} />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className={`text-center py-12 transition-all duration-800 ${
                projectsHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                <Camera className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats & CTA Section */}
        <section ref={ctaSectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)] transition-all duration-1000 ${ctaSectionVisible ? 'animate-subtle-float' : ''}`}></div>
          <div className="container-default relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                ref={ctaHeaderRef}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-800 ${
                  ctaHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
              >
                Ready to Start Your Project?
              </h2>
              <p className={`text-base sm:text-lg md:text-xl text-blue-100 mb-12 sm:mb-16 transition-all duration-800 delay-300 ${
                ctaHeaderVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
              }`}>
                Join hundreds of satisfied customers who trust AB's Plumbing with their most important projects
              </p>
              
              <div ref={ctaStatsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
                {[
                  { number: "500+", label: "Completed Projects", icon: Wrench },
                  { number: "100%", label: "Customer Satisfaction", icon: Users },
                  { number: "5★", label: "Average Rating", icon: Star }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`text-center group transition-all duration-800 ${
                      ctaStatsVisible[index] ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-50'
                    }`}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 ${
                      ctaStatsVisible[index] ? 'animate-pulse-soft' : ''
                    }`}>
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold mb-2 transition-all duration-500 ${
                      ctaStatsVisible[index] ? 'animate-counter' : ''
                    }`}>{stat.number}</div>
                    <div className="text-blue-200 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div 
                ref={ctaButtonsRef}
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-800 delay-700 ${
                  ctaButtonsVisible ? 'animate-bounce-in opacity-100' : 'opacity-0 scale-75'
                }`}
              >
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base">
                  Get Free Estimate
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 border-2 border-blue-400 text-sm sm:text-base">
                  Call Now
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
        .animate-counter {
          will-change: transform, opacity;
        }

        .animate-pulse-soft,
        .animate-twinkle,
        .animate-subtle-float {
          will-change: transform;
        }
      `}</style>
    </>
  );
}