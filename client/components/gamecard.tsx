import React from "react";

interface GameCardProps {
  name: string;
  image: string;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({ name, image, description }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg object-cover w-full h-48"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-yellow-500">{name}</h2>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;
