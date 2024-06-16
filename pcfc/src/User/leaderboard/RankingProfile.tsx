import React from 'react';
import Leaderboard from './LeaderboardComponent';
import { Link } from 'react-router-dom';
import RankingPage from './Ranking';
import { Button } from '@headlessui/react';

const dummyRanks = [
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
];

const Ranking: React.FC = () => {
  // Sort dummyRanks in descending order by score
  const sortedRanks = [...dummyRanks].sort((a, b) => a.score - b.score);

  // Take the top 3 elements (slice from 0 to 3)
  const topThreeRanks = sortedRanks.slice(0, 3);

  return (
    <div className='container mx-auto px-4 py-8 bg-green-100 flex flex-wrap justify-center'>
      <h2 className="text-2xl font-bold mb-4 text-center">Leaderboard (Top 3)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topThreeRanks.map((user, index) => (
          <Leaderboard
            key={index}
            name={user.name}
            score={user.score}
            rank={index + 1}
            profilePicUrl={user.profilePicUrl}
          />
        ))}
        <Button as={Link} to="/ranking" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-40">See Leaderboard</Button>
      </div>
    </div>
  );
};

export default Ranking;
