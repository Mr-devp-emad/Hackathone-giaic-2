"use client"
import React, { useState } from "react";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white">
      {/* Top Bar */}
      <div className="container mx-auto flex justify-between items-center py-2 px-4 text-sm">
        {/* Left - Contact Info */}
        <div className="flex space-x-6">
          <a href="tel:225-555-0118" className="flex items-center space-x-3">
            <FiPhone />
            <span>(225) 555-0118</span>
          </a>
          <a
            href="mailto:michelle.rivera@example.com"
            className="flex items-center space-x-2"
          >
            <FiMail />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>

        {/* Center - Promo Text */}
        <div className="hidden md:block text-center">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>

        {/* Right - Social Media Links */}
        <div className="flex items-center space-x-3">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Bandage
          </Link>

          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-blue-900"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white md:static md:flex md:w-auto md:space-x-6 text-sm md:bg-transparent`}
          >
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 md:inline md:px-0"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 md:inline md:px-0"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 md:inline md:px-0"
            >
              About
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 md:inline md:px-0"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 md:inline md:px-0"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-700 md:inline md:px-0"
            >
              Pages
            </Link>
          </div>

          {/* Right - User Actions */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a
              href="/login"
              className="hover:text-blue-700 flex items-center space-x-1 text-slate-600"
            >
              <span>Login / Register</span>
            </a>
            <a href="/cart" className="hover:text-blue-700 text-slate-600">
              <span>🛒</span> <span>1</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



