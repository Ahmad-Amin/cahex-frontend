import React from "react";
import { X } from "lucide-react";

const MerchantModal = ({ merchant, onClose }) => {
  if (!merchant) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50 font-jakarta">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center">
          <img src={merchant.logo} alt={merchant.name} className="w-20 h-20 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-2">Merchant Details</h2>
        </div>

        {/* Merchant Basic Info */}
        <div className="flex justify-between text-sm text-gray-700 mt-4">
          <div>
            <p className="font-semibold">Merchant Name</p>
            <p>{merchant.name}</p>
          </div>
          <div>
            <p className="font-semibold">Owner Name</p>
            <p>{merchant.owner}</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p>{merchant.location}</p>
          </div>
        </div>

        {/* Merchant Information */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Merchant Information</h3>
          <div className="grid grid-cols-2 text-sm text-gray-700 mt-2">
            <div>
              <p className="font-semibold">Merchant ID</p>
              <p>{merchant.id}</p>
            </div>
            <div>
              <p className="font-semibold">Registered Date</p>
              <p>{merchant.registeredDate}</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Performance Metrics</h3>
          <div className="grid grid-cols-3 text-sm text-gray-700 mt-2">
            <div>
              <p className="font-semibold">Total Revenue</p>
              <p>{merchant.totalRevenue}</p>
            </div>
            <div>
              <p className="font-semibold">Active Users</p>
              <p>{merchant.activeUsers}</p>
            </div>
            <div>
              <p className="font-semibold">Monthly Growth</p>
              <p>{merchant.monthlyGrowth}</p>
            </div>
            <div>
              <p className="font-semibold">Profit Share</p>
              <p>{merchant.profitShare}</p>
            </div>
          </div>
        </div>

        {/* Financial Details */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Financial Details</h3>
          <div className="grid grid-cols-2 text-sm text-gray-700 mt-2">
            <div>
              <p className="font-semibold">Deposits</p>
              <p>{merchant.deposits}</p>
            </div>
            <div>
              <p className="font-semibold">Withdrawals</p>
              <p>{merchant.withdrawals}</p>
            </div>
            <div>
              <p className="font-semibold">Pending Transactions</p>
              <p>{merchant.pendingTransactions}</p>
            </div>
            <div>
              <p className="font-semibold">Average Transaction Size</p>
              <p>{merchant.averageTransactionSize}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantModal;
