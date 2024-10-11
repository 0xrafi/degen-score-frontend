"use client";

import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-[#f2f2f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        Differential Privacy: We add small, random noise to each part of the
        score before combining them. This noise makes it hard to figure out
        exact user data from the final score, protecting individual privacy
        while still allowing useful score calculations.
        Ethereum Storage Proofs: Not done yet
      </main>
      <Footer />
    </div>
  );
}
