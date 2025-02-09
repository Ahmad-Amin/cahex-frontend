import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import Sidebar from '../../components/Merchant/Sidebar'
import ConnectBanks from '../../components/Merchant/ConnectBanks'
import MyFunds from '../../components/Merchant/MyFunds'
import OverviewBalanceChart from '../../components/Merchant/OverviewBalanceChart'
import WalletActivityTable from '../../components/Merchant/WalletActivityTable'
const MerchantWallet = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-16'>
        <Sidebar>
        <h1 className="font-impact text-4xl pb-4">Wallet</h1>
        <div className='space-y-7'>
          <ConnectBanks/>
          <MyFunds/>
          <OverviewBalanceChart/>
          <WalletActivityTable/>
        </div>

        </Sidebar>
      </div>
    </div>
  )
}

export default MerchantWallet