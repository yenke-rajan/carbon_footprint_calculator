import React from 'react';
import UserDetails from './UserDetails';

interface LeaderboardProps {
    name: string;
    score: number;
    rank: number;
    profilePicUrl: string;
  }

const Leaderboard: React.FC<LeaderboardProps> = ({ name, score, rank, profilePicUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105">
      <UserDetails name={name} score={score} profilePicUrl={profilePicUrl} />
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Rank: {rank}</div>
      </div>
    </div>
  )
};

export default Leaderboard;
