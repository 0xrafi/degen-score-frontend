import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ConnectAccountPopup from "../ConnectAccountPopup";
import { useAztecAccount } from '@/contexts/AztecAccountContext';
import Link from 'next/link';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isConnected } = useAztecAccount();

  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 border-b border-[#333333]">
        <div className="flex items-center gap-4">
          <Image
            src="/images/lil-pirate.svg"
            alt="lil pirate"
            width={50}
            height={50}
          />
          <Link href="/" className="text-2xl font-bold font-mono hover:text-[#b3b3b3] transition-colors">
            degen score
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setIsPopupOpen(true)}
            disabled={isConnected}
            className="px-4 py-2 rounded-full text-sm font-mono bg-[#333333] text-[#f2f2f2] hover:bg-[#4d4d4d]"
          >
            {isConnected ? 'Account Connected' : 'Create Account'}
          </Button>
        </div>
      </header>
      <ConnectAccountPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
