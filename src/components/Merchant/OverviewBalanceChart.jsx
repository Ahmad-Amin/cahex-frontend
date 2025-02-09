import React from "react";
import Chart from "react-apexcharts";

export default function OverviewBalanceChart() {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 6,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
      labels: { style: { colors: "#777" } },
    },
    yaxis: {
      labels: { style: { colors: "#777" } },
    },
    grid: { show: false },
    tooltip: { enabled: true },
    legend: { show: false },
  };

  const series = [
    {
      name: "Total",
      data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
      color: "#E5E7EB",
    },
    {
      name: "Actual",
      data: [200, 500, 400, 600, 300, 400, 400, 300, 400, 400, 500, 800, 600],
      color: "#1E293B",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full font-jakarta">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-impact">Overview Balance</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>
          <p className="text-sm mt-1">
            Last Week <span className="text-green-500 font-semibold">$563,443</span>
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">$557,235.31</p>
          <p className="text-green-500 font-semibold text-sm flex items-center">
            7% <span className="ml-1">▲</span>
          </p>
        </div>
      </div>

      {/* ApexChart */}
      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  );
}
