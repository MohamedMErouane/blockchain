import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";

const CONTRACT_ADDRESS = "83JG2CVUwn2v4sfkbKEvwrBiSyACLjagDkqhjQJ4iXfH";
const ENTRY_FEE = 1000000;
const client = new SuiClient({ url: "https://fullnode.testnet.sui.io:443" });

export const initiatePayment = async (playerAddress: string, amount: number) => {
  try {
    const tx = new TransactionBlock();
    tx.moveCall({
      target: `${CONTRACT_ADDRESS}::game::handle_transaction`,
      arguments: [tx.pure(playerAddress), tx.pure(amount)], // Ensure this matches your contract
    });

    // Return the transaction block to be signed in the frontend
    return tx;
  } catch (error) {
    console.error("Transaction failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};