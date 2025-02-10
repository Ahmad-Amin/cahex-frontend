import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Merchant/Sidebar";
import { MdOutlineContentCopy } from "react-icons/md";

const apiConnections = [
  {
    id: 1,
    name: "NameOfTheKey",
    key: "23.8329.282...",
    platform: "Platform Name",
    status: "Active",
    created: "23-11-2024",
    secretKey: "934789374377382",
    publicKey: "023709343494u493",
  },
];

const sitesUsingKey = new Array(78).fill({
  siteName: "aeaprints.com",
  url: "http://aeaprints.com",
  fundsTransferred: "$45,000",
  fundsReceived: "$45,000",
});

const APIModal = ({ data, onClose }) => {
  if (!data) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <div className="w-full flex justify-end">
          <button onClick={onClose}>✖</button>
        </div>
        <h2 className="text-xl font-bold text-center">API Details</h2>

        <div className="mt-4 space-y-8">
          <div className="flex flex-row gap-16">
            <div className="flex flex-col">
              <p>
                <strong>Name:</strong>
              </p>
              <p>{data.name}</p>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Created:</strong>
              </p>
              <p>{data.created}</p>
            </div>
          </div>

          <div className="flex flex-row gap-16">
            <div className="flex flex-col">
              <p>
                <strong>Secret Key:</strong>
              </p>
              <p className="gap-2 flex flex-row items-center">
                {data.secretKey} <MdOutlineContentCopy />
              </p>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Public Key:</strong>
              </p>
              <p className="gap-2 flex flex-row items-center">
                {data.publicKey} <MdOutlineContentCopy />
              </p>
            </div>
          </div>

          <p>
            <strong>Status:</strong>{" "}
            <span className="bg-green-500 text-white px-2 py-1 rounded">
              Active
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const TableWithPagination = ({ data, headers, rowsPerPage, onRowClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            {headers.map((header) => (
              <th key={header} className="p-3 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr
              key={index}
              className="border-b cursor-pointer"
              onClick={() => onRowClick && onRowClick(row)} // ✅ Add this check
            >
              {Object.values(row)
                .slice(0, 5)
                .map((value, i) => (
                  <td key={i} className="p-3">
                    {value}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <p>
          Showing {(currentPage - 1) * rowsPerPage + 1}-
          {Math.min(currentPage * rowsPerPage, data.length)} of {data.length}
        </p>
        <div>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-l disabled:opacity-50"
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-r disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default function MerchantApi() {
  const [selectedAPI, setSelectedAPI] = useState(null);

  return (
    <div className="font-jakarta">
      <Navbar />
      <div className="pt-16">
        <Sidebar>
          <h1 className="font-impact text-4xl">API Connection</h1>
          <div className="p-6">
            <TableWithPagination
              data={apiConnections}
              headers={["Name", "Key", "Platform", "Status", "Created"]}
              rowsPerPage={5}
              onRowClick={setSelectedAPI}
            />

            <h2 className="text-2xl font-bold mt-6">Sites using this key</h2>
            <TableWithPagination
              data={sitesUsingKey}
              headers={[
                "Site Name",
                "URL",
                "Funds Transferred",
                "Funds Received",
              ]}
              rowsPerPage={9}
            />

            {selectedAPI && (
              <APIModal
                data={selectedAPI}
                onClose={() => setSelectedAPI(null)}
              />
            )}
          </div>
        </Sidebar>
      </div>
    </div>
  );
}
