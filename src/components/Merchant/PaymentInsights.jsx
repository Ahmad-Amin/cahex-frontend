import { FiChevronRight } from "react-icons/fi";

const PaymentInsights = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md font-jakarta">
      <div className="flex flex-col  gap-3 w-full">
        <h1 className="font-impact text-2xl">Payment Insights</h1>
        <div className="flex flex-row gap-4 w-full">
          <div className="bg-white shadow-md rounded-xl p-4 w-1/3 flex flex-col">
            <div className="w-full flex-1">
              <h3 className="text-blue-700 font-medium">Transfers</h3>
              <p className="text-2xl font-bold mt-1">
                $76.000{" "}
                <span className="font-normal text-xl">Next Transfer</span>
              </p>
            </div>
            <div className="border-t mt-4 pt-3 flex justify-between items-center text-gray-600 hover:text-black cursor-pointer">
              <span>View Transfers</span>
              <FiChevronRight />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4 w-1/3 flex flex-col">
            <div className="w-full flex-1">
              <h3 className="text-blue-700 font-medium">Disputes</h3>
              <p className="text-2xl font-bold mt-1">
                0 <span className="font-normal text-xl">unanswered</span>
              </p>
              <p className="text-gray-500 text-sm">In past 2 weeks</p>
            </div>
            <div className="border-t mt-4 pt-3 flex justify-between items-center text-gray-600 hover:text-black cursor-pointer">
              <span>View Disputes</span>
              <FiChevronRight />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4 w-1/3 flex flex-col">
            <div className="flex-1 w-full">
              <h3 className="text-blue-700 font-medium">Radar</h3>
              <p className="text-2xl font-bold mt-1">
                0 <span className="font-normal text-xl">Payments</span>
              </p>
              <p className="text-gray-500 text-sm">In past 2 weeks</p>
            </div>
            <div className="border-t mt-4 pt-3 flex justify-between items-center text-gray-600 hover:text-black cursor-pointer">
              <span>View Reviews</span>
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInsights;
