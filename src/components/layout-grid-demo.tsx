"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function LayoutGridDemo() {
  return (
    <div className="py-12 md:py-16 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const WaterHeaterWork = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Water Heater Installation
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Professional water heater installation and replacement services. We work with all major brands and ensure energy-efficient solutions for your home.
      </p>
    </div>
  );
};

const KitchenPlumbing = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Bathroom Plumbing
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Complete bathroom plumbing services including toilet installation, repairs, and upgrades. We handle all your bathroom plumbing needs with expert care.
      </p>
    </div>
  );
};

const ProfessionalService = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Licensed Professional Team
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our experienced and licensed plumbers deliver reliable service with fair pricing and transparent communication throughout the Bay Area.
      </p>
    </div>
  );
};

const QualityWorkmanship = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Water Filtration & Softening
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-quality water filtration and softening system installation and maintenance. Improve your water quality and extend the life of your plumbing fixtures.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <WaterHeaterWork />,
    className: "md:col-span-2",
    thumbnail: "/layout-grid/waterheater23.jpg",
  },
  {
    id: 2,
    content: <KitchenPlumbing />,
    className: "col-span-1",
    thumbnail: "/layout-grid/toilet.jpg",
  },
  {
    id: 3,
    content: <ProfessionalService />,
    className: "col-span-1",
    thumbnail: "/layout-grid/plumbing.jpg",
  },
  {
    id: 4,
    content: <QualityWorkmanship />,
    className: "md:col-span-2",
    thumbnail: "/layout-grid/waterfiltersoftener.jpg",
  },
];