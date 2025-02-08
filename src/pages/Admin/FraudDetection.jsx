import React from "react";
import FraudRate from "../../components/Admin/FraudRate";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Sidebar";
import FraudAlerts from "../../components/Admin/FraudAlerts";

const FraudDetection = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Sidebar>
            <h1 className="font-impact text-4xl">Fraud Detection</h1>
          <div className="bg-white p-6 rounded-xl shadow-md mt-7">
            <div>
              <FraudRate />
            </div>
          </div>
          <div className="mt-7">
          <FraudAlerts/>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default FraudDetection;
