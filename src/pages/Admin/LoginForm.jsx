import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberPassword });
    navigate('/admin/dashboard', { state: { userEmail: email } });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#3A4358] font-jakarta relative">
      <img
        src="Images/Shape (1).png"
        alt=""
        className="w-screen h-screen absolute"
      />
      <div className="bg-white shadow-lg rounded-2xl w-1/3 p-8 font-jakarta z-10 space-y-5 pb-10">
        <h1 className="font-black text-[#2a3e5f]">CAHEX</h1>
        <h1 className="text-2xl font-bold text-center mb-2 text-black">
          Login to Account
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="esteban_schiller@gmail.com"
              className="mt-1 block w-full p-2 border border-gray-300 bg-[#f1f4f9] rounded-lg shadow-sm text-gray-500 placeholder-gray-400 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a href="/" className="text-md font-semibold text-[#797a7c]">
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-[#f1f4f9] shadow-sm text-gray-500 placeholder-gray-400 outline-none"
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberPassword"
              checked={rememberPassword}
              onChange={(e) => setRememberPassword(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded "
            />
            <label
              htmlFor="rememberPassword"
              className="ml-2 text-sm text-gray-700"
            >
              Remember Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#4e5669] text-white rounded-lg shadow-md hover:bg-[#6a758f] outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
