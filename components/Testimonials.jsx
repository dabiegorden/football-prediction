import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Professional Bettor",
      content:
        "The VIP predictions have completely transformed my betting strategy. The accuracy is incredible!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Sports Enthusiast",
      content:
        "I started with the free plan and was so impressed that I upgraded to VIP within a week.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Regular User",
      content:
        "The community insights and expert analysis make this platform stand out from the rest.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Join thousands of satisfied members worldwide
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
