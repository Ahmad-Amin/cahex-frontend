import React from "react";

const fundsData = [
  { url: "http://aeaprints.com", amount: "$56,987", date: "2025-02-09" },
  { url: "http://aeaprints.com", amount: "$56,987", date: "2025-02-08" },
  { url: "http://otherdomain.com", amount: "$45,000", date: "2025-02-07" },
];

export default function FundsAllocationTable() {
  const latestEntries = [...fundsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full font-jakarta">
      <h2 className="text-lg font-bold mb-2">Funds Allocation List</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b text-left">URL</th>
            <th className="p-2 border-b text-left">Allocated Amount</th>
          </tr>
        </thead>
        <tbody>
          {latestEntries.map((entry, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{entry.url}</td>
              <td className="p-2">{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
