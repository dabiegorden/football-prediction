"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // TODO: Implement actual login logic
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      // Placeholder for authentication logic
      console.log("Login attempt", { email, password });
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <main>
      <Header />
      <section className="py-12">
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
          <Card className="w-full max-w-md p-6 shadow-2xl bg-white border-2 border-blue-200 rounded-xl">
            <CardHeader className="bg-blue-600 text-white py-4 rounded-t-xl mb-4">
              <CardTitle className="text-center text-2xl font-bold">
                Football Prediction Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-blue-800">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full border-blue-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-blue-800"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full border-blue-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-gray-50"
                >
                  Login
                </Button>
                <div className="text-center mt-4">
                  <Link
                    href="/signup"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                  >
                    Don't have an account? Sign Up
                  </Link>
                </div>
                <div className="text-center mt-4">
                  <Link
                    href="/auth/admin"
                    className="text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                  >
                    Admin Login
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
