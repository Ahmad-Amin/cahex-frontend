import React from "react";

const AssetAgnosticism = () => {
  return (
    <div className="relative bg-[#313d4f]  rounded-xl overflow-hidden pt-10 pb-44">
      {/* Original Background Image */}
      <img
        src="/Images/6733647cd63c2616b1e0a5c1_product-lines-nolines.svg.png"
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Absolute Positioned Content */}
      <div className="absolute inset-0 flex flex-col items-center pt-10">
        <h1 className="text-white font-impact text-7xl">Asset Agnosticism</h1>
        <div className="mt-20 space-y-7">
          <div className="flex flex-row gap-10">
            {/* Box 1 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-64 h-24 flex items-center justify-center bg-transparent text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-xl font-bold font-jakarta text-white">
                Uncompromising <br /> Security
              </h1>
            </div>

            {/* Box 2 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-64 h-24 flex items-center justify-center bg-transparent text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-xl font-bold font-jakarta text-white">
                Built-In Regulatory Compliance
              </h1>
            </div>

            {/* Box 3 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-64 h-24 flex items-center justify-center text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-xl font-bold font-jakarta text-white">
                Web3 API Integration
              </h1>
            </div>
          </div>

          {/* Text Below */}
          <div className="w-full flex text-center items-center flex-col gap-3">
            <h1 className="font-jakarta font-normal text-xl text-white w-2/3">
              Enabling Payment Gateways to Accept Cahex Payments with our
              Network’s Technology
            </h1>
            <h2 className="font-jakarta font-bold text-2xl text-white">
              Universal Liquidity Protocol
            </h2>
          </div>
        </div>
      </div>
      <img
        src="/Images/shape.png"
        alt="Decor 1"
        className="absolute bottom-10 right-10 w-20 h-20"
      />
      <img
        src="/Images/66179f39a6c8261869098f79_decor-344-299.svg.png"
        alt="Decor 2"
        className="absolute top-32 left-0 w-32 h-auto"
      />
      <img
        src="/Images/66179f39a6c8261869098f79_decor-344-299.svg.png"
        alt="Decor 2"
        className="absolute bottom-20 right-0 w-32 h-auto"
      />
    </div>
  );
};

export default AssetAgnosticism;
