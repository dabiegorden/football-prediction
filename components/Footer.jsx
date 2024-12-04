import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-xl font-bold mb-4">PredictPro</h4>
          <p className="text-gray-400">
            Your trusted source for football predictions
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/predictions" className="hover:text-white">
                Predictions
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
            />
            <button className="w-full px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
        <p>&copy; 2024 PredictPro. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
