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

  // const localnetClient = new SuiClient({ url: "http://127.0.0.1:9000" });
  // const mainnetClient = new SuiClient({ url: "https://fullnode.mainnet.sui.io:443" });

  const CONTRACT_ADDRESS = " 83JG2CVUwn2v4sfkbKEvwrBiSyACLjagDkqhjQJ4iXfH";
  const ENTRY_FEE = 1000000;

  useEffect(() => {
    // Check if window.sui is available every 100ms (with a max wait time)
    const checkSuiAvailability = setInterval(() => {
      if (typeof window !== "undefined" && window.sui) {
        setIsSuiAvailable(true); // Set Sui availability to true
        clearInterval(checkSuiAvailability); // Stop checking
      }
    }, 100);

    // Set a maximum wait time of 5 seconds to stop checking
    const maxWaitTime = setTimeout(() => {
      if (!isSuiAvailable) {
        console.log(wallets)
        console.log(useCurrentWallet)
        console.error("Sui Wallet is not available. Please install the extension.");
        alert("Sui Wallet is not installed. Please install the Sui Wallet extension.");
      }
    }, 10000);

    return () => {
      clearInterval(checkSuiAvailability); // Clear the interval when the component unmounts
      clearTimeout(maxWaitTime); // Clear the timeout
    };
  }, [isSuiAvailable]);



  

  // useEffect(() => {
  //   if (isSuiAvailable) {
  //     // Once Sui is available, check for the connected network
  //     window.sui.getNetwork()
  //       .then((network: string) => {
  //         setNetwork(network);
  //         console.log("Network:", network);
  //       })
  //       .catch((error: any) => {
  //         console.error("Error getting network:", error);
  //         setNetwork("unknown");
  //       });
  //   }
  // }, [isSuiAvailable]);

  

  // const handlePayment = async () => {
  //   if (connectionStatus != 'connected') {
  //     alert("Please connect your wallet first!");
  //     return console.log(connectionStatus);
  //   }
  
  //   try {
  //     const tx = new TransactionBlock();
  //     tx.moveCall({
  //       target: `${CONTRACT_ADDRESS}::game::handle_transaction`,
  //       arguments: [tx.pure(ENTRY_FEE)],
  //     });
  
  //     // Assuming `useCurrentWallet` provides the correct signing function  
  //     const response = await signAndExecuteTransactionBlock({
  //       transactionBlock: tx,
  //       requestType: "WaitForEffectsCert",
  //     })as any;
  
  //     if (response?.effects?.status?.status === "success") {
  //       alert("Payment successful!");
  //     } else {
  //       alert("Transaction failed!");
  //     }
  //   } catch (error) {
  //     console.error("Payment failed:", error);
  //     alert("Payment error: " + error);
      
  //   }
  // };
  
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
