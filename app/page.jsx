import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PricingPlans from "@/components/PricingPlans";
import RecentPredictions from "@/components/RecentPredictions";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import React from "react";

const Home = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <Hero />
      <Features />
      <PricingPlans />
      <RecentPredictions />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Home;
