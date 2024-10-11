"use client";

import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function WalletPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-[#f2f2f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Wallet</h1>
        Coming soon
      </main>
      <Footer />
    </div>
  );
}
