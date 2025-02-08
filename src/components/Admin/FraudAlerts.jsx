const FraudAlerts = () => {
  const alerts = [
    {
    id:1,
    casino: "Neptune Play",  
    activityType: "Deposit",
    timestamp: "12.09.2019 - 12:53 PM",
    status: "Resolved",
    },
    {
        id:1,
        casino: "Neptune Play",  
        activityType: "Withdrawal",
        timestamp: "12.09.2019 - 12:53 PM",
        status: "Reviewed",
        },
    {
        id:1,
        casino: "Neptune Play",  
        activityType: "User Login",
        timestamp: "12.09.2019 - 12:53 PM",
        status: "Pending",
        
    },
  ];

  const statusColors = {
    Resolved: "bg-green-500",
    Reviewed: "bg-yellow-400",
    Pending: "bg-red-500",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-5">
      <h2 className="text-2xl mb-4 font-impact">Fraud Alerts</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-jakarta">
          <thead className="rounded-2xl py-5">
            <tr className="bg-[#f1f4f9] text-left text-sm font-medium rounded-xl">
              <th className="p-5">Alert ID</th>
              <th className="p-5">Casino/Player</th>
              <th className="p-5">Timestamp</th>
              <th className="p-5">Activity Type</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index} className="border-b">
                <td className="p-5 flex items-center gap-2">
                 {alert.id}
                </td>
                <td className="p-3">{alert.casino}</td>
                <td className="p-3">{alert.timestamp}</td>
                <td className="p-3">{alert.activityType}</td>
                <td className="p-3">
                  <span
                    className={`text-white text-sm px-3 py-1 rounded-full ${statusColors[alert.status]}`}
                  >
                    {alert.status}
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

export default FraudAlerts;
