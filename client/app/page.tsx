"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import styles from "../Styles/page.module.css";
import { signIn } from "next-auth/react";
import googleLogo from "../public/assests/google.png"; // Ensure the correct path

const Home: React.FC = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleGoogleSignup = () => {
    // Redirect the user to the backend's Google OAuth URL
    window.location.href = 'http://localhost:3001/auth/google'; 
  };
  
  
  
  
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      // Adjusted to include credentials correctly
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        credentials: 'include',  // Keep this for session-based auth (if required)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        localStorage.setItem("access_token", data.access_token);
        window.location.href = "/Home"; // Redirect on successful login
      } else {
        const audio = new Audio("./gameover.mp3");
        audio.play();
        setIsPasswordCorrect(false);
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  
  

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const getMaskedPassword = (password: string) => {
    return password.split("").map((_, index) => {
      return index % 2 === 0 ? "X" : "O";
    }).join("");
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/assests/bg.jpg')",
      }}
    >
      <div className={`${styles.formContainer} ${styles.animateGlow}`}>
        <h1 className={`${styles.fontArcade} ${styles.textNeonPink} text-3xl text-center mb-8 tracking-wide`}>
          Arcade Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className={`${styles.formLabel}`} htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`${styles.formInput}`}
            />
          </div>

          <div className="mb-6">
            <label className={`${styles.formLabel}`} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              className={`${styles.formInput}`}
            />
            {password && (
              <div className="mt-2 text-sm text-gray-500">
                {getMaskedPassword(password)}
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <button
              onClick={handleGoogleSignup}
              className="bg-white px-4 py-2 rounded text-black flex items-center justify-center hover:bg-gray-100 w-full max-w-[500px]"
            >
              <Image src={googleLogo} alt="Google Logo" width={24} height={24} className="mr-2" />
              Sign in with Google
            </button>
          </div>

          <div className="my-4"></div>

          {!isPasswordCorrect && (
            <div className="text-red-500 text-center mt-4">Game Over! Try again.</div>
          )}

          <button type="submit" className={`${styles.formButton}`}>
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/Signup" className="text-blue-500 hover:underline">Don't have an account? Sign up here</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
