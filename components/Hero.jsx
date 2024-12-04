import Link from "next/link";
import React from "react";

const Hero = () => (
  <section className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="container mx-auto px-4 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Predict Like a Pro
      </h1>
      <p className="text-xl mb-8">
        Get accurate football predictions backed by data analytics
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link
          href="/signup"
          className="px-8 py-3 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-100"
        >
          Start Free Trial
        </Link>
        <Link
          href="/pricing"
          className="px-8 py-3 border-2 border-white rounded-md font-semibold hover:bg-white/10"
        >
          View Pricing
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
