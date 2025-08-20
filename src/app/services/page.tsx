import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import EmergencyBanner from '@/components/emergency-banner';
import ServiceCard from '@/components/service-card';
import ContactForm from '@/components/contact-form';
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
  UtensilsCrossed
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plumbing Services | Installation & Repair | AB\'s Plumbing Services',
  description: 'Complete plumbing services in San Francisco Bay Area. Installation, repair & maintenance for water heaters, drains, toilets, showers, and more. Licensed & insured.',
};

export default function ServicesPage() {
  const installationServices = [
    {
      title: "Bathtub Installation",
      description: "Professional bathtub installation for all types including standard, walk-in, and soaking tubs",
      icon: Bath,
      features: ["All tub types", "Proper waterproofing", "Professional finish"]
    },
    {
      title: "Drain Installation",
      description: "New drain installation for sinks, showers, tubs, and floor drains with proper drainage",
      icon: Droplets,
      features: ["Proper slope", "Code compliant", "Durable materials"]
    },
    {
      title: "Faucet Installation",
      description: "Kitchen and bathroom faucet installation with precision fitting and leak-free connections",
      icon: Droplets,
      features: ["All faucet types", "Leak-free installation", "Water-efficient options"]
    },
    {
      title: "Garbage Disposal Installation",
      description: "Complete garbage disposal installation with electrical connections and proper mounting",
      icon: UtensilsCrossed,
      features: ["Electrical connection", "Proper mounting", "All major brands"]
    },
    {
      title: "Gas Line Installation",
      description: "Safe and code-compliant gas line installation for water heaters, stoves, and appliances",
      icon: Flame,
      features: ["Safety certified", "Code compliant", "Pressure testing"]
    },
    {
      title: "Sewer Installation",
      description: "New sewer line installation with proper grading and connection to municipal systems",
      icon: Home,
      features: ["Proper grading", "Municipal connection", "Long-lasting materials"]
    },
    {
      title: "Shower Installation",
      description: "Complete shower installation including plumbing, fixtures, and waterproofing",
      icon: Bath,
      features: ["Waterproof installation", "Custom configurations", "Quality fixtures"]
    },
    {
      title: "Sink Installation",
      description: "Kitchen and bathroom sink installation with proper connections and drainage",
      icon: Droplets,
      features: ["Kitchen & bathroom", "Proper connections", "All sink types"]
    },
    {
      title: "Sump Pump Installation",
      description: "Basement and crawl space sump pump installation for flood prevention",
      icon: Settings,
      features: ["Flood prevention", "Automatic operation", "Battery backup options"]
    },
    {
      title: "Toilet Installation",
      description: "Professional toilet installation with proper sealing and water connections",
      icon: Toilet,
      features: ["Proper sealing", "Water efficient", "All toilet types"]
    },
    {
      title: "Water Heater Installation",
      description: "Complete water heater installation for tank and tankless systems with permits",
      icon: Flame,
      features: ["Tank & tankless", "Permit included", "Energy efficient"]
    },
    {
      title: "Water Pipe Installation",
      description: "New water pipe installation using copper, PEX, or PVC materials",
      icon: Wrench,
      features: ["Multiple materials", "Proper insulation", "Long warranty"]
    }
  ];

  const repairServices = [
    {
      title: "Bathtub Repair",
      description: "Bathtub leak repair, caulking, fixture repair, and drain clearing",
      icon: Bath,
      features: ["Leak repair", "Re-caulking", "Fixture repair"]
    },
    {
      title: "Drain Repair",
      description: "Drain unclogging, pipe repair, and drainage system restoration",
      icon: Droplets,
      features: ["Unclogging", "Pipe repair", "System restoration"]
    },
    {
      title: "Faucet Repair",
      description: "Faucet leak repair, cartridge replacement, and water pressure restoration",
      icon: Droplets,
      features: ["Leak repair", "Cartridge replacement", "Pressure restoration"]
    },
    {
      title: "Garbage Disposal Repair",
      description: "Garbage disposal jam clearing, motor repair, and component replacement",
      icon: UtensilsCrossed,
      features: ["Jam clearing", "Motor repair", "Component replacement"]
    },
    {
      title: "Gas Line Repair",
      description: "Emergency gas line leak repair and connection restoration with safety priority",
      icon: Flame,
      features: ["Emergency repair", "Leak detection", "Safety certified"]
    },
    {
      title: "Sewer Repair",
      description: "Sewer line repair, clearing, and replacement using modern techniques",
      icon: Home,
      features: ["Line repair", "Professional clearing", "Trenchless options"]
    },
    {
      title: "Shower Repair",
      description: "Shower leak repair, valve replacement, and water pressure issues",
      icon: Bath,
      features: ["Leak repair", "Valve replacement", "Pressure issues"]
    },
    {
      title: "Sink Repair",
      description: "Sink leak repair, drain clearing, and fixture replacement",
      icon: Droplets,
      features: ["Leak repair", "Drain clearing", "Fixture replacement"]
    },
    {
      title: "Sump Pump Repair",
      description: "Sump pump motor repair, switch replacement, and system maintenance",
      icon: Settings,
      features: ["Motor repair", "Switch replacement", "System maintenance"]
    },
    {
      title: "Toilet Repair",
      description: "Toilet leak repair, running toilet fix, and component replacement",
      icon: Toilet,
      features: ["Leak repair", "Running toilet fix", "Component replacement"]
    },
    {
      title: "Water Heater Repair",
      description: "Water heater repair, thermostat replacement, and efficiency restoration",
      icon: Flame,
      features: ["All repairs", "Thermostat replacement", "Efficiency restoration"]
    },
    {
      title: "Water Pipe Repair",
      description: "Pipe leak repair, burst pipe emergency service, and pipe replacement",
      icon: Wrench,
      features: ["Leak repair", "Emergency service", "Pipe replacement"]
    }
  ];

  const additionalServices = [
    {
      title: "Plumbing Inspection",
      description: "Comprehensive plumbing system inspection with detailed report and recommendations",
      icon: Search,
      features: ["Comprehensive inspection", "Detailed report", "Recommendations included"]
    },
    {
      title: "Plumbing Installation or Replacement",
      description: "Complete plumbing system installation or replacement for new construction or renovation",
      icon: Home,
      features: ["New construction", "Renovation work", "Complete systems"]
    },
    {
      title: "General Plumbing Repair",
      description: "All types of plumbing repairs not covered by specific services - we handle it all",
      icon: Wrench,
      features: ["All repair types", "Problem diagnosis", "Quality workmanship"]
    }
  ];

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
                Complete Plumbing Services
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                From emergency repairs to new installations, we handle all your plumbing needs across the San Francisco Bay Area
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14155551234"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Emergency Service: (415) 555-1234
                </a>
                <a
                  href="#contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services */}
        <section className="section-padding">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Installation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional installation of all plumbing fixtures and systems with quality materials and expert craftsmanship
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {installationServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Repair Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Repair Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert repair services to fix any plumbing problem quickly and efficiently with lasting solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive plumbing services beyond standard installation and repair work
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="section-padding bg-blue-900 text-white">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose AB&apos;s Plumbing Services?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fast Service</h3>
                  <p className="text-blue-200">Same-day service available for most repairs and installations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Quality Work</h3>
                  <p className="text-blue-200">Every job done right the first time with quality materials</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                  <p className="text-blue-200">Licensed, insured professionals with years of experience</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fair Pricing</h3>
                  <p className="text-blue-200">Transparent pricing with no hidden fees or surprises</p>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-blue-800 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Emergency Service Available 24/7</h3>
                <p className="text-blue-200 mb-6">
                  Plumbing emergencies don&apos;t wait for business hours. Our emergency service is available around the clock.
                </p>
                <a
                  href="tel:+14155551234"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-block"
                >
                  Call Emergency Line: (415) 555-1234
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Serving the Entire San Francisco Bay Area
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {[
                  'San Francisco', 'Oakland', 'San Jose', 'Berkeley',
                  'Fremont', 'Hayward', 'Sunnyvale', 'Santa Clara',
                  'Daly City', 'Richmond', 'Alameda', 'Vallejo',
                  'Palo Alto', 'Mountain View', 'Redwood City', 'San Mateo'
                ].map((city) => (
                  <div key={city} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="font-semibold text-gray-900">{city}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6">
                And many more cities throughout the Bay Area! Call to confirm service in your area.
              </p>
              
              <a
                href="tel:+14155551234"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block"
              >
                Check Service Availability
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free Service Estimate
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to get started? Contact us today for your free, no-obligation estimate.
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