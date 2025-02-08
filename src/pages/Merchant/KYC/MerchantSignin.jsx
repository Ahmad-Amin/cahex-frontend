import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MerchantSignin() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2a3e5f] font-jakarta">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-2/6">
        <h1 className="font-extrabold text-[#2a3e5f]">CAHEX</h1>
        <h2 className="text-2xl font-semibold mt-5">Sign In</h2>
        <p className="text-gray-600 mb-4">
          Please login to continue to your account.
        </p>

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

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2 text-sm text-gray-700 font-bold">
              Keep me logged in
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between mb-4 border p-3 rounded-md shadow-md">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="form-checkbox w-5 h-5" />
            <span className="text-sm text-gray-700 font-bold">
              I'm not a robot.
            </span>
          </div>
          <img src="/Images/logos_recaptcha.png" alt="" />
        </div>

        <button className="w-full bg-[#2a3e5f] text-white py-2 rounded-md hover:bg-[#131c2c]" onClick={() => navigate("/merchant/dashboard")}>
          Sign in
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Need an account?{" "}
          <button
            className="text-[#2a3e5f] font-bold"
            onClick={() => navigate("/merchant-signup")}
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}
