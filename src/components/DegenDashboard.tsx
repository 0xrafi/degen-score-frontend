import Header from "./Header";
import Leaderboard from "./Leaderboard";
import CalculateScore from "./CalculateScore";
import AddressCalculator from "./AddressCalculator";
import Footer from "./Footer";
import DegenScore from "./DegenScore";

export default function DegenDashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1a1a1a] text-[#f2f2f2] font-mono">
      <Header />
      <main className="flex-1 grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-8">
        <Leaderboard />
        <CalculateScore />
        <AddressCalculator />
        <DegenScore />
      </main>
      <Footer />
    </div>
  );
}
