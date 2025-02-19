"use client";

import React, { useEffect, useState } from "react";
import "@mysten/dapp-kit/dist/index.css"; // Import styles for the wallet modal
import Navbar from "../../components/navbar";
import { createNetworkConfig, SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThreeScene from "../../components/model";

// Initialize React Query Client
const queryClient = new QueryClient();

// Set up network configuration
const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl("testnet") }, 
  mainnet: { url: getFullnodeUrl("mainnet") },
});

const Home: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Log the network configuration for debugging
  useEffect(() => {
    console.log("Network Config: ", networkConfig);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex flex-col items-center justify-center">
            {/* Navbar */}
            <Navbar setWalletAddress={setWalletAddress} />
            {/* 3D Model Component */}
            <div className="w-full flex justify-center items-center bg-gradient-to-br from-gray-800 to-black">
              <ThreeScene />
            </div>
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default Home;
