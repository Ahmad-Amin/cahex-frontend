import React, { useState } from "react";
import { Eye, Edit, Ban, Trash } from "lucide-react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Sidebar";
import MerchantModal from "../../components/Admin/MerchantModal";

const merchantsData = [
  {
    id: 1,
    name: "Naptune Arena",
    business: "Ehtesham",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (7).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 2,
    name: "Vagus Hub",
    business: "John",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (8).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 3,
    name: "Richie Club",
    business: "Emma",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (9).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 4,
    name: "Mr Vegas",
    business: "David",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (10).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 5,
    name: "Bellagio, Las Vegas",
    business: "Robert",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (4).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 6,
    name: "Grand Lisboa, Macau",
    business: "Oliver",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (5).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 7,
    name: "Casino de Monte",
    business: "Sophia",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (6).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 8,
    name: "Empire Casino",
    business: "Alex",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (7).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 9,
    name: "Golden Palace",
    business: "Micheal",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (8).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 10,
    name: "Royal Flush",
    business: "Daniel",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (9).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
  {
    id: 11,
    name: "Jackpot City",
    business: "Sophia",
    balance: "$65,000",
    status: "Active",
    logo: "Images/image (10).png",
    owner: "24-11-2024 / 23:65",
    location: "Los Angeles",
    registeredDate: "March 2022",
    totalRevenue: "$7,887,882",
    activeUsers: "983",
    monthlyGrowth: "14%",
    profitShare: "43%",
    deposits: "$7,887,882",
    withdrawals: "983",
    pendingTransactions: "12",
    averageTransactionSize: "$56,000",
  },
];

const itemsPerPage = 9;

const Merchant = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Logic
  const totalPages = Math.ceil(merchantsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedMerchants = merchantsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Sidebar>
          <h1 className="font-impact text-4xl pb-4">Merchants</h1>
          <div className="bg-white p-6 rounded-xl shadow-md w-full font-jakarta">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="pb-4">Merchant Name</th>
                  <th className="pb-4">Business Name</th>
                  <th className="pb-4">Balance</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedMerchants.map((merchant) => (
                  <tr key={merchant.id} className="border-b">
                    <td className="py-4 flex items-center gap-2">
                      <img
                        src={merchant.logo}
                        alt={merchant.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {merchant.name}
                    </td>
                    <td>{merchant.business}</td>
                    <td>{merchant.balance}</td>
                    <td className="text-green-500">{merchant.status}</td>
                    <td className="flex gap-3">
                      <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => {
                          setSelectedMerchant(merchant);
                          setShowModal(true);
                        }}
                      >
                        <Eye size={18} />
                      </button>
                      <button className="text-blue-500 hover:text-blue-700">
                        <Edit size={18} />
                      </button>
                      <button className="text-yellow-500 hover:text-yellow-700">
                        <Ban size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, merchantsData.length)} of{" "}
                {merchantsData.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  ⬅
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  ➡
                </button>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
      {showModal && selectedMerchant && (
        <MerchantModal
          merchant={selectedMerchant}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Merchant;
