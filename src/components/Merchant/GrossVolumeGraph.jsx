import React from "react";
import Chart from "react-apexcharts";

export default function GrossVolumeGraph() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"]; // Custom Y-axis labels

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      width: 3, // Increased thickness
      curve: "smooth",
      colors: ["#1F2937"], // Darker color (Tailwind Gray-800)
    },
    markers: {
      size: 6, // Bigger points for better visibility
      colors: ["#1F2937"], // Darker marker color
      hover: { size: 8 },
    },
    dataLabels: { enabled: false },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.6,
        opacityFrom: 0.5, // Increased fill opacity
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
    tooltip: { theme: "dark" },
    xaxis: {
      categories: [
        "5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "55k", "60k"
      ],
      labels: { style: { colors: "#6B7280" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#6B7280" },
        formatter: (value) => months[Math.round(value) - 1] || "", // Map numbers to months
      },
      min: 1,
      max: 5,
      tickAmount: 4,
    },
    grid: {
      borderColor: "#E5E7EB",
    },
  };

  const series = [
    {
      name: "Gross Volume",
      data: [1, 2, 3, 4, 5, 4, 3, 2, 5, 3, 4, 2], // Mapping to months
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-impact">Gross Volume Graph</h2>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
}
