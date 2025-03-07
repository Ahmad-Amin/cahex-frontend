import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2a3e5f] font-jakarta">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-2/6">
        <div className="flex flex-row justify-between">
          <h1 className="font-extrabold text-[#2a3e5f]">CAHEX</h1>
          <h2 className="text-black text-sm">Step 1 of 3</h2>
        </div>
        <h2 className="text-4xl font-semibold mt-5">Personal Information</h2>
        <p className="text-gray-600 mb-4">Provide your personal information</p>

        <div className="mb-4">
          <TextField
            label="First Name"
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#2a3e5f] border-[#2a3e5f]"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Last Name"
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#2a3e5f] border-[#2a3e5f]"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Gender"
            type="text"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#2a3e5f] border-[#2a3e5f]"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Date of Birth"
            type="text" 
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#2a3e5f] border-[#2a3e5f]"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Email"
            type="email"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-[#2a3e5f] border-[#2a3e5f]"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Password"
            type="password"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          className="w-full bg-[#2a3e5f] text-white py-2 rounded-md hover:bg-[#131c2c]"
          onClick={() => navigate("/merchant/signup/credit-info")}
        >
          Proceed
        </button>

      </div>
    </div>
  );
}
