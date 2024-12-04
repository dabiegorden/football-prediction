"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-2 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="font-semibold text-left">{question}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 py-4 px-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How accurate are the predictions?",
      answer:
        "Our predictions are based on comprehensive analysis of team statistics, historical data, and current form. VIP predictions have historically shown 75%+ accuracy rate.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade to VIP or downgrade to Free at any time. If you upgrade, you'll only pay the difference for the remainder of your billing period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our VIP service. No questions asked!",
    },
    {
      question: "How do I access VIP predictions?",
      answer:
        "Once you subscribe to the VIP plan, you'll get immediate access to all premium features through your dashboard. You'll also receive email notifications for new predictions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our prediction service
          </p>
        </div>

        <div className="space-y-2 rounded-lg border border-gray-200 p-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
