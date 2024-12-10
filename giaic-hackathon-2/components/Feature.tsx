"use client"

import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gray-50 py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center bg-[#23856D] text-white rounded-lg overflow-hidden">
        
          <div className="p-8 space-y-4">
            <h4 className="text-sm uppercase font-semibold tracking-wide">
              SUMMER 2020
            </h4>
            <h2 className="text-3xl font-bold">Vita Classic Product</h2>
            <p className="text-gray-200">
              We know how large objects will act. We know how objects will act.
              We know.
            </p>
            <div className="text-xl font-bold">$16.48</div>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100">
              ADD TO CART
            </button>
          </div>
          <div>
            <img
              src="/assets/slide2pic.png"
              alt="Vita Classic Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/assets/couple.png"
              alt="Happy Couple"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-sm uppercase font-semibold tracking-wide text-gray-500">
              SUMMER 2020
            </h4>
            <h2 className="text-3xl font-bold text-gray-800">
              Part of the Neural Universe
            </h2>
            <p className="text-gray-600">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="space-x-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                BUY NOW
              </button>
              <button className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg hover:bg-gray-100">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
