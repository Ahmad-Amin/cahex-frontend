import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Merchant/Sidebar";

const merchantsData = [
  {
    name: "Ahmed Hussain",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image.png",
  },
  {
    name: "Hussain Mujtaba",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image-1.png",
  },
  {
    name: "Kamran Khan",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image-2.png",
  },
  {
    name: "Entesham",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image-3.png",
  },
  {
    name: "Usagi Kapoor",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image-4.png",
  },
  {
    name: "Arisu Meenu",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image-5.png",
  },
  {
    name: "Hassan Khan",
    role: "User",
    platform: "Platform Name",
    status: "Active",
    lastActivity: "23-11-2024",
    avatar: "/Images/image-6.png",
  },
];

const itemsPerPage = 9;
const MerchantUsers = () => {
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
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-impact text-4xl pb-4">Manage Users</h1>
            <button className="px-10 py-2 bg-[#2a3e5f] text-white rounded-lg shadow hover:bg-[#131c2c] outline-none">
              Add User
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md w-full font-jakarta">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="pb-4">User Name</th>
                  <th className="pb-4">Role</th>
                  <th className="pb-4">Platform</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Last Activity</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedMerchants.map((merchant) => (
                  <tr key={merchant.id} className="border-b">
                    <td className="py-4 flex items-center gap-2">
                      <img
                        src={merchant.avatar}
                        alt={merchant.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {merchant.name}
                    </td>
                    <td>{merchant.role}</td>
                    <td>{merchant.platform}</td>
                    <td>{merchant.status}</td>
                    <td>{merchant.lastActivity}</td>
                    <td className="flex gap-3">
                      <button className="text-[#646465] hover:text-[#313131]">
                        <Edit size={18} />
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
    </div>
  );
};

export default MerchantUsers;
