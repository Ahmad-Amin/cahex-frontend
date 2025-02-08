import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Admin/Dashboard";
import Merchant from "./pages/Admin/Merchant";
import TransactionHistory from "./pages/Admin/TransactionHistory";
import ApiSdk from "./pages/Admin/ApiSdk";
import FraudDetection from "./pages/Admin/FraudDetection";
import Settings from "./pages/Admin/Settings";
import LoginForm from "./pages/Admin/LoginForm";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/admin-login" element={<LoginForm/>} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />  
          <Route path="/admin/merchants" element={<Merchant/>} />  
          <Route path="/admin/transactions" element={<TransactionHistory/>} />
          <Route path="/admin/api-sdk" element={<ApiSdk/>} />  
          <Route path="/admin/fraud-detection" element={<FraudDetection/>} />
          <Route path="/admin/settings" element={<Settings/>} />  
        </Routes>
    </Router>
  );
}
