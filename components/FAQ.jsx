"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How accurate are your predictions?",
      answer:
        "Our VIP predictions maintain a 90%+ accuracy rate, backed by advanced AI algorithms and expert analysis.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all new VIP members.",
    },
    {
      question: "How do I access VIP predictions?",
      answer:
        "Once you subscribe to our VIP plan, you'll get immediate access to all premium predictions through your dashboard.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our VIP service.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Find quick answers to common questions
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
