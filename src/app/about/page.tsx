"use client";

import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-[#f2f2f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Degen Score</h1>
        <p className="mb-4">
          Degen Score is a fun and innovative way to measure your engagement with high-risk, high-engagement crypto activities.
        </p>
        <p>
          Our platform uses advanced algorithms and on-chain data to calculate your score, all while maintaining your privacy through the use of zero-knowledge proofs on the Aztec network.
        </p>
      </main>
      <Footer />
    </div>
  );
}
