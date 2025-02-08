import React from "react";

const Work = () => {
  return (
    <div className="w-full items center mt-20">
      <div className="w-full relative bg-[#313d4f] text-white rounded-xl flex flex-col items-center">
        <div className="absolute w-48 bg-[#f5f6fa] h-12 rounded-b-xl left-32 top-0"></div>
        <div className="w-2/3">
          <h1 className="font-impact text-5xl pt-28 pb-20 w-full">
            How CAHEX works?
          </h1>
          <p className="font-jakarta w-full mb-10 ">
            As an infrastructure-agnostic protocol, CAHEX Network can also be
            viewed as a bridgeless bridge between different financial ecosystems
            or blockchain networks, simplifying the process for merchants to
            accept TRON TRC-20 payments and other crypto payments as well.
            Here’s how it can work:
          </p>
          <div className="font-jakarta space-y-5 -translate-x-7">
            <div className="flex flex-row items-center">
              <div className="border-2 border-[#999999] bg-[#313d4f] border-l-0 border-r-0 h-20 w-20 flex items-center justify-center rounded-2xl text-7xl translate-x-7">
                <h1 className="bg-gradient-to-b from-[#94e4d0] to-[#82b3ea] text-transparent bg-clip-text">
                  1
                </h1>
              </div>
              <div className=" border-l-0 border-2 rounded-2xl flex items-center w-full border-[#d6d8dc] text-xs h-16">
                <h1 className="translate-x-9 w-5/6">
                  {" "}
                  A user sends funds from their wallet or bank account to a
                  decentralized-managed vault at the origin point.
                </h1>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <div className="text-white border-2 border-[#999999] bg-[#313d4f] border-l-0 border-r-0 h-20 w-20 flex items-center justify-center rounded-2xl text-7xl translate-x-7">
                <h1 className="bg-gradient-to-b from-[#94e4d0] to-[#82b3ea] text-transparent bg-clip-text">
                  2
                </h1>
              </div>
              <div className="border-l-0 border-2 rounded-2xl flex items-center w-full border-[#d6d8dc] text-xs h-16">
                <h1 className="translate-x-8 w-5/6">
                  {" "}
                  Cahex validators reach a consensus to verify and approve the
                  transaction.
                </h1>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <div className="text-white border-2 border-[#999999] bg-[#313d4f] border-l-0 border-r-0 h-20 w-20 flex items-center justify-center rounded-2xl text-7xl translate-x-7">
                <h1 className="bg-gradient-to-b from-[#94e4d0] to-[#82b3ea] text-transparent bg-clip-text">
                  3
                </h1>
              </div>
              <div className="border-l-0 border-2 rounded-2xl flex items-center w-full border-[#d6d8dc] text-xs h-16">
                <h1 className="translate-x-9 w-5/6">
                  {" "}
                  Approved funds move directly from Cahex's vault at the
                  destination to the recipient's bank account or wallet without
                  wrapping tokens.
                </h1>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <div className="text-white border-2 border-[#999999] bg-[#313d4f] border-l-0 border-r-0 h-20 w-20 flex items-center justify-center rounded-2xl text-7xl translate-x-7">
                <h1 className="bg-gradient-to-b from-[#94e4d0] to-[#82b3ea] text-transparent bg-clip-text">
                  4
                </h1>
              </div>
              <div className="border-l-0 border-2 rounded-2xl flex items-center w-full border-[#d6d8dc] text-xs h-16">
                <h1 className="translate-x-9 w-5/6">
                  {" "}
                  Cahex accept payments directly via Credit/debit card.
                </h1>
              </div>
            </div>
          </div>
          <div className="pb-10">
            <h1 className="font-impact text-5xl py-10">Where to use it?</h1>
            <div>
            <div className="flex flex-row gap-5">
            {/* Box 1 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-72 h-20 flex items-center justify-center bg-transparent text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-md font-jakarta text-white">
              API for
              any platform
              </h1>
            </div>

            {/* Box 2 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-72 h-20 flex items-center justify-center bg-transparent text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-md font-jakarta text-white">
              SDK for
              Applications
              </h1>
            </div>

            {/* Box 3 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-72 h-20 flex items-center justify-center bg-transparent text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-md font-jakarta text-white">
              Checkout
              Pages
              </h1>
            </div>

            {/* Box 4 */}
            <div className="relative border-2 border-[#d6d8dc] rounded-xl w-72 h-20 flex items-center justify-center bg-transparent text-center">
              <div className="absolute inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d6d8dc] rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d6d8dc] rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d6d8dc] rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d6d8dc] rounded-br-xl"></div>
              </div>
              <h1 className="text-md font-jakarta text-white">
              TRON to Fiat Ramp
              </h1>
            </div>
          </div>
            </div>
          </div>
        </div>
        <img src="Images/shap3.png" alt="" className="absolute left-0 top-32 w-32" />
      </div>
    </div>
  );
};

export default Work;
