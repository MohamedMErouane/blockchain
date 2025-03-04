import React, { useState } from "react";

const SimpleGame = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", textAlign: "center" }}>
      <h1>Simple Game</h1>
      <p>Click the button to score!</p>
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Click Me!
      </button>
      <p>Score: {score}</p>
    </div>
  );
};

export default SimpleGame;