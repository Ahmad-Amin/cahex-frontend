import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Sidebar";
import TransactionModal from "../../components/Admin/TransactionModal";

const transactionData = [
  {
    id: 12345678901,
    type: "Deposit",
    casino: "Vegas Royale",
    player: "Alice Smith",
    amount: "$1,200",
    status: "Completed",
    date: "2025-02-08 14:23",
    from: "0xA1B2C3D4E5F6",
    to: "0xF6E5D4C3B2A1",
    fees: "$20",
    block: "123abc456def"
  },
  {
    id: 23456789012,
    type: "Withdrawal",
    casino: "Neptune Arena",
    player: "Bob Johnson",
    amount: "$3,500",
    status: "Pending",
    date: "2025-02-07 10:15",
    from: "0xG7H8I9J0K1L2",
    to: "0xL2K1J0I9H8G7",
    fees: "$30",
    block: "789ghi012jkl"
  },
  {
    id: 34567890123,
    type: "Deposit",
    casino: "Grand Empire",
    player: "Charlie Brown",
    amount: "$950",
    status: "Completed",
    date: "2025-02-06 16:45",
    from: "0xM3N4O5P6Q7R8",
    to: "0xR8Q7P6O5N4M3",
    fees: "$15",
    block: "345mno678pqr"
  },
  {
    id: 45678901234,
    type: "Withdrawal",
    casino: "Richie Club",
    player: "Diana Prince",
    amount: "$5,000",
    status: "Failed",
    date: "2025-02-05 12:10",
    from: "0xS9T8U7V6W5X4",
    to: "0xX4W5V6U7T8S9",
    fees: "$50",
    block: "567stu890vwx"
  }
];

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(transactionData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = transactionData.slice(startIndex, startIndex + itemsPerPage);
  
  const statusColors = {
    Completed: "bg-green-500",
    Pending: "bg-yellow-400",
    Failed: "bg-red-500",
  };
  
  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };
  
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Sidebar>
          <h1 className="font-impact text-4xl pb-4">Transaction History</h1>
          <div className="bg-white p-6 rounded-xl shadow-md w-full font-jakarta">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="pb-4">Transaction ID</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Casino</th>
                  <th className="pb-4">Player</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b cursor-pointer hover:bg-gray-100" onClick={() => openModal(transaction)}>
                    <td className="py-4">{transaction.id}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.casino}</td>
                    <td>{transaction.player}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      <span className={`text-white text-sm px-3 py-1 rounded-full ${statusColors[transaction.status]}`}>{transaction.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, transactionData.length)} of {transactionData.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >⬅</button>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >➡</button>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      <TransactionModal transaction={selectedTransaction} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TransactionHistory;