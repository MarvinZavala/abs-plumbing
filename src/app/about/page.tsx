import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { 
  Heart, 
  Shield, 
  Award, 
  Star, 
  Clock, 
  CheckCircle, 
  Users, 
  Home,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Abraham G. | AB&apos;s Plumbing Services',
  description: 'Learn about Abraham G. and AB&apos;s Plumbing Services. Family-owned plumbing business serving San Francisco Bay Area with fair pricing and quality work.',
};

export default function AboutPage() {
  const certifications = [
    "Licensed Plumbing Contractor",
    "Fully Insured & Bonded", 
    "Gas Line Certified",
    "Backflow Prevention Certified",
    "Green Plumbing Practices"
  ];

  const serviceAreas = [
    "San Francisco", "Oakland", "San Jose", "Berkeley",
    "Fremont", "Hayward", "Sunnyvale", "Santa Clara",
    "Daly City", "Richmond", "Alameda", "Vallejo",
    "Palo Alto", "Mountain View", "Redwood City", "San Mateo"
  ];

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
                              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About AB&apos;s Plumbing
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Family-owned and operated, serving the San Francisco Bay Area with honesty, integrity, and exceptional craftsmanship
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <Heart className="w-5 h-5" />
                <span>Serving our community since day one</span>
              </div>
            </div>
          </div>
        </section>

        {/* Abraham's Story */}
        <section className="section-padding">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto lg:mx-0">
                    AG
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Abraham G., Owner & Founder
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    &quot;I started AB&apos;s Plumbing Services because I was frustrated seeing how customers were being treated by large plumbing companies. Too many people were getting overcharged for subpar work, and I knew there had to be a better way.&quot;
                  </p>
                  
                  <p>
                    &quot;Growing up in the San Francisco Bay Area, I learned the value of hard work and treating people fairly. When I decided to start my own plumbing business, those values became the foundation of everything we do.&quot;
                  </p>
                  
                  <p>
                    &quot;Every customer we serve is a neighbor, and every job we complete is a reflection of our commitment to this community. Whether it&apos;s a small repair or a major installation, we approach every project with the same level of care and attention to detail.&quot;
                  </p>
                  
                  <p className="font-semibold text-blue-900">
                    &quot;Our success isn&apos;t measured just by our profits, but by the trust our customers place in us and the relationships we build along the way.&quot;
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide honest, reliable, and fairly-priced plumbing services to every customer while treating their home with the same respect we&apos;d want for our own.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Promise</h3>
                  <p className="text-gray-700">
                    Fair pricing with no hidden fees, punctual service, clean and respectful work, and quality results that last.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                  <p className="text-gray-700">
                    To continuously serve our Bay Area community with the highest standards of professionalism and craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-default">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from the smallest repair to the largest installation project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-600" />
                <h3 className="font-bold text-lg mb-3 text-gray-900">Honesty</h3>
                <p className="text-gray-600 text-sm">
                  We believe in transparent communication and fair pricing. No hidden fees, no surprises.
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-bold text-lg mb-3 text-gray-900">Quality</h3>
                <p className="text-gray-600 text-sm">
                  Every job is done right the first time with attention to detail and quality materials.
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-3 text-gray-900">Reliability</h3>
                <p className="text-gray-600 text-sm">
                  We show up on time, keep our promises, and are available when you need us most.
                </p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Home className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-bold text-lg mb-3 text-gray-900">Respect</h3>
                <p className="text-gray-600 text-sm">
                  We treat your home and family with the same respect we&apos;d want for our own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Insurance */}
        <section className="section-padding">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Licensed, Insured & Certified
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Your peace of mind is important to us. We maintain all required licenses and insurance 
                  to protect both our customers and our team members.
                </p>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-600 text-white rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-6 h-6" />
                    <span className="font-bold">License Information</span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    California Contractors License #ABC123456<br />
                    Fully insured with $2M liability coverage<br />
                    Workers compensation insurance included
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">500+ Five-Star Reviews</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our customers consistently rate us 5 stars for quality work, fair pricing, and professional service.
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Family Owned & Operated</h3>
                  </div>
                  <p className="text-gray-600">
                    As a family business, we understand the importance of trust, reliability, and treating every customer like family.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">24/7 Emergency Service</h3>
                  </div>
                  <p className="text-gray-600">
                    Plumbing emergencies don&apos;t wait for business hours. We&apos;re available around the clock for urgent repairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Coverage */}
        <section className="section-padding bg-blue-50">
          <div className="container-default">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proudly Serving the Entire Bay Area
              </h2>
              <p className="text-xl text-gray-600">
                From San Francisco to San Jose and everywhere in between
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                  <div className="text-sm font-medium text-gray-900">{area}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Don&apos;t see your city listed? We serve many more areas throughout the Bay Area.
              </p>
              <a
                href="tel:+14155551234"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block"
              >
                Call to Check Service Availability: (415) 555-1234
              </a>
            </div>
          </div>
        </section>

        {/* Team Approach */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-default">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Team Approach
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Professional Assessment</h3>
                  <p className="text-gray-300">
                    Every job starts with a thorough assessment and clear explanation of the work needed.
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Skilled Execution</h3>
                  <p className="text-gray-300">
                    Our experienced team uses the best materials and techniques for lasting results.
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Follow-Up Care</h3>
                  <p className="text-gray-300">
                    We stand behind our work and are always available for questions or concerns.
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-blue-200 mb-8">
                &quot;When you call AB&apos;s Plumbing, you&apos;re not just hiring a contractor – you&apos;re partnering with a local business that cares about your satisfaction and our community&apos;s reputation.&quot;
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-blue-300">
                <span className="italic">- Abraham G., Owner & Founder</span>
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
                  Ready to Experience the AB&apos;s Difference?
                </h2>
                <p className="text-xl text-gray-600">
                  Contact us today and discover why hundreds of Bay Area homeowners choose AB&apos;s Plumbing Services.
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