import React from "react";
import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Choose Your Plan
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Predict Like a Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get access to expert football predictions and analysis
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan Card */}
          <Card className="relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <CardHeader className="pb-8 pt-6">
              <CardTitle className="text-2xl font-bold text-center">
                Free Plan
              </CardTitle>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Basic match predictions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to public prediction forums</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Daily tips (2 matches/day)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Basic statistics</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-800 transition-colors text-white">
                Start Free
              </Button>
            </CardContent>
          </Card>

          {/* VIP Plan Card */}
          <Card className="relative overflow-hidden border-2 border-blue-500 transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                RECOMMENDED
              </div>
            </div>
            <CardHeader className="pb-8 pt-6">
              <CardTitle className="text-2xl font-bold text-center">
                VIP Plan
              </CardTitle>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">$29.99</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>All Free Plan features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Premium match predictions (10+ daily)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>In-depth match analysis with statistics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Advanced statistics and trends</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>24/7 Expert consultation via chat</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Early access to predictions</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white">
                Get VIP Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
