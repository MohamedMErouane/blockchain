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

            {/* Header Section */}
            <header className="text-center py-8">
              <h1 className="text-4xl font-extrabold text-pink-500">Arcade 3D Model</h1>
              <p className="mt-2 text-gray-400">Explore the 3D arcade experience!</p>
            </header>

            {/* 3D Model Component (Fixed Size and Centered) */}
            <div className="w-full flex justify-center items-center">
              <ThreeScene />
            </div>
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default Home;
