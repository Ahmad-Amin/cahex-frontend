import React, { useEffect, useState } from "react";
import FundsAllocationTable from "./FundsAllocationTable";
import AddFundsModal from "./Modals/AddFunds";
import WithdrawFundsModal from "./Modals/WithdrawFundsModal";
import FundsAllocationModal from "./Modals/FundsAllocationModal";

const MyFunds = () => {
  const [balance, setBalance] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAccessToken = async () => {
    const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
    const secret = process.env.REACT_APP_PAYPAL_SECRET_KEY;
  
    try {
      const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(clientId + ":" + secret),
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: "grant_type=client_credentials",
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching access token:", errorData);
        throw new Error("Failed to get PayPal access token");
      }
  
      const data = await response.json();
      return data.access_token;
    } catch (err) {
      console.error("Error fetching access token:", err);
      setError("Failed to retrieve PayPal access token.");
    }
  };
  
  const fetchBalance = async () => {
    setLoading(true);
    try {
      const accessToken = await getAccessToken();
      if (!accessToken) return;
  
      const sandboxEmail = process.env.REACT_APP_PAYPAL_SANDBOX_EMAIL;
  
      const response = await fetch("https://api-m.sandbox.paypal.com/v1/reporting/balances", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "X-PAYPAL-SANDBOX-EMAIL-ADDRESS": sandboxEmail,
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });
  
      const data = await response.json();
      console.log("PayPal Balance Response:", data);
  
      if (data.balances && data.balances.length > 0) {
        setBalance(data.balances[0].available_balance.value);
        setCurrency(data.balances[0].currency);
      } else {
        throw new Error("Balance data not found.");
      }
    } catch (err) {
      console.error("Error fetching balance:", err);
      setError(err.message || "Failed to fetch balance.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchBalance();
    const interval = setInterval(() => {
      fetchBalance();
    }, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row w-full bg-white shadow-md rounded-xl gap-5 p-6">
      <div className="w-1/3 flex flex-col justify-center space-y-4">
        <h1 className="text-2xl font-impact">My Funds</h1>
        <h2 className="text-md font-bold">Balance</h2>

        {loading ? (
          <p className="text-xl opacity-70">Loading...</p>
        ) : error ? (
          <p className="text-xl text-red-500">{error}</p>
        ) : balance !== null ? (
          <p className="text-5xl opacity-70">{currency} {balance}</p>
        ) : (
          <p className="text-xl opacity-70">No balance available</p>
        )}

        {/* Manual Refresh Button */}
        <div className="w-1/3">
        <button
          onClick={fetchBalance}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Refresh Balance
        </button>
        </div>

        <AddFundsModal />
        <WithdrawFundsModal />
      </div>
      <div className="w-4/6 flex flex-col space-y-5">
        <FundsAllocationTable />
        <div className="w-full flex items-center justify-end">
          <FundsAllocationModal />
        </div>
      </div>
    </div>
  );
};

export default MyFunds;
