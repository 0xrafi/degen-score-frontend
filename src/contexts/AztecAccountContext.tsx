"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Address } from 'viem';

interface AztecAccountContextType {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  evmAccount: Address | null;
  setEvmAccount: (account: Address | null) => void;
}

const AztecAccountContext = createContext<AztecAccountContextType | undefined>(undefined);

export const AztecAccountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [evmAccount, setEvmAccount] = useState<Address | null>(null);

  const connect = () => {
    setIsConnected(true);
  };

  const disconnect = () => {
    setIsConnected(false);
    setEvmAccount(null);
  };

  return (
    <AztecAccountContext.Provider value={{ isConnected, connect, disconnect, evmAccount, setEvmAccount }}>
      {children}
    </AztecAccountContext.Provider>
  );
};

export const useAztecAccount = () => {
  const context = useContext(AztecAccountContext);
  if (context === undefined) {
    throw new Error('useAztecAccount must be used within an AztecAccountProvider');
  }
  return context;
};
