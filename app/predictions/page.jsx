import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Lock, Trophy, TrendingUp, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PredictionPage = ({ isVipUser = false }) => {
  // Sample prediction data - in real app, this would come from your API
  const freePredictions = [
    {
      id: 1,
      league: "Premier League",
      match: "Arsenal vs Manchester United",
      date: "2024-12-03",
      time: "20:45",
      prediction: "Home Win",
      confidence: 85,
      reason:
        "Arsenal has won their last 5 home games and Manchester United struggles in away matches against top 6 teams.",
      odds: 1.85,
    },
    {
      id: 2,
      league: "La Liga",
      match: "Barcelona vs Real Madrid",
      date: "2024-12-03",
      time: "21:00",
      prediction: "Over 2.5 Goals",
      confidence: 78,
      reason:
        "Last 5 El Clasico matches have seen an average of 3.4 goals per game.",
      odds: 1.95,
    },
    {
      id: 3,
      league: "Bundesliga",
      match: "Bayern Munich vs Dortmund",
      date: "2024-12-03",
      time: "19:30",
      prediction: "Both Teams to Score",
      confidence: 82,
      reason: "Both teams have scored in their last 7 head-to-head matches.",
      odds: 1.75,
    },
  ];

  const vipPredictions = [
    {
      id: 4,
      league: "Serie A",
      match: "Inter vs Juventus",
      date: "2024-12-03",
      time: "20:00",
      prediction: "Draw",
      confidence: 90,
      reason: "Both teams are in excellent form with strong defensive records.",
      odds: 3.2,
      isHighValue: true,
    },
    {
      id: 5,
      league: "Ligue 1",
      match: "PSG vs Marseille",
      date: "2024-12-03",
      time: "21:15",
      prediction: "Home Win & Over 2.5",
      confidence: 88,
      reason: "PSG's attacking prowess combined with their strong home record.",
      odds: 2.1,
    },
  ];

  const PredictionCard = ({ prediction, isVip }) => (
    <Card
      className={`${
        isVip ? "border-blue-500 shadow-lg" : ""
      } hover:shadow-xl transition-shadow`}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{prediction.league}</p>
            <CardTitle className="mt-2">{prediction.match}</CardTitle>
          </div>
          {prediction.isHighValue && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
              <Trophy size={14} />
              High Value
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">
                {prediction.date} {prediction.time}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Odds</p>
              <p className="font-medium">{prediction.odds}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm text-gray-500">Prediction</p>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {prediction.confidence}% confidence
              </span>
            </div>
            <p className="font-semibold text-lg">{prediction.prediction}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Reason</p>
            <p className="text-gray-600">{prediction.reason}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main>
      <Header />
      <section className="py-16">
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Today's Predictions
              </h1>
              <p className="text-xl text-gray-600">
                Expert football predictions with detailed analysis
              </p>
            </div>

            {/* Free Predictions Section */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Free Predictions
                </h2>
                <TrendingUp className="text-green-500" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freePredictions.map((prediction) => (
                  <PredictionCard
                    key={prediction.id}
                    prediction={prediction}
                    isVip={false}
                  />
                ))}
              </div>
            </div>

            {/* VIP Predictions Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  VIP Predictions
                </h2>
                <Crown className="text-yellow-500" />
              </div>

              {!isVipUser ? (
                <Card className="bg-gray-50 border-2 border-dashed border-gray-300 p-8">
                  <div className="text-center">
                    <Lock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      VIP Predictions Locked
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Unlock premium predictions with detailed analysis and
                      higher accuracy rates
                    </p>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      Upgrade to VIP
                    </Button>
                  </div>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vipPredictions.map((prediction) => (
                    <PredictionCard
                      key={prediction.id}
                      prediction={prediction}
                      isVip={true}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="mt-16 flex items-start gap-2 text-sm text-gray-500 bg-gray-100 p-4 rounded-lg">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p>
                Predictions are based on statistical analysis and historical
                data. Past performance does not guarantee future results. Please
                gamble responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PredictionPage;
