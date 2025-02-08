import { GoStack } from "react-icons/go";
import { TbBolt } from "react-icons/tb";
import { FiCodesandbox } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function MerchantSignup() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2a3e5f] font-jakarta">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-2/6">
        <h1 className="font-extrabold text-[#2a3e5f]">CAHEX</h1>
        <h2 className="text-2xl font-semibold mt-5 text-center">
          Details to provide
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          The following are information we want from you.
        </p>
        <h1 className="text-gray-800 mb-4 font-bold">Tier 1 Requirement</h1>
        <div className="flex flex-col mb-4 border border-[#eaecf0] rounded-lg">
          <div className="flex flex-row w-full p-2 items-center gap-2">
            <div className="bg-[#bfd2ff] w-11 h-11 rounded-full flex items-center justify-center">
              <div className="bg-[#acc2f4] w-8 h-8 rounded-full flex justify-center items-center text-[#002e96]">
                <GoStack size={20} />
              </div>
            </div>
            <div>
              <h1 className="text-[#002e96] text-lg font-bold">
                Personal Information
              </h1>
              <p className="text-md text-[#667085]">
                Provide your First name, Last name and Nick name.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4 border border-[#eaecf0] rounded-lg">
          <div className="flex flex-row w-full p-2 items-center gap-2">
            <div className="bg-[#bfd2ff] w-11 h-11 rounded-full flex items-center justify-center">
              <div className="bg-[#acc2f4] w-8 h-8 rounded-full flex justify-center items-center text-[#002e96]">
                <FiCodesandbox size={20} />
              </div>
            </div>
            <div>
              <h1 className="text-[#002e96] text-lg font-bold">
                Add credit/debit card detail
              </h1>
              <p className="text-md text-[#667085]">
                Provide us with your bank details to continue respectively.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4 border border-[#eaecf0] rounded-lg">
          <div className="flex flex-row w-full p-2 items-center gap-2">
            <div className="bg-[#bfd2ff] w-11 h-11 rounded-full flex items-center justify-center">
              <div className="bg-[#acc2f4] w-8 h-8 rounded-full flex justify-center items-center text-[#002e96]">
                <TbBolt size={20} />
              </div>
            </div>
            <div>
              <h1 className="text-[#002e96] text-lg font-bold">
                Residential address
              </h1>
              <p className="text-md text-[#667085]">
                Provide us with your permanent address and residential address.
              </p>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#2a3e5f] text-white py-2 rounded-md hover:bg-[#131c2c]" onClick={() => navigate("/merchant-signup/personal-info")}>
          Accept & Proceed
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            className="text-[#2a3e5f] font-semibold"
            onClick={() => navigate("/merchant-signin")}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
