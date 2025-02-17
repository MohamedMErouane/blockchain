import React, { useState, useEffect } from "react";
import styles from "../Styles/navbar.module.css";
import { useWallet } from "@suiet/wallet-kit";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { ConnectModal, useCurrentAccount, useWallets, useCurrentWallet, useSignAndExecuteTransaction } from "@mysten/dapp-kit";

declare global {
  interface Window {
    sui: any;
  }
}

interface NavbarProps {
  setWalletAddress: React.Dispatch<React.SetStateAction<string | null>>;
}

interface UserInfo {
  name: string;
  email: string;
  coins: number;
}

const Navbar: React.FC<NavbarProps> = ({ setWalletAddress }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const wallets = useWallets();
  const { currentWallet, connectionStatus } = useCurrentWallet();
  const currentAccount = useCurrentAccount();
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState<string>("");
  const [isSuiAvailable, setIsSuiAvailable] = useState<boolean>(false);
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const [digest, setDigest] = useState("");

  const user: UserInfo = {
    name: "PlayerOne",
    email: "playerone@example.com",
    coins: 120,
  };

  useEffect(() => {
    if (!currentWallet) {
      console.log("No wallet connected");
    } else {
      console.log("Current Wallet:", currentWallet);
    }
  }, [currentWallet]);

  // Function to handle payment
  const handlePayment = async () => {
    if (!currentAccount) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      // Create a new transaction block
      const txb = new TransactionBlock();

      // Set the sender address
      txb.setSender(currentAccount.address);

      // Define the special amount (must match the contract's SPECIAL_AMOUNT)
      const SPECIAL_AMOUNT = 1000;

      // Split coins to get the exact payment amount
      const [paymentCoin] = txb.splitCoins(txb.gas, [txb.pure(SPECIAL_AMOUNT)]);

      // Replace with your contract's package ID and module name
      const CONTRACT_PACKAGE_ID = "0xfdcdd6616884e113454b7cb398f96f8e0376bcf4ca9f2ae93bff8dee4a8cb21e";
      const MODULE_NAME = "payment";
      const FUNCTION_NAME = "pay_special_amount";

      // Call the `pay_special_amount` function in the smart contract
      txb.moveCall({
        target: `${CONTRACT_PACKAGE_ID}::${MODULE_NAME}::${FUNCTION_NAME}`,
        arguments: [paymentCoin],
      });

      // Serialize the TransactionBlock to a Base64 string
      const serializedTx = await txb.build({
        client: new SuiClient({ url: getFullnodeUrl("testnet") }),
      });
      const serializedTxBase64 = Buffer.from(serializedTx).toString("base64");

      // Sign and execute the transaction
      signAndExecuteTransaction(
        {
          transaction: serializedTxBase64, // Pass the Base64-encoded transaction
          chain: "sui:testnet",
        },
        {
          onSuccess: (result) => {
            console.log("Transaction Result:", result);
            setDigest(result.digest); // Set the transaction digest
            alert("Payment successful! Thank you for playing.");
          },
          onError: (error) => {
            console.error("Payment failed:", error);
            alert("Payment failed. Please try again.");
          },
        }
      );
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Arcade Game</div>
      <div className={styles.rightSection}>
        <div className={styles.coins}>
          <img src="/assests/coin.png" alt="Coins" className={styles.coinIcon} />
          <span className={styles.coinCount}>{user.coins}</span>
        </div>
        <div className={styles.profile}>
          <img
            src="/assests/profile.png"
            alt="Profile"
            className={styles.profileImage}
            onClick={() => setShowUserInfo(!showUserInfo)}
          />
          {showUserInfo && (
            <div className={styles.userInfo}>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Coins:</strong> {user.coins}
              </p>
            </div>
          )}
        </div>

        <button onClick={handlePayment} className={styles.paymentButton}>
          Pay Entry Fee
        </button>
      </div>

      <ConnectModal
        trigger={
          <button onClick={() => setOpen(true)} disabled={!!currentWallet}>
            {currentWallet ? "Connected" : "Connect"}
          </button>
        }
        open={open}
        onOpenChange={(isOpen) => setOpen(isOpen)}
      />
    </div>
  );
};

export default Navbar;