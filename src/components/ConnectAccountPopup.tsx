import React, { useState, useCallback } from "react";
import { WalletClient } from "viem";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Popup from "./layouts/Popup";

import { useAztecAccount } from "@/contexts/AztecAccountContext";
import { connectMetaMask } from "@/hooks/useEVMAccount";

interface ConnectAccountPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSecretGenerated: (secret: string) => void;
}

const ConnectAccountPopup: React.FC<ConnectAccountPopupProps> = ({
  isOpen,
  onClose,
  onSecretGenerated,
}) => {
  const { isConnected, connect, setEvmAccount, evmAccount } = useAztecAccount();
  const [evmWalletClient, setEvmWalletClient] = useState<WalletClient | null>(
    null
  );
  const [isLoadingConnect, setIsLoadingConnect] = useState(false);
  const [isLoadingSignMessage, setIsLoadingSignMessage] = useState(false);
  const [messageToSign, setMessageToSign] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleConnectMetaMask = useCallback(async () => {
    setIsLoadingConnect(true);
    setError(null);
    try {
      const { walletClient, account } = await connectMetaMask();
      if (walletClient && account) {
        setEvmWalletClient(walletClient);
        setEvmAccount(account);
        connect();
      }
    } catch (e) {
      console.error("Error connecting EVM account", e);
      setError(
        "Error connecting to MetaMask. Please make sure it's installed and unlocked."
      );
    } finally {
      setIsLoadingConnect(false);
    }
  }, [connect, setEvmAccount]);

  const handleSignMessage = useCallback(async () => {
    if (!evmWalletClient || !evmAccount || !messageToSign.trim()) return;

    setIsLoadingSignMessage(true);
    setError(null);

    try {
      const signed = await evmWalletClient.signMessage({
        account: evmAccount,
        message: messageToSign,
      });

      onSecretGenerated(signed);
      onClose();
    } catch (e) {
      console.error("Error signing message", e);
      setError("Error signing message. Please try again.");
    } finally {
      setIsLoadingSignMessage(false);
    }
  }, [evmWalletClient, evmAccount, messageToSign, onSecretGenerated, onClose]);

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold font-mono mb-4">
        Create an Aztec Account
      </h2>
      {!isConnected ? (
        <>
          <p className="mb-4">
            While connecting your MetaMask wallet isn&apos;t required, doing so
            enables you to sign a message to generate a unique and consistent
            Schnorr account tied to your signed message.
          </p>
          <Button
            onClick={handleConnectMetaMask}
            disabled={isLoadingConnect}
            className="w-full bg-[#4d4d4d] hover:bg-[#666666] text-[#f2f2f2] font-bold font-mono py-2 px-4 rounded-md"
          >
            {isLoadingConnect ? "Connecting..." : "Connect MetaMask"}
          </Button>
        </>
      ) : (
        <>
          <p className="mb-4">
            Enter a message to sign. Signing different messages produces unique
            secrets for different accounts.
          </p>
          <Input
            onChange={(e) => setMessageToSign(e.target.value)}
            placeholder="Enter message to sign"
            type="text"
            value={messageToSign}
            className="mb-4"
          />
          <Button
            onClick={handleSignMessage}
            disabled={isLoadingSignMessage || !messageToSign.trim()}
            className="w-full bg-[#4d4d4d] hover:bg-[#666666] text-[#f2f2f2] font-bold font-mono py-2 px-4 rounded-md"
          >
            {isLoadingSignMessage ? "Signing..." : "Sign Message"}
          </Button>
        </>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </Popup>
  );
};

export default ConnectAccountPopup;
