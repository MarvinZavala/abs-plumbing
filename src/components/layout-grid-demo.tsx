"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
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
        Kitchen & Bathroom Fixtures
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Expert installation and repair of kitchen sinks, faucets, and bathroom fixtures. Quality workmanship with attention to detail.
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
        Quality Workmanship Guaranteed
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Every job completed with precision and care. From emergency repairs to complete plumbing installations, we stand behind our work.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <WaterHeaterWork />,
    className: "md:col-span-2",
    thumbnail: "/waterheater.jpg",
  },
  {
    id: 2,
    content: <KitchenPlumbing />,
    className: "col-span-1",
    thumbnail: "/sink.jpg",
  },
  {
    id: 3,
    content: <ProfessionalService />,
    className: "col-span-1",
    thumbnail: "/worker.jpg",
  },
  {
    id: 4,
    content: <QualityWorkmanship />,
    className: "md:col-span-2",
    thumbnail: "/waterheater.jpg",
  },
];