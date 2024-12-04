"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
    // subscriptionType: "free",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // TODO: Implement actual signup logic
    try {
      // Placeholder for signup logic
      console.log("Signup attempt", formData);
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <main>
      <Header />
      <section className="py-12">
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
          <Card className="w-full max-w-md p-6 shadow-2xl bg-white border-2 border-green-200 rounded-xl">
            <CardHeader className="bg-blue-600 text-white py-4 rounded-t-xl mb-4">
              <CardTitle className="text-center text-2xl font-bold">
                Create Your Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-green-800"
                  >
                    Username
                  </label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    required
                    className="w-full border-green-300 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-green-800">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border-green-300 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-green-800"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="w-full border-green-300 focus:ring-2 focus:ring-green-500"
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-green-800"
                  >
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className="w-full border-green-300 focus:ring-2 focus:ring-green-500"
                  />
                </div> */}
                {/* <div>
                  <label
                    htmlFor="subscriptionType"
                    className="block mb-2 text-green-800"
                  >
                    Subscription Type
                  </label>
                  <select
                    id="subscriptionType"
                    name="subscriptionType"
                    value={formData.subscriptionType}
                    onChange={handleChange}
                    className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-500"
                  >
                    <option value="free">Free (3 Games Daily)</option>
                    <option value="vip">VIP (Unlimited Games)</option>
                  </select>
                </div> */}
                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-gray-50"
                >
                  Sign Up
                </Button>
                <div className="text-center mt-4">
                  <Link
                    href="/login"
                    className="text-green-700 hover:text-green-900 hover:underline transition-colors"
                  >
                    Already have an account? Login
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
