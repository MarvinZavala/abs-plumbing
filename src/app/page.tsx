import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ServiceCard from '@/components/service-card';
import TestimonialCard from '@/components/testimonial-card';
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo';
import LayoutGridDemo from '@/components/layout-grid-demo';
import { 
  Wrench, 
  Droplets, 
  Flame, 
  Settings, 
  Star,
  Award,
  Clock,
  Shield,
  CheckCircle,
  Heart
} from 'lucide-react';

export default function Home() {
  const mainServices = [
    {
      title: "Emergency Plumbing",
      description: "24/7 emergency service for burst pipes, water heater failures, and urgent repairs",
      icon: Wrench,
      href: "/services",
      features: ["Available 24/7", "Fast response time", "Same day service"]
    },
    {
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types",
      icon: Flame,
      href: "/services",
      features: ["All brands serviced", "Energy efficient options", "Same day installation"]
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning and clog removal for all types of blockages",
      icon: Droplets,
      href: "/services",
      features: ["Advanced equipment", "Root removal", "Video inspection"]
    },
    {
      title: "General Plumbing",
      description: "Complete plumbing services including installation, repair, and maintenance",
      icon: Settings,
      href: "/services",
      features: ["Licensed professionals", "Quality workmanship", "Fair pricing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      review: "Abraham came out same day for our water heater emergency. Professional, fair pricing, and excellent work. Highly recommend!",
      date: "2 weeks ago",
      location: "San Francisco, CA"
    },
    {
      name: "Mike R.",
      rating: 5,
      review: "Best plumber in the Bay Area! Fixed our kitchen sink issue quickly and explained everything clearly. Will definitely use again.",
      date: "1 month ago",
      location: "Oakland, CA"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      review: "Honest, reliable, and reasonably priced. AB&apos;s Plumbing treated our home with respect and did quality work.",
      date: "3 weeks ago",
      location: "San Jose, CA"
    }
  ];

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

        {/* Trust Indicators Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why San Francisco Bay Area Trusts AB&apos;s Plumbing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Over 500 satisfied customers and counting. We&apos;re committed to fair pricing, quality work, and exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700">5-Star Yelp Reviews</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600 mb-2">Licensed</div>
                <div className="text-gray-700">& Fully Insured</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Service</div>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600 mb-2">Family</div>
                <div className="text-gray-700">Owned & Operated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Plumbing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From emergency repairs to new installations, we handle all your plumbing needs with professionalism and care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-blue-50 water-pattern">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose AB&apos;s Plumbing?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Fair & Transparent Pricing</h4>
                      <p className="text-gray-600">No hidden fees or surprise charges. We provide upfront estimates and stick to our word.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Always Punctual</h4>
                      <p className="text-gray-600">We respect your time and always arrive when scheduled. Your schedule is important to us.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clean & Professional</h4>
                      <p className="text-gray-600">We treat your home with the same respect we&apos;d want for our own. Clean work area guaranteed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quality Workmanship</h4>
                      <p className="text-gray-600">Every job is done right the first time, backed by our commitment to excellence.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-600 text-white rounded-lg">
                  <h4 className="font-bold text-lg mb-2">New Customer Special!</h4>
                  <p className="mb-3">Save 10% on any service when you choose AB&apos;s Plumbing</p>
                  <a
                    href="tel:+14155551234"
                    className="inline-flex items-center bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Call to Claim Your Discount
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• San Francisco</div>
                    <div>• Oakland</div>
                    <div>• San Jose</div>
                    <div>• Berkeley</div>
                    <div>• Fremont</div>
                    <div>• Hayward</div>
                    <div>• Daly City</div>
                    <div>• Richmond</div>
                    <div>• Santa Clara</div>
                    <div>• Alameda</div>
                    <div>• Vallejo</div>
                    <div>• And more...</div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Services</h3>
                  <p className="text-gray-600 mb-4">
                    Plumbing emergencies don&apos;t wait for business hours. Neither do we.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Burst pipe repair</li>
                    <li>• Water heater failures</li>
                    <li>• Severe drain clogs</li>
                    <li>• Gas line emergencies</li>
                    <li>• Sewer backups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Recent Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See the quality of our plumbing installations and repairs. Every project completed with precision and care.
              </p>
            </div>
            <LayoutGridDemo />
          </div>
        </section>

        {/* Owner's Message Section */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  AG
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Message from Abraham G., Owner
              </h2>
              
              <div className="text-lg leading-relaxed text-gray-300 mb-8">
                <p className="mb-4">
                  &quot;I started AB&apos;s Plumbing Services because I was tired of seeing customers being overcharged 
                  and underserved by large plumbing companies. Every day, I work to provide the kind of honest, 
                  fair service that I would want for my own family.&quot;
                </p>
                <p className="mb-4">
                  &quot;Whether it&apos;s a small repair or a major installation, we treat every job with the same care 
                  and attention to detail. Our community deserves better than overpriced, rushed service – 
                  and that&apos;s exactly what we deliver.&quot;
                </p>
                <p>
                  &quot;Thank you for trusting AB&apos;s Plumbing with your home. We don&apos;t take that trust lightly.&quot;
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-blue-300">
                <Heart className="w-5 h-5" />
                <span className="italic">Serving our community with pride since day one</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it. Here&apos;s what real customers have to say about our service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  rating={testimonial.rating}
                  review={testimonial.review}
                  date={testimonial.date}
                  location={testimonial.location}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a
                href="https://www.yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Read All 500+ Reviews on Yelp
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
