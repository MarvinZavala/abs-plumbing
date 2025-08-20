import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import EmergencyBanner from '@/components/emergency-banner';
import ContactForm from '@/components/contact-form';
import { Camera, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Gallery | Before & After | AB\'s Plumbing Services',
  description: 'View our completed plumbing projects across the San Francisco Bay Area. Before and after photos of bathroom, kitchen, and emergency repairs.',
};

export default function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: "Bathroom Renovation - San Francisco",
      category: "Bathroom",
      description: "Complete bathroom plumbing renovation including new fixtures, shower installation, and modern vanity.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Shower Installation", "Toilet Replacement", "Vanity Plumbing"]
    },
    {
      id: 2,
      title: "Water Heater Replacement - Oakland",
      category: "Water Heaters",
      description: "Emergency water heater replacement with energy-efficient tankless system.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Tankless Installation", "Gas Line Work", "Permit Acquisition"]
    },
    {
      id: 3,
      title: "Kitchen Sink Emergency Repair - San Jose",
      category: "Kitchen",
      description: "Emergency repair of burst pipe under kitchen sink with complete fixture replacement.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Pipe Repair", "Sink Installation", "Emergency Service"]
    },
    {
      id: 4,
      title: "Sewer Line Repair - Berkeley",
      category: "Emergency Repairs",
      description: "Trenchless sewer line repair to resolve chronic backup issues.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Sewer Repair", "Trenchless Method", "Video Inspection"]
    },
    {
      id: 5,
      title: "Master Bathroom Remodel - Fremont",
      category: "Bathroom",
      description: "Luxury master bathroom remodel with walk-in shower and dual vanities.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Walk-in Shower", "Dual Vanities", "Luxury Fixtures"]
    },
    {
      id: 6,
      title: "Water Heater Installation - Hayward",
      category: "Water Heaters",
      description: "New high-efficiency tank water heater installation with expansion tank.",
      beforeImage: "/images/placeholder-before.jpg",
      afterImage: "/images/placeholder-after.jpg",
      services: ["Tank Installation", "Expansion Tank", "Code Compliance"]
    }
  ];

  const categories = ["All", "Bathroom", "Kitchen", "Water Heaters", "Emergency Repairs"];

  return (
    <>
      <Navigation />
      <EmergencyBanner />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Project Gallery
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                See the quality of our work through before and after photos of completed projects across the Bay Area
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <Camera className="w-5 h-5" />
                <span>Real projects • Real results • Real customers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container-default">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="section-padding">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <div className="aspect-square bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Camera className="w-12 h-12 mx-auto mb-2" />
                          <div>BEFORE</div>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Camera className="w-12 h-12 mx-auto mb-2" />
                          <div>AFTER</div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Completed</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, index) => (
                          <span 
                            key={index}
                            className="flex items-center text-sm text-green-700 bg-green-50 px-2 py-1 rounded"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-blue-50">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See why hundreds of Bay Area homeowners trust AB&apos;s Plumbing with their most important projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14155551234"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Call for Free Estimate
                </a>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg border-2 border-blue-600 transition-colors"
                >
                  Request Quote Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your Project Today
                </h2>
                <p className="text-xl text-gray-600">
                  Get your free estimate and join our gallery of satisfied customers.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}