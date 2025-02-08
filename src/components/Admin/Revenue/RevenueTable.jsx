import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const data = [
  { merchant: "Naptune Play", revenue: "$56,000", percentage: "35%", change: "up" },
  { merchant: "Naptune Play", revenue: "$104,986", percentage: "60%", change: "down" },
  { merchant: "Naptune Play", revenue: "$234,864", percentage: "12%", change: "up" },
  { merchant: "Naptune Play", revenue: "$60,987", percentage: "90%", change: "up" },
];

const RevenueTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-full font-jakarta">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="pb-5">Merchants</th>
            <th className="pb-5">Revenue</th>
            <th className="pb-5">Percentage</th>
            <th className="pb-5">Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-5">{item.merchant}</td>
              <td>{item.revenue}</td>
              <td>{item.percentage}</td>
              <td>
                {item.change === "up" ? (
                  <ArrowUpRight className="text-green-500" />
                ) : (
                  <ArrowDownRight className="text-red-500" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevenueTable;
