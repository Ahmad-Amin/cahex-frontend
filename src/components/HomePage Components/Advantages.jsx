import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const advantagesData = [
  { title: "Fast Transactions", content: "TRON blockchain processes transactions at high speeds, reducing wait times." },
  { title: "Low Fees", content: "Transactions on TRON have significantly lower fees compared to traditional payment methods." },
  { title: "Global Reach", content: "Businesses can access a worldwide audience without geographical restrictions." },
  { title: "Security", content: "Blockchain technology ensures secure and transparent transactions." },
  { title: "Increased Customer Base", content: "Cryptocurrency payments attract tech-savvy customers from around the world." }
];

const Advantages = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full text-white mt-10'>
      <div className='w-full relative bg-[#313d4f] rounded-xl overflow-hidden'>
        <div className='relative bg-[#313d4f] border-b border-white w-full h-12'>
          <div className='absolute bg-[#f5f6fa] h-12 w-48 rounded-b-2xl top-0 left-32'></div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col w-3/4 my-28 gap-5'>
            <h1 className='font-impact text-5xl w-4/5'>Advantages of Using the CAHEX Network for Payments</h1>
            <p className='font-manrope text-md w-full'>Per the TRON project, businesses that accept payments leveraging the TRON blockchain can enjoy numerous benefits, which include rapid transaction processing speed, minimal fees, and access to a global customer base:</p>
            <div>
              {advantagesData.map((advantage, index) => (
                <div key={index} className='bg-transparent border-t relative border-[#4c4c4c] rounded-xl'>
                  <div className='flex items-center justify-between h-12 cursor-pointer' onClick={() => toggleSection(index)}>
                    <div className='absolute w-1 h-1 bg-[#999999] left-2 top-2 rounded-full'></div>
                    <h1 className='font-jakarta ml-7'>{advantage.title}</h1>
                    {openIndex === index ? <FaMinus size={25} className='mr-7' /> : <FaPlus size={25} className='mr-7' />}
                  </div>
                  {openIndex === index && (
                    <p className='ml-7 mr-7 mb-3 text-gray-300'>{advantage.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src="/Images/shap5.png" alt="" className='absolute left-0 top-1/4 w-40' />
      </div>
    </div>
  );
};

export default Advantages;
