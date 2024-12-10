"use client"

// components/BestsellerProducts.js
import React from 'react';

const products = [
  {
    id: 1,
    image: '/assets/product1.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product2.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product3.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product4.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product5.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product6.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product7.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  {
    id: 2,
    image: '/assets/product8.png',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    newPrice: '$6.48',
    colors: ['#2196F3', '#FF5722', '#4CAF50', '#FFC107'],
  },
  // Add more products here...
];

const Products = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            BESTSELLER PRODUCTS
          </p>
          <p className="text-gray-400 mt-1">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-239px h-427px object-cover"
              />

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.department}
                </p>

                <div className="flex items-center justify-between mt-4">
                  {/* Prices */}
                  <div>
                    <span className="line-through text-gray-400 text-sm">
                      {product.oldPrice}
                    </span>
                    <span className="text-green-900 font-bold ml-2">
                      {product.newPrice}
                    </span>
                  </div>
                </div>

                {/* Color Options */}
                <div className="flex space-x-2 mt-4">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
