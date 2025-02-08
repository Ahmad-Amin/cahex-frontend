import { BsFillPeopleFill } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { VscGraphLine } from "react-icons/vsc";
import { BsFillBoxFill } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";

const DashboardAnalytics = () => {
  const stats = [
    {
      title: "Total Merchants",
      value: "689",
      icon: <BsFillPeopleFill color="#8280ff" size={25} />,
      change: "8.5",
      changeType: "up",
      changeText: "Up from past month",
      color: "#e5e4ff",
    },
    {
      title: "Total Transactions",
      value: "10,231",
      icon: <BsFillBoxFill color="#fec53d" size={25} />,
      change: "1.3",
      changeType: "up",
      changeText: "Up from past week",
      color: "#fff3d6",
    },
    {
      title: "Transaction Volume",
      value: "$89,000",
      icon: <VscGraphLine color="#4ad991" size={25} />,
      change: "4.3",
      changeType: "down",
      changeText: "Down from yesterday",
      color: "#d9f7e8",
    },
    {
      title: "Fraud Alerts",
      value: "47%",
      icon: <RxCountdownTimer color="#ff9871" size={25} />,
      change: "1.8",
      changeType: "up",
      changeText: "Up from yesterday",
      color: "#ffded1",
    },
  ];

  return (
    <div className="flex gap-4 p-6 bg-gray-100">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};

const StatCard = ({ stat }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-1/4">
      <div className="flex justify-between items-center">
        <h3 className="text-[#636466] text-lg font-jakarta font-bold">{stat.title}</h3>
        <div
          className="p-3 rounded-2xl text-xl"
          style={{ backgroundColor: stat.color }}
        >
          {stat.icon}
        </div>
      </div>
      <h2 className="text-2xl font-extrabold mt-2 font-jakarta mb-5">{stat.value}</h2>
      <p
        className={`font-jakarta text-sm flex items-center mt-1 gap-1 ${
          stat.changeType === "up" ? "text-green-500" : "text-red-500"
        }`}
      >
        {stat.changeType === "up" ? <IoMdTrendingUp/> : <IoMdTrendingDown/>} {stat.change}%{" "}
        {stat.changeText}
      </p>
    </div>
  );
};

export default DashboardAnalytics;
