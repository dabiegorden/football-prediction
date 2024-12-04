"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            PredictPro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-purple-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-600">
              About
            </Link>
            <Link href="/predictions" className="hover:text-purple-600">
              Predictions
            </Link>
            <Link href="/pricing" className="hover:text-purple-600">
              Pricing
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block py-2 hover:text-purple-600">
              Home
            </Link>
            <Link
              href="/predictions"
              className="block py-2 hover:text-purple-600"
            >
              Predictions
            </Link>
            <Link href="/pricing" className="block py-2 hover:text-purple-600">
              Pricing
            </Link>
            <Link href="/about" className="block py-2 hover:text-purple-600">
              About
            </Link>
            <Link href="/login" className="block py-2 hover:text-purple-600">
              Login
            </Link>
            <Link href="/signup" className="block py-2 hover:text-purple-600">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
