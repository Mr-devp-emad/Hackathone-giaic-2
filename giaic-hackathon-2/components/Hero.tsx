"use client";

import "./hero.css";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative text-white bg-gray-800" id="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            NEW COLLECTION
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6 max-w-[1200px] mx-auto">
          {/* Large Image (Left Column) */}
          <div className="col-span-6 relative group">
            <img
              src="/assets/editor1.png"
              alt="Men"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-green-500 opacity-20 group-hover:opacity-30 rounded-lg"></div>
            <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-1 rounded-md">
              MEN
            </button>
          </div>

          {/* Medium Image (Middle Column) */}
          <div className="col-span-3 relative group">
            <img
              src="/assets/editor2.png"
              alt="Women"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-500 opacity-20 group-hover:opacity-30 rounded-lg"></div>
            <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-1 rounded-md">
              WOMEN
            </button>
          </div>

          {/* Two Small Images (Right Column) */}
          <div className="col-span-3 grid grid-rows-2 gap-6">
            {/* Top Small Image */}
            <div className="relative group">
              <img
                src="/assets/editor3.png"
                alt="Accessories"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gray-700 opacity-20 group-hover:opacity-30 rounded-lg"></div>
              <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-1 rounded-md">
                ACCESSORIES
              </button>
            </div>

            {/* Bottom Small Image */}
            <div className="relative group">
              <img
                src="/assets/editor4.png"
                alt="Kids"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-yellow-500 opacity-20 group-hover:opacity-30 rounded-lg"></div>
              <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-1 rounded-md">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
