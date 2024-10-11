"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AztecAccountContextType {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
}

const AztecAccountContext = createContext<AztecAccountContextType | undefined>(undefined);

export const AztecAccountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    // TODO: Implement actual connection logic
    setIsConnected(true);
  };

  const disconnect = () => {
    // TODO: Implement actual disconnection logic
    setIsConnected(false);
  };

  return (
    <AztecAccountContext.Provider value={{ isConnected, connect, disconnect }}>
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
