import React from "react";
import { Calendar, Target, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Choose Your Plan",
      description:
        "Select between our free or VIP subscription plans based on your needs",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Get Predictions",
      description: "Access daily football predictions with detailed analysis",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Place Your Bets",
      description: "Use our insights to make informed betting decisions",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center mb-12">
          Simple steps to start winning with our predictions
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="bg-purple-100 p-6 rounded-full">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
