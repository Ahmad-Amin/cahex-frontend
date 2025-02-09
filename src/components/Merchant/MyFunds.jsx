import React from "react";
import FundsAllocationTable from "./FundsAllocationTable";
import AddFundsModal from "./Modals/AddFunds";
import WithdrawFundsModal from "./Modals/WithdrawFundsModal";
import FundsAllocationModal from "./Modals/FundsAllocationModal";

const MyFunds = () => {
  return (
    <div className="flex flex-row w-full bg-white shadow-md rounded-xl gap-5 p-6">
      <div className="w-1/3 flex flex-col justify-center space-y-4">
        <h1 className="text-2xl font-impact">My Funds</h1>
        <h2 className="text-md font-bold">Balance</h2>
        <p className="text-6xl opacity-70">$5,756</p>
        <AddFundsModal/>
        <WithdrawFundsModal/>
      </div>
      <div className="w-4/6 flex flex-col space-y-5">
        <FundsAllocationTable />
        <div className="w-full flex items-center justify-end">
          <FundsAllocationModal/>
        </div>
      </div>
    </div>
  );
};

export default MyFunds;
