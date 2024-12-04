import React from "react";
import { Target } from "lucide-react";

// Recent Predictions Section
const RecentPredictions = () => {
  const predictions = [
    {
      match: "Arsenal vs Chelsea",
      league: "Premier League",
      accuracy: 92,
      status: "Won",
      odds: "1.85",
    },
    {
      match: "Real Madrid vs Barcelona",
      league: "La Liga",
      accuracy: 88,
      status: "Won",
      odds: "2.10",
    },
    {
      match: "Bayern vs Dortmund",
      league: "Bundesliga",
      accuracy: 85,
      status: "Pending",
      odds: "1.95",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Recent Predictions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Track record of our latest football predictions
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {predictions.map((pred, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-purple-600 font-semibold">
                  {pred.league}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    pred.status === "Won"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {pred.status}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{pred.match}</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Target className="w-4 h-4 text-purple-600 mr-2" />
                  <span>{pred.accuracy}% Accuracy</span>
                </div>
                <span className="text-gray-600">Odds: {pred.odds}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPredictions;
