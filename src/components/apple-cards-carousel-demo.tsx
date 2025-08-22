"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AppleCardsCarouselDemo() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ threshold: 0.1 });

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 
        ref={titleRef}
        className={`max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans transition-all duration-800 ${
          titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        Professional Plumbing Services You Can Trust
      </h2>
      <div 
        ref={carouselRef}
        className={`transition-all duration-1000 delay-300 ${
          carouselVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-12'
        }`}
      >
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Quality workmanship is at the heart of everything we do at AB&apos;s Plumbing.
              </span>{" "}
              From emergency repairs to complete installations, we bring professional 
              expertise and reliable service to every job. Our commitment to fair pricing 
              and transparent communication has earned the trust of over 500 satisfied 
              customers throughout the San Francisco Bay Area.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/abslogo.png"
              alt="AB&apos;s Plumbing logo"
              height="200"
              width="200"
              className="md:w-1/3 md:h-1/3 h-32 w-32 mx-auto object-contain mt-8"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Water Heater Services",
    title: "Expert water heater installation and repair",
    src: "/waterheater.jpg",
    content: <DummyContent />,
  },
  {
    category: "Kitchen & Bathroom",
    title: "Complete sink and fixture solutions",
    src: "/sink.jpg",
    content: <DummyContent />,
  },
  {
    category: "Professional Team",
    title: "Licensed, insured, and experienced plumbers",
    src: "/worker.jpg",
    content: <DummyContent />,
  },
  {
    category: "Emergency Service",
    title: "24/7 emergency plumbing response",
    src: "/sink.jpg",
    content: <DummyContent />,
  },
  {
    category: "Quality Guarantee",
    title: "Fair pricing with no hidden fees",
    src: "/waterheater.jpg",
    content: <DummyContent />,
  },
  {
    category: "Customer Satisfaction",
    title: "Over 500 five-star reviews in the Bay Area",
    src: "/worker.jpg",
    content: <DummyContent />,
  },
];