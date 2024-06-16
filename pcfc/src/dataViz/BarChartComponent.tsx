import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

// Interfaces for data types
interface MonthlyEmissions {
  [month: string]: { [transportationType: string]: number };
}

interface YearData {
  year: number;
  months: MonthlyEmissions;
}

interface ChartDataType {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string[] }[];
  yearData: YearData;
}

const data: YearData[] = [
  {
    year: 2022,
    months: {
      January: { "Air Travel": 20, "Road Travel": 40, "Public Transport": 40 },
      February: { "Air Travel": 20, "Road Travel": 30, "Public Transport": 30 },
      March: { "Air Travel": 10, "Road Travel": 20, "Public Transport": 60 },
      April: { "Air Travel": 5, "Road Travel": 15, "Public Transport": 50 },
      May: { "Air Travel": 15, "Road Travel": 25, "Public Transport": 20 },
      June: { "Air Travel": 10, "Road Travel": 20, "Public Transport": 20 },
      July: { "Air Travel": 5, "Road Travel": 15, "Public Transport": 20 },
      August: { "Air Travel": 10, "Road Travel": 15, "Public Transport": 5 },
      September: { "Air Travel": 5, "Road Travel": 10, "Public Transport": 5 },
      October: { "Air Travel": 2, "Road Travel": 8, "Public Transport": 0 },
      November: { "Air Travel": 1, "Road Travel": 4, "Public Transport": 0 },
      December: { "Air Travel": 0, "Road Travel": 0, "Public Transport": 0 },
    },
  },
  {
    year: 2023,
    months: {
      January: { "Air Travel": 30, "Road Travel": 40, "Public Transport": 40 },
      February: { "Air Travel": 30, "Road Travel": 30, "Public Transport": 25 },
      March: { "Air Travel": 20, "Road Travel": 30, "Public Transport": 45 },
      April: { "Air Travel": 10, "Road Travel": 20, "Public Transport": 45 },
      May: { "Air Travel": 20, "Road Travel": 30, "Public Transport": 15 },
      June: { "Air Travel": 10, "Road Travel": 20, "Public Transport": 25 },
      July: { "Air Travel": 5, "Road Travel": 15, "Public Transport": 25 },
      August: { "Air Travel": 10, "Road Travel": 20, "Public Transport": 5 },
      September: { "Air Travel": 5, "Road Travel": 15, "Public Transport": 5 },
      October: { "Air Travel": 2, "Road Travel": 8, "Public Transport": 5 },
      November: { "Air Travel": 1, "Road Travel": 6, "Public Transport": 3 },
      December: { "Air Travel": 0, "Road Travel": 5, "Public Transport": 0 },
    },
  },
  {
    year: 2024,
    months: {
      January: { "Air Travel": 40, "Road Travel": 50, "Public Transport": 30 },
      February: { "Air Travel": 30, "Road Travel": 30, "Public Transport": 30 },
      March: { "Air Travel": 30, "Road Travel": 40, "Public Transport": 30 },
      April: { "Air Travel": 15, "Road Travel": 30, "Public Transport": 35 },
      May: { "Air Travel": 30, "Road Travel": 40, "Public Transport": 20 },
      June: { "Air Travel": 20, "Road Travel": 30, "Public Transport": 25 },
      July: { "Air Travel": 15, "Road Travel": 25, "Public Transport": 25 },
      August: { "Air Travel": 20, "Road Travel": 25, "Public Transport": 10 },
      September: { "Air Travel": 15, "Road Travel": 20, "Public Transport": 10 },
      October: { "Air Travel": 10, "Road Travel": 15, "Public Transport": 10 },
      November: { "Air Travel": 8, "Road Travel": 12, "Public Transport": 5 },
      December: { "Air Travel": 5, "Road Travel": 10, "Public Transport": 0 },
    },
  },
];

const getChartData = (yearData: YearData): ChartDataType => {
  const labels = Object.keys(yearData.months);
  const values = labels.map(
    (month) =>
      yearData.months[month]["Air Travel"] +
      yearData.months[month]["Road Travel"] +
      yearData.months[month]["Public Transport"]
  );

  return {
    labels,
    datasets: [
      {
        label: `Monthly Carbon Emissions for ${yearData.year}`,
        data: values,
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#FF5733", "#33FF57", "#3357FF",
          "#57FF33", "#FF33A1", "#33FFA1", "#A133FF", "#FFA133", "#33FFF7",
        ],
      },
    ],
    yearData,
  };
};

const BarChartComponent: React.FC = () => {
  const [yearIndex, setYearIndex] = useState(0);

  const chartData = getChartData(data[yearIndex]);

  const handleYearChange = (index: number) => {
    setYearIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-8 rounded-lg shadow-md bg-gray-100">
      <h1 className="text-center text-2xl font-bold mb-4">
        Monthly Carbon Emissions Bar Chart for {data[yearIndex].year}
      </h1>
      <Bar
        data={chartData}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                title: (context) => context[0].label,
                label: (context) => {
                  const month = context.label;
                  const emissions = chartData.yearData.months[month];
                  return [
                    `Total: ${context.raw} kg`,
                    `Air Travel: ${emissions["Air Travel"]} kg`,
                    `Road Travel: ${emissions["Road Travel"]} kg`,
                    `Public Transport: ${emissions["Public Transport"]} kg`,
                  ];
                },
              },
            },
          },
        }}
      />
      <nav className="flex justify-center mt-4 space-x-2">
        {data.map((yearData, index) => (
          <button
            key={yearData.year}
            onClick={() => handleYearChange(index)}
            className={`
              p-2 rounded-md text-white font-bold shadow-sm
              ${yearIndex === index ? "bg-blue-500" : "bg-gray-400 hover:bg-gray-500"}
            `}
          >
            {yearData.year}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default BarChartComponent;
