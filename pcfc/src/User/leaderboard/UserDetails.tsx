import React from 'react';

interface UserDetailsProps {
  name: string;
  score: number;
  profilePicUrl: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, score, profilePicUrl }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <img className="h-10 w-10 rounded-full" src={profilePicUrl} alt={name} /> {/* Profile picture */}
        <div className="text-lg font-medium">{name}</div>
      </div>
      <div className="text-gray-500">Score: {score}</div>
    </div>
  );
};

export default UserDetails;