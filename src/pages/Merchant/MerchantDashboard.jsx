import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Merchant/Sidebar'
import MerchantAnalytics from '../../components/Merchant/MerchantAnalytics'
import GrossVolumeGraph from '../../components/Merchant/GrossVolumeGraph'
import PaymentInsights from '../../components/Merchant/PaymentInsights'

const MerchantDashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-16'>
        <Sidebar>
        <h1 className="font-impact text-4xl">Dashboard</h1>
        <div className='space-y-7 pb-5'>
          <MerchantAnalytics/>
          <GrossVolumeGraph/>
          <PaymentInsights/>
        </div>

        </Sidebar>
      </div>
    </div>
  )
}

export default MerchantDashboard