import React, { useState, useEffect } from "react";
import styles from "../Styles/navbar.module.css";
import { useWallet } from "@suiet/wallet-kit";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Transaction } from '@mysten/sui/transactions';
import { ConnectModal, useCurrentAccount, useWallets, useCurrentWallet ,useSignAndExecuteTransaction  } from "@mysten/dapp-kit";

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
  // const { connected, account, select, disconnect } = useWallet();
  const wallets = useWallets()
  const { currentWallet, connectionStatus } = useCurrentWallet();
  const currentAccount = useCurrentAccount();
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState<string>("");
  const [isSuiAvailable, setIsSuiAvailable] = useState<boolean>(false); // State for checking if Sui is available
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
	const [digest, setDigest] = useState('');

  const user: UserInfo = {
    name: "PlayerOne",
    email: "playerone@example.com",
    coins: 120,
  };
  useEffect(() => {
    if (!currentWallet) {
      console.log('No wallet connected');
    } else {
      console.log('Current Wallet:', currentWallet);
    }
  }, [currentWallet]);
  

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
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Coins:</strong> {user.coins}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            signAndExecuteTransaction(
              {
                transaction: new Transaction(),
                chain: 'sui:testnet',
              },
              {
                onSuccess: (result) => {
                  console.log('executed transaction', result);
                  setDigest(result.digest);
                  alert("Payement with succes thank you enjoy your game")
                },
              },
            );
          }}
          className={styles.paymentButton}
          
        >
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
function signAndExecuteTransactionBlock(arg0: { transactionBlock: TransactionBlock; requestType: string; }) {
  throw new Error("Function not implemented.");
}