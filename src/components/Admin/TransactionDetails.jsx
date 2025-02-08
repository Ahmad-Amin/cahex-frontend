import React from "react";
import Chart from "react-apexcharts";

const TransactionDetails = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "30%",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value / 1000}K`,
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    grid: { borderColor: "#EAEAEA" },
    colors: ["#1D3557"],
  };

  const chartSeries = [
    {
      name: "Transactions",
      data: [150000, 70000, 40000, 120000, 100000, 60000, 75000, 80000, 130000, 180000, 90000, 65000],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-7">
      <h2 className="text-2xl mb-4 font-impact">Transaction Details</h2>
      <div className="w-full">
        <Chart options={chartOptions} series={chartSeries} type="bar" height={300} />
      </div>
    </div>
  );
};

export default TransactionDetails;
