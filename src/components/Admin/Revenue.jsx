import React from "react";
import PieChart from "./Revenue/VisualRep";
import RevenueTable from "./Revenue/RevenueTable";

const Revenue = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-7">
      <h1 className="font-impact text-2xl py-4">
        Revenue Distribution by Merchants
      </h1>
      <div className=" flex flex-row gap-4">
        <div className="w-2/5">
          <PieChart />
        </div>
        <div className="w-3/5">
          <RevenueTable />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
