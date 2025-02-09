import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import AddBankModal from "./Modals/AddBankModal";

const data = [
  { month: "Aug", value: 8000 },
  { month: "Sep", value: 11000 },
  { month: "Oct", value: 6000 },
  { month: "Nov", value: 5000 },
  { month: "Dec", value: 12500 },
  { month: "Jan", value: 7000 },
];
const ConnectBanks = () => {
  return (
    <div className="w-full flex flex-row bg-white shadow-md p-6 gap-5 rounded-xl font-jakarta">
      <div className="w-2/3 space-y-5">
        <div className="flex flex-row justify-between">
          <h1 className="font-impact text-2xl">My Connected Banks</h1>
          <AddBankModal /> {/* This will render the "+ Add Bank" button and modal */}
        </div>
        <div className="w-full flex flex-row justify-between gap-5">
          <div className="w-1/2 relative">
            <img src="/Images/Rectangle 22.png" alt="" className="w-full" />
            <div className="absolute inset-0 flex flex-row items-start justify-between text-white p-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-md">Balance</h1>
                <p className="text-2xl font-bold">$5,756</p>
              </div>
              <img src="/Images/Chip_Card (1).png" alt="" className="w-10" />
            </div>

            <div className="absolute inset-0 flex flex-row items-center justify-start gap-14 text-white p-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-md opacity-70">CARD HOLDER</h1>
                <p className="text-xl font-semibold">Eddy Cusuma</p>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-md opacity-70">VALID THRU</h1>
                <p className="text-xl font-semibold">12/22</p>
              </div>
            </div>

            <div className="absolute inset-0 flex flex-row items-end justify-center gap-14 text-white p-6">
              <div className="flex items-center space-x-20">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-semibold">3778 **** **** 1234</p>
                </div>
                <img src="/Images/icons8-mastercard-48 (1).png" alt="" />
              </div>
            </div>
            <img
              src="/Images/gradient.png"
              alt=""
              className="absolute bottom-0 right-0 w-full"
            />
          </div>

          
          <div className="w-1/2 relative text-black">
            <img src="/Images/Rectangle 22 (1).png" alt="" className="w-full" />
            <div className="absolute inset-0 flex flex-row items-start justify-between p-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-md  text-black">Balance</h1>
                <p className="text-2xl font-bold text-black">$5,756</p>
              </div>
              <img src="/Images/Chip_Card.png" alt="" className="w-10" />
            </div>

            <div className="absolute inset-0 flex flex-row items-center justify-start gap-14  p-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-md opacity-70">CARD HOLDER</h1>
                <p className="text-xl font-semibold">Eddy Cusuma</p>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-md opacity-70">VALID THRU</h1>
                <p className="text-xl font-semibold">12/22</p>
              </div>
            </div>

            <div className="absolute inset-0 flex flex-row items-end justify-center gap-14  p-6">
              <div className="flex items-center space-x-20">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-semibold">3778 **** **** 1234</p>
                </div>
                <img src="/Images/icons8-mastercard-48 (2).png" alt="" />
              </div>
            </div>
            <img
              src="/Images/gradient.png"
              alt=""
              className="absolute bottom-0 right-0 w-full"
            />
          </div>
          </div>
      </div>
      <div className="w-1/3 flex flex-col space-y-5">
      <h2 className="text-2xl text-[#343c6a] font-semibold mb-2">Transactions</h2>
      <div className="p-4 bg-white rounded-lg shadow-md w-full">
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} barSize={30}>
          <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="value"
            radius={[5, 5, 0, 0]}
            fill="#CBD5E1"
            activeBar={{ fill: "#1E293B" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
      </div>
    </div>
  );
};

export default ConnectBanks;
