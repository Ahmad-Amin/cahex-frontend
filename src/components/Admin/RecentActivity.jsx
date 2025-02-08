import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import { TbContract } from "react-icons/tb";

const RecentActivity = () => {
  const activities = [
    {
      type: "Deposit",
      icon: <PiHandDeposit size={22} />,
      merchant: "Neptune Play",
      timestamp: "12.09.2019 - 12:53 PM",
      amount: "$54,000",
      status: "Success",
    },
    {
      type: "Withdrawal",
      icon: <PiHandWithdraw size={22} />,
      merchant: "Casino de Monte-Carlo",
      timestamp: "12.09.2019 - 12:53 PM",
      amount: "$44,000",
      status: "Pending",
    },
    {
      type: "Contract",
      icon: <TbContract size={22} />,
      merchant: "The Venetian, Cotai",
      timestamp: "12.09.2019 - 12:53 PM",
      amount: "$54,000",
      status: "Failed",
    },
  ];

  const statusColors = {
    Success: "bg-green-500",
    Pending: "bg-yellow-400",
    Failed: "bg-red-500",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
      <h2 className="text-2xl mb-4 font-impact">Recent Activities</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-jakarta">
          <thead className="rounded-2xl py-5">
            <tr className="bg-[#f1f4f9] text-left text-sm font-medium rounded-xl">
              <th className="p-5">Activity Type</th>
              <th className="p-5">Merchants</th>
              <th className="p-5">Timestamp</th>
              <th className="p-5">Amount</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-b">
                <td className="p-5 flex items-center gap-2">
                  {activity.icon} {activity.type}
                </td>
                <td className="p-3">{activity.merchant}</td>
                <td className="p-3">{activity.timestamp}</td>
                <td className="p-3">{activity.amount}</td>
                <td className="p-3">
                  <span
                    className={`text-white text-sm px-3 py-1 rounded-full ${statusColors[activity.status]}`}
                  >
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
