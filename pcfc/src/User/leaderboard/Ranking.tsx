import React, { useState, useEffect } from 'react';
import Leaderboard from './LeaderboardComponent';
import PieChart from '../../dataViz/PieChartComponent'; // Assuming you have a PieChart component
import axios from 'axios';

const Ranking: React.FC = () => {
  const leaderboard = [
    {
      "name": "Eve Brown",
      "score": 111,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/3.jpg",
      "rank": 1
    },
    {
      "name": "Alice Smith",
      "score": 167,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/1.jpg",
      "rank": 2
    },
    {
      "name": "George Martinez",
      "score": 200,
      "profilePicUrl": "https://randomuser.me/api/portraits/men/6.jpg",
      "rank": 3
    },
    {
      "name": "Michael Anderson",
      "score": 220,
      "profilePicUrl": "https://randomuser.me/api/portraits/men/10.jpg",
      "rank": 4
    },
    {
      "name": "Nirajan Khatiwada",
      "score": 400,
      "profilePicUrl": "https://randomuser.me/api/portraits/men/12.jpg",
      "rank": 5
    },
    {
      "name": "Patrick Lee",
      "score": 900,
      "profilePicUrl": "https://randomuser.me/api/portraits/men/12.jpg",
      "rank": 6
    },
    {
      "name": "Isaac Rodriguez",
      "score": 950,
      "profilePicUrl": "https://randomuser.me/api/portraits/men/8.jpg",
      "rank": 7
    },
    {
      "name": "Charlie Davis",
      "score": 1000,
      "profilePicUrl": "https://randomuser.me/api/portraits/men/4.jpg",
      "rank": 8
    },
    {
      "name": "Hannah Thompson",
      "score": 1025,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/7.jpg",
      "rank": 9
    },
    {
      "name": "Lily Garcia",
      "score": 1057,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/9.jpg",
      "rank": 10
    },
    {
      "name": "Sophia Hernandez",
      "score": 1112,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/13.jpg",
      "rank": 11
    },
    {
      "name": "Emily Wilson",
      "score": 1537,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/5.jpg",
      "rank": 12
    },
    {
      "name": "Olivia Martinez",
      "score": 1950,
      "profilePicUrl": "https://randomuser.me/api/portraits/women/11.jpg",
      "rank": 13
    }
  ];

  return (
    <div className='mx-auto px-4 py-8 bg-green-100'>
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="grid grid-cols-2 gap-4">
        {leaderboard.map((user, index) => (
          <Leaderboard
            key={index}
            name={user.name}
            score={user.score}
            rank={user.rank}
            profilePicUrl={user.profilePicUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Ranking;
