"use client";

import React from "react";
import Navbar from "../../components/navbar"; 
import GameCard from "../../components/gamecard";

const games = [
  {
    id: 1,
    name: "Space Invaders",
    image: "/assests/space.jpeg",
    description: "Classic alien-shooting game!",
  },
  {
    id: 2,
    name: "Pac-Man",
    image: "/assests/pacman.jpeg",
    description: "Chase and eat dots in a maze.",
  },
  {
    id: 3,
    name: "Donkey Kong",
    image: "/assests/Donkey.png",
    description: "Save the princess from the ape!",
  },
  {
    id: 4,
    name: "Street Fighter",
    image: "/assests/Strret.jpeg",
    description: "Classic arcade fighting game.",
  },
  {
    id: 5,
    name: "Tetris",
    image: "/assests/tertis.jpeg",
    description: "Classic puzzle game.",
  },
  {
    id: 6,
    name: "Galaga",
    image: "/assests/galaga.jpeg",
    description: "Shoot aliens .",
  },
  {
    id: 7,
    name: "Mortal Kombat",
    image: "/assests/kombat.jpeg",
    description: "Fighting game with brutal moves.",
  },
  {
    id: 8,
    name: "Asteroids",
    image: "/assests/astreiods.jpeg",
    description: "Destroy asteroids .",
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-pink-500">Arcade Games</h1>
        <p className="mt-2 text-gray-400">Choose your game and have fun!</p>
      </header>

      {/* Horizontal Scroll for Game Cards */}
      <main className="px-4 py-8">
        <div className="overflow-hidden py-4">
          {/* Flex container for horizontal scroll animation */}
          <div className="flex gap-8 animate-scroll">
            {games.map((game) => (
              <div key={game.id} className="flex-none w-60">
                <GameCard
                  name={game.name}
                  image={game.image}
                  description={game.description}
                />
              </div>
            ))}
            {/* Duplicate the cards to create an endless scrolling effect */}
            {games.map((game) => (
              <div key={`duplicate-${game.id}`} className="flex-none w-60">
                <GameCard
                  name={game.name}
                  image={game.image}
                  description={game.description}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
