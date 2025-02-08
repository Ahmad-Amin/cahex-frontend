import React, { useState } from "react";

const AccountSecurity = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const toggleTwoFactor = () => {
    setIsTwoFactorEnabled((prev) => !prev);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl w-full font-jakarta">
      <h2 className="text-2xl font-impact text-black mb-4">Account Security</h2>
      <h3 className="mb-6 text-[#333b69]">Two-factor Authentication</h3>
      <div className="mb-8">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isTwoFactorEnabled}
            onChange={toggleTwoFactor}
          />
          <div
            className={`w-11 h-6 rounded-full ${
              isTwoFactorEnabled ? "bg-[#293d5d]" : "bg-gray-300"
            } flex items-center transition-all duration-300`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isTwoFactorEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
          <span className="ml-3 text-sm text-gray-700">
            Enable or disable two-factor authentication
          </span>
        </label>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#333b69] mb-4">
          Change Password
        </h3>
        <div className="w-full flex flex-row items-end gap-10">
        <div className="grid grid-cols-2 gap-4 w-4/5">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-black"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              placeholder="********"
              className="mt-1 block w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm text-[#718ebf] placeholder-[#718ebf] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-black"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="********"
              className="mt-1 block w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm text-[#718ebf] placeholder-[#718ebf] outline-none"
            />
          </div>
        </div>
        <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-2 text-white bg-[#2a3e5f] rounded-lg shadow hover:bg-[#131c2c] outline-none"
              >
                Confirm
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSecurity;
