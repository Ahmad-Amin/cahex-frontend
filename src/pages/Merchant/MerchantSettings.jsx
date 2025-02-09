import React from "react";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Merchant/Sidebar";
import ProfileSettings from '../../components/Admin/Settings/ProfileSettings'
import AccountSecurity from '../../components/Admin/Settings/AccountSecurity'
import UserRolesManagement from '../../components/Admin/Settings/UserRolesManagement'
import SystemPreferences from '../../components/Admin/Settings/SystemPreferences'
const MerchantSettings = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Sidebar>
          <h1 className="font-impact text-4xl pb-4">Settings</h1>

          <div className='space-y-7 pb-5'>
                    <ProfileSettings/>
                    <AccountSecurity/>
                    <UserRolesManagement/>
                    <SystemPreferences/>
                </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default MerchantSettings;
