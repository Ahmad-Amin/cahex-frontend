import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Sidebar";

const apisdkData = [
 
  {
    id: 12345678901,
    merchantName: "Neptune Play",
    privateKey: "#983478383",
    publicKey: "#983478383",
    testApiKey: "#9382478923",
    activity: 2,
    status: "Active",
  },
  {
    id: 12345678901,
    merchantName: "Richie Club",
    privateKey: "#983478383",
    publicKey: "#983478383",
    testApiKey: "#9387483",
    activity: 4,
    status: "Active",
  },
  {
    id: 12345678901,
    merchantName: "Neptune Play",
    privateKey: "#983478383",
    publicKey: "#983478383",
    testApiKey: "#9382478923",
    activity: 3,
    status: "Unactive",
  },
  {
    id: 12345678901,
    merchantName: "Richie Club",
    privateKey: "#983478383",
    publicKey: "#983478383",
    testApiKey: "#9387483",
    activity: 2,
    status: "Active",
  },
  {
    id: 12345678901,
    merchantName: "Neptune Play",
    privateKey: "#983478383",
    publicKey: "#983478383",
    testApiKey: "#9387483",
    activity: 2,
    status: "Active",
  },
];

const ApiSdk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(apisdkData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedApisdk = apisdkData.slice(startIndex, startIndex + itemsPerPage);
  
  const statusColors = {
    Active: "bg-[#00b69b]",
    Unactive: "bg-[#fd5454]",
  };
  
  
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Sidebar>
          <h1 className="font-impact text-4xl pb-4">API & SDK Integration</h1>
          <div className="bg-white p-6 rounded-xl shadow-md w-full font-jakarta">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="pb-4">Merchant Name</th>
                  <th className="pb-4">Private Key</th>
                  <th className="pb-4">Public Key</th>
                  <th className="pb-4">Test API Key</th>
                  <th className="pb-4">Activity</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedApisdk.map((api) => (
                  <tr key={api.id} className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="py-4">{api.merchantName}</td>
                    <td>{api.privateKey}</td>
                    <td>{api.publicKey}</td>
                    <td>{api.testApiKey}</td>
                    <td>{api.activity}</td>
                    <td>
                      <span className={`text-white text-sm px-3 py-1 rounded-full ${statusColors[api.status]}`}>{api.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-500">
                Showing {startIndex + 1}-
                {Math.min(startIndex + itemsPerPage, apisdkData.length)} of {apisdkData.length}
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
    </div>
  );
};

export default ApiSdk;