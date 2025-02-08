import React from "react";
import Chart from "react-apexcharts";

const FraudRate = () => {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Approved", "Suspicious", "Flagged", "Others"],
    colors: ["#4C84FF", "#4CAF50", "#FF9800", "#00C0EF"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#fff"],
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 2,
        blur: 3,
        opacity: 0.7,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
          },
        },
        expandOnClick: false,
        customScale: 1,
        offsetY: 10,
        dataLabels: {
          offset: -5,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#4C84FF", "#4CAF50", "#FF9800", "#00C0EF"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["#fff"],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
  };

  const chartSeries = [100, 62, 50, 28]; // Corresponding values for each category

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row items-center font-jakarta">
      <div className="w-full md:w-1/2">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="70%"
        />
      </div>
      <div className="w-full md:w-1/2 pl-6 space-y-5">
        <h2 className="font-impact text-2xl ">Fraud Rate</h2>
        <p className="text-red-500 text-2xl font-bold">12%</p>
        <div className="mt-4 space-y-5 text-gray-700">
          <div className="flex justify-between">
            <span>Total Clicks</span> <span>6,98,096</span>
          </div>
          <div className="flex justify-between">
            <span>Approved Clicks</span> <span>6,98,096</span>
          </div>
          <div className="flex justify-between">
            <span>Suspicious Clicks</span> <span>6,98,096</span>
          </div>
          <div className="flex justify-between">
            <span>Flagged Clicks</span> <span>6,98,096</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudRate;
