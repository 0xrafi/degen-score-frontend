"use client";

import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-[#f2f2f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <ol className="list-decimal list-inside space-y-4">
          <li>Connect your Ethereum wallet to our platform.</li>
          <li>We analyze your on-chain activity using privacy-preserving techniques.</li>
          <li>Your Degen Score is calculated based on various factors like trading frequency, DeFi engagement, and more.</li>
          <li>The score is computed on the Aztec network, ensuring your data remains private.</li>
          <li>View your score and compare it with others on our leaderboard!</li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}
