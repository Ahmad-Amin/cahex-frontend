import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Admin/Navbar'
import DashboardAnalytics from '../../components/Admin/DashboardAnalytics'
import RecentActivity from '../../components/Admin/RecentActivity'
import TransactionDetails from '../../components/Admin/TransactionDetails'
import Revenue from '../../components/Admin/Revenue'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <div className='pt-16'>
        <Sidebar>
            <div className='w-full pb-10'>
                <DashboardAnalytics/>
                <RecentActivity/>
                <TransactionDetails/>
                <Revenue/>
            </div>
        </Sidebar>
        </div>
    </div>
  )
}

export default Dashboard