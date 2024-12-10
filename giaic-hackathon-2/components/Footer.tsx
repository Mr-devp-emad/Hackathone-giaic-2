import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";


import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

<><FaFacebook className="text-blue-600 hover:text-blue-800" /><FaTwitter className="text-blue-400 hover:text-blue-600" /><FaInstagram className="text-pink-600 hover:text-pink-800" /></>


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo/Name and Social Media Links */}
        <div className="flex justify-between items-center mb-10">
          {/* Brand Name */}
          <div className="text-2xl font-bold text-gray-800">
            Bandage
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook"></i> {/* Facebook Icon */}
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>
          </div>
        </div>

        {/* Footer Content Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-600">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-600">User Analytic</a></li>
              <li><a href="#" className="hover:text-blue-600">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-600">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">iOS & Android</a></li>
              <li><a href="#" className="hover:text-blue-600">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-blue-600">Customers</a></li>
              <li><a href="#" className="hover:text-blue-600">API</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-2">Lorem imp sum dolor Amit</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
