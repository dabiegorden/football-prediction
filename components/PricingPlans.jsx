import React from "react";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "3 predictions per day",
        "Basic match analysis",
        "Public chat access",
        "Email support",
      ],
    },
    {
      name: "VIP",
      price: "49",
      features: [
        "Unlimited predictions",
        "Advanced statistics",
        "Private consultation",
        "Premium tips",
        "24/7 Priority support",
        "Money-back guarantee",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Pricing Plans</h2>
        <p className="text-gray-600 text-center mb-12">
          Choose the perfect plan for your needs
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 ${
                plan.popular ? "border-2 border-purple-600" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-center mb-4">
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-purple-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
