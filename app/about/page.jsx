import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Target,
  Trophy,
  Users,
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const stats = [
    { value: "95%", label: "Accuracy Rate" },
    { value: "50K+", label: "Active Users" },
    { value: "3000+", label: "Verified Predictions" },
    { value: "24/7", label: "Support" },
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Precise Predictions",
      description:
        "Our advanced algorithm analyzes countless data points including team form, head-to-head statistics, player performance, and weather conditions to provide highly accurate predictions.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      title: "Proven Track Record",
      description:
        "With thousands of verified predictions and a success rate of over 95%, our system has consistently delivered reliable results to our growing community.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Growing Community",
      description:
        "Join thousands of satisfied users who trust our predictions daily. Share insights and celebrate wins with like-minded enthusiasts.",
    },
  ];

  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      features: [
        "3 Daily Predictions",
        "Basic Statistics",
        "Public Chat Access",
        "Email Support",
      ],
    },
    {
      name: "VIP Access",
      price: "$29.99/month",
      features: [
        "Unlimited Predictions",
        "Advanced Statistics",
        "Private VIP Chat",
        "Priority Support",
        "Money-Back Guarantee",
        "Expert Analysis",
      ],
    },
  ];

  return (
    <main>
      <Header />
      <section className="py-16">
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Betting Experience
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Leverage AI-powered predictions and expert analysis to make
                informed betting decisions
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Our Platform?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <CardContent>
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`p-6 ${
                      index === 1 ? "border-blue-500 border-2" : ""
                    }`}
                  >
                    <CardContent>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="text-3xl font-bold text-blue-600 mb-4">
                          {plan.price}
                        </div>
                        {index === 1 && (
                          <Badge className="bg-blue-100 text-blue-800">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <ul className="space-y-4">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full mt-6 ${
                          index === 1
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-600 hover:bg-gray-700"
                        }`}
                      >
                        {index === 0 ? "Get Started" : "Upgrade to VIP"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">
                Trusted by Bettors Worldwide
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6">
                  <CardContent>
                    <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      Secure & Reliable
                    </h3>
                    <p className="text-gray-600">
                      Your data and transactions are always protected
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent>
                    <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Expert Analysis</h3>
                    <p className="text-gray-600">
                      Predictions backed by professional analysts
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent>
                    <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      Consistent Results
                    </h3>
                    <p className="text-gray-600">
                      Track record of successful predictions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Betting Strategy?
              </h2>
              <p className="text-xl mb-8">
                Join thousands of successful bettors who trust our predictions
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Get Started Now
              </Button>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
