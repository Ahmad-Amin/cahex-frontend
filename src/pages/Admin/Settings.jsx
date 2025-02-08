import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Sidebar'
import ProfileSettings from '../../components/Admin/Settings/ProfileSettings'
import AccountSecurity from '../../components/Admin/Settings/AccountSecurity'
import UserRolesManagement from '../../components/Admin/Settings/UserRolesManagement'
import SystemPreferences from '../../components/Admin/Settings/SystemPreferences'

const Settings = () => {
  return (
    <div>
        <Navbar/>
        <div className='pt-16'>
            <Sidebar>
                <div className='space-y-7 pb-5'>
                    <ProfileSettings/>
                    <AccountSecurity/>
                    <UserRolesManagement/>
                    <SystemPreferences/>
                </div>
            </Sidebar>
        </div>
    </div>
  )
}

export default Settings