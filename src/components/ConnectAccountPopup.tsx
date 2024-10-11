import React from 'react';
import { Button } from "@/components/ui/button";
import Popup from "./layout/Popup";
import { useAztecAccount } from '@/contexts/AztecAccountContext';

interface ConnectAccountPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectAccountPopup: React.FC<ConnectAccountPopupProps> = ({ isOpen, onClose }) => {
  const { isConnected, connect } = useAztecAccount();

  const handleConnectMetaMask = () => {
    connect();
    onClose();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold font-mono mb-4">
        Create an Aztec Account
      </h2>
      <p className="mb-4">
        While connecting your MetaMask wallet is not required, doing so
        enables you to sign a message to generate a unique and consistent
        Schnorr account tied to your signed message.
      </p>
      <p className="mb-4">
        Connecting your wallet provides additional benefits and security.
        Click the button below to connect your MetaMask wallet.
      </p>
      <Button
        onClick={handleConnectMetaMask}
        disabled={isConnected}
        className="w-full bg-[#4d4d4d] hover:bg-[#666666] text-[#f2f2f2] font-bold font-mono py-2 px-4 rounded-md"
      >
        {isConnected ? 'Connected' : 'Connect MetaMask'}
      </Button>
    </Popup>
  );
};

export default ConnectAccountPopup;
