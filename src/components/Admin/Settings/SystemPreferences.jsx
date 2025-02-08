import React, { useState } from "react";

const SystemPreferences = () => {
  const [transactionFee, setTransactionFee] = useState("USD");
  const [isMultiLanguage, setIsMultiLanguage] = useState(false);

  const handleSave = () => {
    alert(`Transaction Fee: ${transactionFee}\nMulti-Language: ${isMultiLanguage}`);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl w-full font-jakarta">
      <h2 className="text-2xl font-impact text-black mb-6">
        System Preferences
      </h2>

      {/* Transaction Fee */}
      <div className="mb-6">
        <label
          htmlFor="transactionFee"
          className="block text-sm font-medium text-black mb-2"
        >
          Current Transaction Fee
        </label>
        <div className="flex items-center gap-10 w-3/5">
          <input
            type="number"
            id="transactionFee"
            placeholder="USD"
            value={transactionFee}
            onChange={(e) => setTransactionFee(e.target.value)}
            className="flex-1 p-2 border border-[#dfeaf2] text-[#718ebf] placeholder-[#718ebf] rounded-lg shadow-sm outline-none"
          />
          <button
            onClick={handleSave}
            className="px-10 py-2 bg-[#2a3e5f] text-white rounded-lg shadow hover:bg-[#131c2c] outline-none"
          >
            Save
          </button>
        </div>
      </div>

      {/* Multi-Language Support */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Language</h3>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="multiLanguage"
            className="sr-only"
            checked={isMultiLanguage}
            onChange={() => setIsMultiLanguage((prev) => !prev)}
          />
          <div
            className={`w-11 h-6 rounded-full cursor-pointer ${
              isMultiLanguage ? "bg-[#293d5d]" : "bg-gray-300"
            } flex items-center transition-all duration-300`}
            onClick={() => setIsMultiLanguage((prev) => !prev)}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isMultiLanguage ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
          <label
            htmlFor="multiLanguage"
            className="ml-3 text-sm font-medium text-gray-700"
          >
            Multi-Language Support
          </label>
        </div>
      </div>
    </div>
  );
};

export default SystemPreferences;
