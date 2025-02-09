import React, {useState} from 'react'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Merchant/Sidebar'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const transactions = [
  {
    id: "#12548796",
    type: "Transaction",
    card: "1234 ****",
    date: "28 Jan, 12:30 AM",
    amount: -2500,
    category: "Transaction",
  },
  {
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10:40 PM",
    amount: 750,
    category: "Wallet to Bank",
  },
  {
    id: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10:40 PM",
    amount: -150,
    category: "Bank to Wallet",
  },
  {
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03:29 PM",
    amount: -1050,
    category: "All Transactions",
  },
  {
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10:40 PM",
    amount: 840,
    category: "All Transactions",
  },
];
const MerchantTransaction = () => {
  const [activeTab, setActiveTab] = useState("All Transactions");

  const filteredTransactions = transactions.filter(
    (transaction) =>
      activeTab === "All Transactions" || transaction.category === activeTab
  );
  return (
    <div className='font-jakarta'>
      <Navbar/>
      <div className='pt-16'>
        <Sidebar>
        <h1 className="font-impact text-4xl pb-4">Transaction</h1>

        <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      {/* Tabs */}
      <div className="flex border-b">
        {["All Transactions", "Wallet to Bank", "Bank to Wallet"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold text-sm ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction Table */}
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="text-gray-600 text-left border-b">
            <th className="py-5">Description</th>
            <th className="py-5">Transaction ID</th>
            <th className="py-5">Type</th>
            <th className="py-5">Card</th>
            <th className="py-5">Date</th>
            <th className="py-5">Amount</th>
            <th className="py-5">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index} className="border-b">
              <td className="py-5 flex items-center space-x-2">
                {transaction.amount < 0 ? (
                  <FaArrowUp className="text-red-500" />
                ) : (
                  <FaArrowDown className="text-green-500" />
                )}
                <span className="text-gray-700">Transaction type</span>
              </td>
              <td className="py-5 text-gray-600">{transaction.id}</td>
              <td className="py-5 text-gray-700">{transaction.type}</td>
              <td className="py-5 text-gray-600">{transaction.card}</td>
              <td className="py-5 text-gray-600">{transaction.date}</td>
              <td
                className={`py-5 font-semibold ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}` : `+$${transaction.amount}`}
              </td>
              <td className="py-2">
                <button className="border px-3 py-1 text-blue-600 border-blue-600 rounded hover:bg-blue-100">
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        </Sidebar>
      </div>
    </div>
  )
}

export default MerchantTransaction