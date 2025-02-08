import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Admin/Dashboard";
import Merchant from "./pages/Admin/Merchant";
import TransactionHistory from "./pages/Admin/TransactionHistory";
import ApiSdk from "./pages/Admin/ApiSdk";
import FraudDetection from "./pages/Admin/FraudDetection";
import Settings from "./pages/Admin/Settings";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />  
          <Route path="/merchants" element={<Merchant/>} />  
          <Route path="/transactions" element={<TransactionHistory/>} />
          <Route path="/api-sdk" element={<ApiSdk/>} />  
          <Route path="/fraud-detection" element={<FraudDetection/>} />
          <Route path="/settings" element={<Settings/>} />  
        </Routes>
    </Router>
  );
}
