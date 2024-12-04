import React from "react";
import { Trophy, Star, Users } from "lucide-react";

const Features = () => (
  <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Expert Analysis
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              AI-powered predictions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Historical data analysis
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Team performance tracking
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            VIP Benefits
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Premium predictions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Early access tips
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Expert consultations
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Community</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Discussion forums
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Live chat support
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Weekly webinars
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
