"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-4">
        <Link href="/" className="text-gray-600 hover:underline">Home</Link> /
        <span className="text-gray-400"> Shop</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Image Gallery */}
        <div>
          <div className="relative w-full h-96">
            <Image
              src="/assets/prodDetail.jpg" // Replace with your image path
              alt="Floating Phone"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/prodDetail.jpg" // Replace with your image path
                alt="Thumbnail 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/sgProduct.jpg" // Replace with your image path
                alt="Thumbnail 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Floating Phone</h1>

          {/* Ratings */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              {'★'.repeat(4)}
              {'☆'.repeat(1)}
            </div>
            <span className="text-gray-600 text-sm ml-2">10 Reviews</span>
          </div>

          {/* Price and Stock Info */}
          <p className="text-2xl font-semibold text-gray-800 mb-2">$1,139.33</p>
          <p className="text-green-600 mb-4">Availability: <span className="font-semibold">In Stock</span></p>

          {/* Product Description */}
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT officia consequat door enim relit mollie.
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-2 mb-4">
            {['blue', 'green', 'black', 'red', 'yellow'].map((color) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full bg-${color}-500 border border-gray-200`}
              ></div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Select Options
            </button>
            <button className="text-gray-600 hover:text-gray-800">❤</button>
            <button className="text-gray-600 hover:text-gray-800">🔍</button>
          </div>
        </div>
      </div>
    </div>
  );
}
