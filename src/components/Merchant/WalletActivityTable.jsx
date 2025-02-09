import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const transactions = [
  { type: "Withdraw", amount: -542, status: "Pending", time: "06:24:45 AM" },
  { type: "Topup", amount: 5553, status: "Completed", time: "06:24:45 AM" },
  { type: "Withdraw", amount: -912, status: "Canceled", time: "06:24:45 AM" },
  { type: "Withdraw", amount: -400, status: "Pending", time: "06:10:32 AM" },
  { type: "Topup", amount: 1200, status: "Completed", time: "06:01:22 AM" },
  { type: "Withdraw", amount: -200, status: "Canceled", time: "05:45:12 AM" },
  { type: "Withdraw", amount: -300, status: "Pending", time: "05:30:45 AM" },
  { type: "Topup", amount: 3400, status: "Completed", time: "05:20:30 AM" },
  { type: "Withdraw", amount: -800, status: "Canceled", time: "05:10:15 AM" },
  { type: "Withdraw", amount: -150, status: "Pending", time: "05:00:00 AM" },
  { type: "Topup", amount: 2500, status: "Completed", time: "04:50:45 AM" },
];

export default function WalletActivityTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const paginatedData = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Pending":
        return "text-gray-500";
      case "Canceled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getIcon = (type) => {
    return type === "Topup" ? <FaArrowUp/> : <FaArrowDown/>;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full font-jakarta">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-impact">Wallet Activity</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-1 bg-gray-200 rounded-full">Monthly</button>
          <button className="px-4 py-1 bg-gray-200 rounded-full">Weekly</button>
          <button className="px-4 py-1 bg-gray-900 text-white rounded-full">Today</button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <tbody>
          {paginatedData.map((txn, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4">
                <span className="p-2 ">{getIcon(txn.type)}</span>
              </td>
              <td className="py-3 px-4 font-semibold">{txn.type}</td>
              <td className="py-3 px-4 text-gray-500">{txn.time}</td>
              <td className={`py-3 px-4 ${txn.amount < 0 ? "text-red-500" : "text-green-500"} font-semibold`}>
                {txn.amount < 0 ? `-$${Math.abs(txn.amount)}` : `+$${txn.amount}`}
              </td>
              <td className={`py-3 px-4 ${getStatusColor(txn.status)} font-semibold`}>{txn.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
