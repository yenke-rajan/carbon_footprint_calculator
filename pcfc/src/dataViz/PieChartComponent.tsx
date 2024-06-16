import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

// Interface for a single data point
interface DataPoint {
  name: string;
  pointValue: number;
}

// Interface for Pie Chart props
interface PieChartProps {
  lastFive: DataPoint[];
}

const PieChartComponent: React.FC<PieChartProps> = ({ lastFive }) => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    setData(lastFive);
  }, [lastFive]);

  const getChartData = (): { labels: string[]; datasets: { data: number[]; backgroundColor: string[] }[] } => {
    if (!data) {
      return { labels: [], datasets: [] }; // Return empty chart data if no data
    }

    const chartData = {
      labels: data.map((item) => item.name),
      datasets: [
        {
          data: data.map((item) => item.pointValue),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF5733",
            "#33FF57",
            "#3357FF",
            "#57FF33",
            "#C70039",
          ],
        },
      ],
    };

    return chartData;
  };

  return (
    <div className="p-12 mt-12 mr-12">
      {data?.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <>
          <h1 className="text-center">Data Distribution Pie Chart</h1>
          <Pie data={getChartData()} options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const total = context.dataset.data.reduce((acc, value) => acc + value, 0);
                    const percentage = ((context.raw / total) * 100).toFixed(2);
                    return `${context.label}: ${percentage}%`;
                  },
                },
              },
            },
          }} />
        </>
      )}
    </div>
  );
};

export default PieChartComponent;
