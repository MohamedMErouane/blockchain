"use client"
import React, { useState } from "react";
import styles from "../Styles/navbar.module.css";

interface UserInfo {
  name: string;
  email: string;
  coins: number;
}

const Navbar: React.FC = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const user: UserInfo = {
    name: "PlayerOne",
    email: "playerone@example.com",
    coins: 120,
  };

  return (
    <div className={styles.navbar}>
      {/* Left Section: Arcade Name */}
      <div className={styles.logo}>Arcade Game</div>

      {/* Right Section: Coins and Profile */}
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
      </div>
    </div>
  );
};

export default Navbar;
