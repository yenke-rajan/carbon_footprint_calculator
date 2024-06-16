import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

import BarChartComponent from "../dataViz/BarChartComponent";
import Ranking from "./leaderboard/RankingProfile";
import PieChartComponent from "../dataViz/PieChartComponent";
import Bar2 from "../dataViz/Bar2";
import Datainput from "../Datainput";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

interface ProfileProps {
  points: number;
  profilePicUrl: string;
  rankData: { label: string; value: number }[];
}

const Profile: React.FC<ProfileProps> = ({ points, profilePicUrl, rankData }) => {
  const [profilePic, setProfilePic] = useState<string | undefined>(undefined);
  const [pointsSchema, setPointsSchema] = useState<any>(null);
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode<{ name: string; userId: string }>(token) : { name: "", userId: "" };

  const fetchPointsSchema = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/points/everything/${decodedToken.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPointsSchema(response.data);
    } catch (error) {
      console.error("Error fetching points schema:", error);
      throw error;
    }
  };

  const fetchProfilePicture = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setProfilePic(response.data.results[0].picture.large);
    } catch (error) {
      console.error("Error fetching profile picture:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProfilePicture();
      await fetchPointsSchema();
    };
  
    fetchData();
  
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
  
    return () => clearInterval(interval);
  }, [pointsSchema]);
  
  

  const chartData = {
    labels: rankData.map((item) => item.label),
    datasets: [
      {
        label: "Your Rank",
        data: rankData.map((item) => item.value),
        backgroundColor: rankData.map((item) => (item.value >= 75 ? "green" : "red")),
      },
    ],
  };

  return (
    <div className="profile-container bg-green-100 rounded-lg shadow-md px-8 py-6 flex flex-col items-center">
      {profilePic && (
        <img
          className="rounded-full w-24 h-24 mb-4 object-cover"
          src="https://randomuser.me/api/portraits/men/12.jpg"
          alt="Profile Picture"
        />
      )}
      <h2 className="text-2xl font-bold text-gray-800">{decodedToken.name}</h2>
      <p className="text-gray-600">
        Points: {pointsSchema && pointsSchema.sum ? Math.round(pointsSchema.sum) : "0"}
      </p>

      <div className="flex justify-between w-full mt-4">
        <div>
          <div>
            <p>
              <b>Your Ranking:</b>
            </p>
          </div>
          {pointsSchema && pointsSchema.rankData && pointsSchema.rankData.length > 0 ? (
            pointsSchema.rankData.map((item: { label: string; value: number }) => (
              <p key={item.label} className="text-gray-700 font-medium">
                {item.label}: {item.value}
              </p>
            ))
          ) : (
            <p>5</p>
          )}

          <Datainput  />
          <div className="w-full mt-4">
            <div className="bg-green-200 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">History</h3>
              {pointsSchema && pointsSchema.latestFive ? (
                <div className="grid grid-cols-2 gap-2">
                  {pointsSchema.latestFive.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="font-bold mr-2">{item.name}:</span>
                      <span>{item.pointValue}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Loading...</p>
              )}
            </div>
          </div>

          <Ranking />
        </div>
        <PieChartComponent lastFive={pointsSchema && pointsSchema.allPoints} />
      </div>

      <div className="mt-4 w-full">
        <BarChartComponent />
      </div>

      <div className="mt-4 w-full">
        <Bar2 />
      </div>
    </div>
  );
};

export default Profile;
