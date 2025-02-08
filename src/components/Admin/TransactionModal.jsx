import React from "react";

const TransactionModal = ({ transaction, isOpen, onClose }) => {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-jakarta">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[500px]">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Transaction Details</h2>
          <button onClick={onClose} className="text-gray-600 text-xl">&times;</button>
        </div>
        <div className="mt-4 text-sm space-y-3">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Transaction ID</p>
              <p className="text-gray-500">{transaction.id}</p>
            </div>
            <div>
              <p className="font-medium">Date / Time</p>
              <p className="text-gray-500">{transaction.date}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">From Address</p>
              <p className="text-gray-500">{transaction.from}</p>
            </div>
            <div>
              <p className="font-medium">To Address</p>
              <p className="text-gray-500">{transaction.to}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Amount</p>
              <p className="text-gray-500">{transaction.amount}</p>
            </div>
            <div>
              <p className="font-medium">Block Number</p>
              <p className="text-gray-500">{transaction.block}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Transaction Fees</p>
              <p className="text-gray-500">{transaction.fees}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium mb-1">Status</p>
            <span className={`px-4 py-1 text-white text-sm rounded-full ${transaction.status === 'Failed' ? 'bg-red-500' : 'bg-green-500'}`}>
              {transaction.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;