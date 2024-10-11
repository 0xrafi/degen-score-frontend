import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-[#333333]">
    <div className="flex items-center gap-4">
      <Image
        src={"/images/lil-pirate.svg"}
        alt="Dashboard Icon"
        width={50}
        height={50}
        style={{ marginRight: "8px", verticalAlign: "middle" }}
      />
      <h1 className="text-2xl font-bold font-mono">degen score</h1>
    </div>
    <div className="flex items-center gap-4">
      <Link
        href="#"
        className="text-sm font-mono hover:underline"
        prefetch={false}
      >
        Leaderboard
      </Link>
      <Link
        href="#"
        className="text-sm font-mono hover:underline"
        prefetch={false}
      >
        Calculate
      </Link>
      <Button
        variant="outline"
        className="px-4 py-2 rounded-full text-sm font-mono bg-[#333333] text-[#f2f2f2] hover:bg-[#4d4d4d]"
      >
        Connect MetaMask
      </Button>
    </div>
  </header>
  );
}