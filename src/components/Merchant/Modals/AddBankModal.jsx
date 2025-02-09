import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddBankModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)} className="text-[#343c6a]">
        + Add Bank
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-jakarta z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="w-full flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-xl">
                <IoClose />
              </button>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Add New Bank</h2>
            </div>

            <p className="text-sm text-gray-500 mb-5">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>

            <div className="space-y-6">
              <div className="flex flex-row gap-5 w-full">
                <div className="w-1/2 space-y-2">
                <label>Select bank</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>American Express</option>
                    <option>Visa</option>
                    <option>MasterCard</option>
                  </select>
                </div>
                <div className="w-1/2 space-y-2">
                <label>IBAN</label>
                  <input
                    type="text"
                    placeholder="83478374837248"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-5">
                <div className="w-1/2 space-y-2">
                <label>Swift Key</label>
                  <input
                    type="password"
                    placeholder="**** **** **** ****"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2 space-y-2">
                <label>Country</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
              <button
                className="px-10 py-2 text-white bg-[#2a3e5f] rounded-lg shadow hover:bg-[#131c2c] outline-none"
              >
                Add Bank
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
