import React from "react";
import Navbar from "../../components/Navbar";
import AssetAgnosticism from "../../components/HomePage Components/AssetAgnosticism";
import BusinessMeaning from "../../components/HomePage Components/BusinessMeaning";
import Work from "../../components/HomePage Components/Work";
import Product from "../../components/HomePage Components/Product";
import Advantages from "../../components/HomePage Components/Advantages";
import GetStarted from "../../components/HomePage Components/GetStarted";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="flex flex-row p-10 justify-center gap-10">
          <div className="w-1/2 flex justify-end">
            <div className="flex flex-col w-full justify-center space-y-10">
              <h1 className="text-8xl font-impact">
                CAHEX Advance Payment Gateway
              </h1>
              <h2 className="font-jakarta font-bold text-xl opacity-70">
                How Cahex Payment Gateway Can Efficiently Become an
                Interoperable Gateway For Businesses
              </h2>
              <p className="font-jakarta font-bold text-lg">
                Accept <span className="text-red-700">fiat</span> and{" "}
                <span className="text-blue-700">crypto</span> transactions
              </p>
            </div>
          </div>
          <div className="flex w-1/2 ">
            <img
              src="Images/image-removebg-preview - 2025-01-22T135958.935 1.png"
              alt=""
            />
          </div>
        </div>

        <div className="border-2 border-[#4c4c4c] w-auto h-auto m-10 rounded-2xl">
          <AssetAgnosticism />
          <BusinessMeaning />
          <Work />
        </div>
        <div className="m-10 pt-10">
          <Product />
          <Advantages/>
          <GetStarted/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
