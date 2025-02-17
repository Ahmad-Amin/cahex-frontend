import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddFundsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(""); // Store selected card
  const [amount, setAmount] = useState(""); // Store amount
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAccessToken = async () => {
    const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
    const secret = process.env.REACT_APP_PAYPAL_SECRET_KEY;

    try {
      const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(clientId + ":" + secret),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });

      if (!response.ok) {
        throw new Error("Failed to get PayPal access token");
      }

      const data = await response.json();
      return data.access_token;
    } catch (err) {
      console.error("Error fetching access token:", err);
      setError("Failed to retrieve PayPal access token.");
    }
  };

  const handleAddFunds = async () => {
    setError("");
    if (!selectedCard || !amount || amount <= 0) {
      setError("Please select a card and enter a valid amount.");
      return;
    }

    setLoading(true);
    const accessToken = await getAccessToken();
    if (!accessToken) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                value: amount,
                currency_code: "MXN",
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create PayPal order.");
      }

      const data = await response.json();
      console.log("PayPal Order Created:", data);

      // Redirect user to PayPal for approval
      const approveUrl = data.links.find((link) => link.rel === "approve")?.href;
      if (approveUrl) {
        window.location.href = approveUrl; // Redirect to PayPal
      } else {
        throw new Error("No approval URL found.");
      }
    } catch (err) {
      console.error("Error creating PayPal order:", err);
      setError(err.message || "Failed to create order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)} className="w-40 py-2 bg-[#2a3e5f] text-white rounded-lg shadow hover:bg-[#131c2c] outline-none">
        Add Funds
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-jakarta z-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="w-full flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-xl">
                <IoClose />
              </button>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Add Funds</h2>
            </div>

            <p className="text-sm text-gray-500 mb-5">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>

            <div className="space-y-6">
              <div className="flex flex-row gap-5 w-full">
                <div className="w-1/2 space-y-2">
                  <label>Select Bank</label>
                  <select className="w-full p-2 border rounded-md" value={selectedCard} onChange={(e) => setSelectedCard(e.target.value)}>
                    <option value="">Select Card</option>
                    <option value="American Express">American Express</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                  </select>
                </div>
                <div className="w-1/2 space-y-2">
                  <label>Enter Amount</label>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    className="w-full p-2 border rounded-md"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div className="space-x-5">
                <button
                  className="px-10 py-2 text-white bg-[#2a3e5f] rounded-lg shadow hover:bg-[#131c2c] outline-none"
                  onClick={handleAddFunds}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Add Funds"}
                </button>
                <button
                  className="px-10 py-2 text-[#2a3e5f] border border-[#2a3e5f] rounded-lg shadow hover:bg-[#131c2c] hover:text-white outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
