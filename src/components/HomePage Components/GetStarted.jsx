import React from "react";
import TextField from "@mui/material/TextField";
import FooterPage from "../FooterPage";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 border-2 border-[#4c4c4c] rounded-xl bg-[#f5f6fa] flex flex-col items-center">
      <div className="flex flex-col items-center text-center gap-10">
        <h1 className="font-impact text-8xl mt-20">Get started</h1>
        <p className="font-jakarta text-lg w-2/3">Let’s build the future of Financial Interoperability, together.</p>
        <button
          className="px-6 py-2 bg-[#313d4f] text-white rounded-full border border-transparent
          hover:border-gray-500 hover:bg-gradient-to-r from-blue-500 to-green-500 font-jakarta"
          onClick={() => navigate("/merchant/signin")}
        >
          Get Started
        </button>
      </div>
      <div className="w-3/4 mt-10 space-y-3">
        <h1 className="font-jakarta text-lg">Be the first to know Cahex updates</h1>
        <div className="flex flex-row w-full items-center">
        <h2 className="font-manrope font-extrabold font-lg flex-1">Email Address</h2>
        <button
          className="px-6 py-2 bg-[#313d4f] text-white rounded-full font-jakarta hover:bg-[#485a75]"
        >
          Subscribe
        </button>
        </div>
        <div className="w-full pb-10">
        <TextField id="standard-basic" label="Your Email" variant="standard" type="email" className="w-full" />
        </div>
        <FooterPage/>
      </div>
    </div>
  );
};

export default GetStarted;
