"use client";
import React, { useState, useEffect } from "react";
import styles from "../Styles/navbar.module.css";
import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";

interface UserInfo {
  name: string;
  email: string;
  coins: number;
}

const Navbar: React.FC = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const user: UserInfo = {
    name: "PlayerOne",
    email: "playerone@example.com",
    coins: 120,
  };

  // SUI Blockchain provider and contract setup
  const provider = new JsonRpcProvider("https://fullnode.devnet.sui.io:5001");
  const CONTRACT_ADDRESS = "7JYVx2HGhzihqbyM69gWHiv8yvxQgwm6W9prs3A2baLU";
  const ENTRY_FEE = 1000000;  // Adjust this to your actual entry fee (in the correct denomination)

  // Function to connect wallet
  const connectWallet = async () => {
    try {
      // Check for the wallet provider in the browser (e.g., SUI wallet extension)
      if (window.sui && window.sui.connect) {
        const address = await window.sui.connect();
        setWalletAddress(address);
        setIsConnected(true);
      } else {
        alert("Please install the SUI Wallet extension!");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  // Function to handle the payment
  const handlePayment = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      const playerAddress = walletAddress; // Use the connected wallet address

      // Create the transaction block
      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${CONTRACT_ADDRESS}::game::handle_transaction`,
        arguments: [
          tx.pure(playerAddress), // Player address
          tx.pure(ENTRY_FEE),      // Entry fee to play
        ],
      });

      // Send the transaction
      const response = await provider.sendTransactionBlock(tx, { /* options */ });

      if (response.status === "success") {
        alert("Payment successful!");
      } else {
        alert("Transaction failed!");
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className={styles.navbar}>
      {/* Left Section: Arcade Name */}
      <div className={styles.logo}>Arcade Game</div>

      {/* Right Section: Coins, Profile, and Wallet Connection */}
      <div className={styles.rightSection}>
        <div className={styles.coins}>
          <img
            src="/assests/coin.png"
            alt="Coins"
            className={styles.coinIcon}
          />
          <span className={styles.coinCount}>{user.coins}</span>
        </div>

        {/* Profile Section */}
        <div className={styles.profile}>
          <img
            src="/assests/profile.png"
            alt="Profile"
            className={styles.profileImage}
            onClick={() => setShowUserInfo(!showUserInfo)}
          />
          {showUserInfo && (
            <div className={styles.userInfo}>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Coins:</strong> {user.coins}</p>
            </div>
          )}
        </div>

        {/* Wallet Connection and Play Button */}
        <div className={styles.wallet}>
          {!isConnected ? (
            <button onClick={connectWallet}>Connect Wallet</button>
          ) : (
            <>
              <span>Connected: {walletAddress}</span>
              <button onClick={handlePayment}>Play Game</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
