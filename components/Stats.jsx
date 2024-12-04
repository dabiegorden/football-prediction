import React from "react";

const Stats = () => (
  <section className="py-16 bg-purple-600">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white mb-2">90%+</h3>
            <p className="text-white/80 text-sm uppercase tracking-wider">
              VIP Success Rate
            </p>
            <div className="mt-2 h-1 w-16 bg-white/50 mx-auto rounded"></div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white mb-2">50K+</h3>
            <p className="text-white/80 text-sm uppercase tracking-wider">
              Active Members
            </p>
            <div className="mt-2 h-1 w-16 bg-white/50 mx-auto rounded"></div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white mb-2">1000+</h3>
            <p className="text-white/80 text-sm uppercase tracking-wider">
              Daily Tips
            </p>
            <div className="mt-2 h-1 w-16 bg-white/50 mx-auto rounded"></div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-white mb-2">24/7</h3>
            <p className="text-white/80 text-sm uppercase tracking-wider">
              Expert Support
            </p>
            <div className="mt-2 h-1 w-16 bg-white/50 mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
