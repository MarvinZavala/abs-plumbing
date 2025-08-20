import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import EmergencyBanner from '@/components/emergency-banner';
import ContactForm from '@/components/contact-form';
import { MapPin, Clock, Star, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | San Francisco Bay Area | AB&apos;s Plumbing Services',
  description: 'AB&apos;s Plumbing serves the entire San Francisco Bay Area including SF, Oakland, San Jose, Berkeley, and surrounding cities. Check our service areas.',
};

export default function ServiceAreasPage() {
  const primaryAreas = [
    {
      city: "San Francisco",
      county: "San Francisco County",
      responseTime: "30-45 mins",
      population: "875,000+",
      highlights: ["Downtown", "Mission District", "Richmond", "Sunset"]
    },
    {
      city: "Oakland", 
      county: "Alameda County",
      responseTime: "30-45 mins",
      population: "430,000+",
      highlights: ["Lake Merritt", "Rockridge", "Temescal", "Fruitvale"]
    },
    {
      city: "San Jose",
      county: "Santa Clara County", 
      responseTime: "45-60 mins",
      population: "1,000,000+",
      highlights: ["Downtown", "Willow Glen", "Almaden", "Evergreen"]
    },
    {
      city: "Berkeley",
      county: "Alameda County",
      responseTime: "30-45 mins", 
      population: "120,000+",
      highlights: ["UC Berkeley", "North Berkeley", "South Berkeley", "West Berkeley"]
    }
  ];

  const allServiceAreas = [
    {
      county: "San Francisco County",
      cities: [
        "San Francisco", "Daly City", "South San Francisco", "Pacifica",
        "Brisbane", "Colma"
      ]
    },
    {
      county: "Alameda County", 
      cities: [
        "Oakland", "Berkeley", "Fremont", "Hayward", "Alameda", "San Leandro",
        "Union City", "Newark", "Albany", "Emeryville", "Piedmont", "Dublin",
        "Pleasanton", "Livermore"
      ]
    },
    {
      county: "Santa Clara County",
      cities: [
        "San Jose", "Sunnyvale", "Santa Clara", "Mountain View", "Palo Alto",
        "Milpitas", "Cupertino", "Campbell", "Los Gatos", "Saratoga",
        "Monte Sereno", "Los Altos", "Los Altos Hills"
      ]
    },
    {
      county: "San Mateo County",
      cities: [
        "Redwood City", "San Mateo", "Burlingame", "Foster City", "Belmont",
        "San Carlos", "Menlo Park", "Atherton", "Portola Valley", "Woodside",
        "Hillsborough", "Millbrae", "San Bruno"
      ]
    },
    {
      county: "Contra Costa County",
      cities: [
        "Richmond", "Concord", "Walnut Creek", "Fremont", "San Ramon",
        "Danville", "Martinez", "Hercules", "Pinole", "El Cerrito"
      ]
    },
    {
      county: "Solano County",
      cities: [
        "Vallejo", "Fairfield", "Vacaville", "Suisun City", "Benicia"
      ]
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
                Bay Area Service Areas
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Professional plumbing services throughout the entire San Francisco Bay Area with fast, reliable response times
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-blue-200 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm">Counties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Coverage</div>
                </div>
              </div>
              
              <a
                href="tel:+14155551234"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-block"
              >
                Call to Confirm Service: (415) 555-1234
              </a>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="section-padding">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Primary Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our main service areas with the fastest response times and most frequent service calls
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {primaryAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{area.city}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">County:</span>
                      <span className="font-medium text-gray-900">{area.county}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="font-medium text-green-600">{area.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Population:</span>
                      <span className="font-medium text-gray-900">{area.population}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Neighborhoods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((neighborhood, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm">
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href="tel:+14155551234"
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call for Service in {area.city}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Service Areas by County */}
        <section className="section-padding bg-gray-50">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Service Area Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly serve customers throughout the entire San Francisco Bay Area across six counties
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allServiceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{area.county}</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {area.cities.map((city, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-blue-600 text-white p-6 rounded-lg inline-block">
                <h3 className="text-xl font-bold mb-2">Don&apos;t See Your City?</h3>
                <p className="mb-4">We serve many more areas! Call us to check availability in your location.</p>
                <a
                  href="tel:+14155551234"
                  className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Check Service Availability
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Response Times & Coverage */}
        <section className="section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Response Times by Area
                </h2>
                <p className="text-xl text-gray-600">
                  Our average response times for different areas across the Bay Area
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-green-50 p-6 rounded-lg">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-bold text-2xl text-green-700 mb-2">30-45 mins</h3>
                  <p className="text-green-600 font-medium mb-2">Priority Areas</p>
                  <p className="text-sm text-gray-600">San Francisco, Oakland, Berkeley, Richmond</p>
                </div>
                
                <div className="text-center bg-yellow-50 p-6 rounded-lg">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                  <h3 className="font-bold text-2xl text-yellow-700 mb-2">45-60 mins</h3>
                  <p className="text-yellow-600 font-medium mb-2">Standard Areas</p>
                  <p className="text-sm text-gray-600">San Jose, Fremont, Hayward, Daly City</p>
                </div>
                
                <div className="text-center bg-blue-50 p-6 rounded-lg">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-bold text-2xl text-blue-700 mb-2">60-90 mins</h3>
                  <p className="text-blue-600 font-medium mb-2">Extended Areas</p>
                  <p className="text-sm text-gray-600">Outer Bay Area cities and counties</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
                <h3 className="font-bold text-lg text-red-800 mb-2">Emergency Services</h3>
                <p className="text-red-700">
                  For plumbing emergencies, we prioritize response time and aim to reach you as quickly as possible, 
                  often faster than our standard times listed above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Local Service */}
        <section className="section-padding bg-blue-900 text-white">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Local Bay Area Service?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                  <h3 className="font-bold text-xl mb-4">Local Knowledge</h3>
                  <p className="text-blue-200">
                    We know the Bay Area&apos;s unique plumbing challenges, from older San Francisco homes to newer Silicon Valley construction.
                  </p>
                </div>
                
                <div className="text-center">
                  <Clock className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                  <h3 className="font-bold text-xl mb-4">Faster Response</h3>
                  <p className="text-blue-200">
                    As a local company, we can respond faster than large national chains with distant dispatch centers.
                  </p>
                </div>
                
                <div className="text-center">
                  <Star className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                  <h3 className="font-bold text-xl mb-4">Community Focused</h3>
                  <p className="text-blue-200">
                    We&apos;re invested in our community. Our reputation depends on the neighbors we serve every day.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-blue-800 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Serve Your Area</h3>
                <p className="text-blue-200 mb-6">
                  No matter where you are in the Bay Area, AB&apos;s Plumbing is ready to provide professional, 
                  reliable plumbing service with the personal touch you deserve.
                </p>
                <a
                  href="tel:+14155551234"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-block"
                >
                  Call Now: (415) 555-1234
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Schedule Service in Your Area
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to schedule plumbing service? Let us know your location and we&apos;ll provide an accurate time estimate.
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