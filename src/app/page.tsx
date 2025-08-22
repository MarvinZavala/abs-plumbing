import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo';
import LayoutGridDemo from '@/components/layout-grid-demo';

export default function Home() {

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

      </main>
      
      <Footer />
    </>
  );
}
