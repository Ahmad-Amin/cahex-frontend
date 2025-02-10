import React from "react";

const Product = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-full bg-[#f5f6fa] rounded-xl border-2 border-[#4c4c4c] flex flex-col overflow-hidden border-t-0 items-center">
        <div className="w-full h-16 relative bg-[#313d4f]">
          <div className="absolute w-48 h-12 bg-[#f5f6fa] rounded-b-xl top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="w-3/4 text-center mt-10 flex items-center flex-col gap-4 z-10">
          <h1 className="w-3/4 font-impact text-5xl">
            Why Choose AdminD Network Over Other Interoperability Solutions?
          </h1>

          <p className="font-manrope text-md mt-5">
            Cahex Network offers several distinct advantages that make it an
            ideal choice for businesses looking to integrate payments:
          </p>

          <div className="relative border-2 border-[#d6d8dc] rounded-xl bg-[#313d4f] w-full h-24 flex items-center justify-center text-start ">
            <div className="absolute inset-2 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
            </div>
            <div className="w-4/5 flex flex-col gap-1">
              <h1 className="text-lg font-bold font-jakarta text-white">
                Asset Agnosticism:
              </h1>
              <p className="text-white font-manrope text-xs">
                Cahex offers unparalleled flexibility, allowing businesses to
                transfer value seamlessly between any asset class, EVM and
                non-EVM chains, Bitcoin, bank accounts, and financial apps
                without any limitations.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-[#d6d8dc] rounded-xl bg-[#313d4f] w-full h-24 flex items-center justify-center text-start ">
            <div className="absolute inset-2 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
            </div>
            <div className="w-4/5 flex flex-col gap-1">
              <h1 className="text-lg font-bold font-jakarta text-white">
                Uncompromising Security:
              </h1>
              <p className="text-white font-manrope text-xs">
                Cahex stands out as the only solution that operates without
                intermediaries, bilateral integrations, or smart contracts,
                ensuring the highest level of security.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-[#d6d8dc] rounded-xl bg-[#313d4f] w-full h-24 flex items-center justify-center text-start ">
            <div className="absolute inset-2 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
            </div>
            <div className="w-4/5 flex flex-col gap-1">
              <h1 className="text-lg font-bold font-jakarta text-white">
                Built-In Regulatory Compliance:
              </h1>
              <p className="text-white font-manrope text-xs">
                Cahex uniquely integrates KYT (Know Your Transaction) checks
                directly into its protocol, simplifying compliance with AML
                (Anti-Money Laundering) regulations.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-[#d6d8dc] rounded-xl bg-[#313d4f] w-full h-24 flex items-center justify-center text-start ">
            <div className="absolute inset-2 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
            </div>
            <div className="w-4/5 flex flex-col gap-1">
              <h1 className="text-lg font-bold font-jakarta text-white">
                Direct Fund Management:
              </h1>
              <p className="text-white font-manrope text-xs">
                Cahex sets itself apart by directly managing funds, unlike other
                blockchains that rely on smart contracts. This approach offers
                superior efficiency and security.
              </p>
            </div>
          </div>

          <div className="relative border-2 border-[#d6d8dc] rounded-xl bg-[#313d4f] w-full h-24 flex items-center justify-center text-start ">
            <div className="absolute inset-2 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
            </div>
            <div className="w-4/5 flex flex-col gap-1">
              <h1 className="text-lg font-bold font-jakarta text-white">
                Web2 API Integration:
              </h1>
              <p className="text-white font-manrope text-xs">
                Cahex bridges the gap between traditional and decentralized
                applications by uniquely interacting directly with Web2 APIs.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5 flex flex-col items-center">
            <h1 className="font-impact text-xl">Universal Payment Rail</h1>
            <p className="font-manrope">To understand how TRON payment works, set up a TRON wallet and integrate the wallet for your TRC-20 token(s) and the Cahex SDK into your
            existing app to make or receive payments with USDT.</p>
            <img src="Images/image001.png" alt="" />
          </div>
        </div>
        <img src="Images/shap4.png" alt="" className="absolute top-0 left-0 w-40" />
        <img src="Images/shap5.png" alt="" className="absolute top-0 right-0 w-32" />
        <img src="Images/shap6.png" alt="" className="absolute lg:top-40 top-44 w-full" />
      </div>
    </div>
  );
};

export default Product;
