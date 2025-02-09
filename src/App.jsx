import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Admin/Dashboard";
import Merchant from "./pages/Admin/Merchant";
import TransactionHistory from "./pages/Admin/TransactionHistory";
import ApiSdk from "./pages/Admin/ApiSdk";
import FraudDetection from "./pages/Admin/FraudDetection";
import Settings from "./pages/Admin/Settings";
import LoginForm from "./pages/Admin/LoginForm";
import MerchantSignin from "./pages/Merchant/KYC/MerchantSignin";
import MerchantSignup from "./pages/Merchant/KYC/MerchantSignup";
import PersonalInfo from "./pages/Merchant/KYC/PersonalInfo";
import CreditCard from "./pages/Merchant/KYC/CreditCard";
import AddressInfo from "./pages/Merchant/KYC/AddressInfo";
import Success from "./pages/Merchant/KYC/Success";
import MerchantDashboard from "./pages/Merchant/MerchantDashboard";
import MerchantSettings from "./pages/Merchant/MerchantSettings";
import MerchantUsers from "./pages/Merchant/MerchantUsers";
import MerchantWallet from "./pages/Merchant/MerchantWallet";
import MerchantTransaction from "./pages/Merchant/MerchantTransaction";
import MerchantApi from "./pages/Merchant/MerchantApi";

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

          <Route path="/merchant/signin" element={<MerchantSignin/>} /> 
          <Route path="/merchant/signup" element={<MerchantSignup/>} />
          <Route path="/merchant/signup/personal-info" element={<PersonalInfo/>} />  
          <Route path="/merchant/signup/credit-info" element={<CreditCard/>} />
          <Route path="/merchant/signup/address-info" element={<AddressInfo/>} />
          <Route path="/merchant/signup/kyc-success" element={<Success/>} />

          <Route path="/merchant/dashboard" element={<MerchantDashboard/>} />
          <Route path="/merchant/settings" element={<MerchantSettings/>} />
          <Route path="/merchant/users" element={<MerchantUsers/>} />
          <Route path="/merchant/wallet" element={<MerchantWallet/>} />
          <Route path="/merchant/transaction" element={<MerchantTransaction/>} />
          <Route path="/merchant/api-connection" element={<MerchantApi/>} />  
        </Routes>
    </Router>
  );
}
