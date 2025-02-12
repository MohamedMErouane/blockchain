// services/blockchain.ts

import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";

// The contract address and the ABI for your game contract
const CONTRACT_ADDRESS = "7JYVx2HGhzihqbyM69gWHiv8yvxQgwm6W9prs3A2baLU";
const ENTRY_FEE = 1000000;  // Adjust this to your actual entry fee (in the correct denomination)

export const initiatePayment = async (playerAddress: string, amount: number) => {
  // Initialize the provider to interact with the SUI blockchain
  const provider = new JsonRpcProvider("https://fullnode.devnet.sui.io:5001");

  // Create the transaction block
  const tx = new TransactionBlock();

  // Ensure the arguments are properly passed as 'tx.pure'
  try {
    // Call the `handle_transaction` function in your smart contract
    tx.moveCall({
      target: `${CONTRACT_ADDRESS}::game::handle_transaction`,
      arguments: [
        tx.pure(playerAddress), // Player address
        tx.pure(amount),         // Amount to be paid
        tx.pure(ENTRY_FEE),      // Game entry fee
      ],
    });

    // Send the transaction
    const response = await provider.sendTransactionBlock(tx);

    return response;
  } catch (error) {
    console.error("Transaction failed:", error);
    return { success: false, error: error.message };
  }
};
