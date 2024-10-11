export default function DegenScore() {
  return (
    <div className="bg-[#333333] rounded-lg shadow-lg p-6 col-span-1 md:col-span-2 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold font-mono mb-4">Your Degen Score</h2>
      <div className="bg-[#4d4d4d] rounded-full w-48 h-48 flex items-center justify-center relative">
        <span className="text-6xl font-bold font-mono">9.7</span>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#999999] to-[#b3b3b3] rounded-full opacity-50 animate-pulse" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-3xl font-bold font-mono mb-2">
          Degen Level: Extreme
        </h3>
        <p className="text-sm text-[#b3b3b3] font-mono">
          You&apos;re a true degenerate... impressive.
        </p>
      </div>
    </div>
  );
}
