import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const chartOptions = {
    labels: [
      "Bellagio, Las Vegas",
      "Mr Vegas",
      "Neptune Play",
      "Casino de Monte-Carlo",
      "Mega Riches"
    ],
    colors: ["#6366F1", "#4ADE80", "#FBBF24", "#06B6D4", "#A78BFA"],
    legend: {
      position: "right",
      markers: { radius: 6 },
    },
    dataLabels: { enabled: false },
    tooltip: {
      y: { formatter: (value) => `${value}%` },
    },
  };

  const chartSeries = [25, 20, 18, 22, 15]; // Example percentage values

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full font-jakarta">
      <h2 className="text-lg font-semibold mb-4">Visual Representation</h2>
      <Chart options={chartOptions} series={chartSeries} type="pie" height={300} />
    </div>
  );
};

export default PieChart;
