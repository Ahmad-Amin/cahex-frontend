import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Advantages = () => {
  return (
    <div className='w-full text-white mt-10'>
      <div className='w-full relative bg-[#313d4f] rounded-xl overflow-hidden'>
        <div className='relative bg-[#313d4f] border-b border-white w-full h-12'>
          <div className='absolute bg-[#f5f6fa] h-12 w-48 rounded-b-2xl top-0 left-32 '>
          </div>
        </div>
        <div className='w-full flex justify-center'>
        <div className='flex flex-col w-3/4 my-28 gap-5'>
          <h1 className='font-impact text-5xl w-4/5'>Advantages of Using the CAHEX
          Network for Payments</h1>
          <p className='font-manrope text-md w-full'>Per the TRON project, businesses that accept payments leveraging the TRON blockchain can enjoy numerous benefits, which include rapid
          transaction processing speed, minimal fees, and access to a global customer base:</p>
          <div>
            <div className='bg-transparent relative border-t border-[#4c4c4c] rounded-xl flex items-center justify-between h-12'>
              <div className='absolute w-1 h-1 bg-[#999999] left-2 top-2 rounded-full'></div>
              <h1 className='font-jakarta ml-7'>Fast Transactions:</h1>
              <FaPlus size={25} className='mr-7'/>
            </div>
            <div className='bg-transparent border-t relative border-[#4c4c4c] rounded-xl flex items-center justify-between h-12'>
            <div className='absolute w-1 h-1 bg-[#999999] left-2 top-2 rounded-full'></div>
              <h1 className='font-jakarta ml-7'>Low Fees:</h1>
              <FaPlus size={25} className='mr-7'/>
            </div>
            <div className='bg-transparent border-t relative border-[#4c4c4c] rounded-xl flex items-center justify-between h-12'>
            <div className='absolute w-1 h-1 bg-[#999999] left-2 top-2 rounded-full'></div>
              <h1 className='font-jakarta ml-7'>Global Reach:</h1>
              <FaPlus size={25} className='mr-7'/>
            </div>
            <div className='bg-transparent border-t relative border-[#4c4c4c] rounded-xl flex items-center justify-between h-12'>
            <div className='absolute w-1 h-1 bg-[#999999] left-2 top-2 rounded-full'></div>
              <h1 className='font-jakarta ml-7'>Security:</h1>
              <FaPlus size={25} className='mr-7'/>
            </div>
            <div className='bg-transparent border-t relative border-[#4c4c4c] rounded-xl flex items-center justify-between h-12'>
            <div className='absolute w-1 h-1 bg-[#999999] left-2 top-2 rounded-full'></div>
              <h1 className='font-jakarta ml-7'>Increased Customer Base:</h1>
              <FaPlus size={25} className='mr-7'/>
            </div>
          </div>
        </div>
        </div>
        <img src="Images/shap5.png" alt="" className='absolute left-0 top-1/4 w-40' />
      </div>
    </div>
  )
}

export default Advantages