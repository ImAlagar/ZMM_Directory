import React from 'react'
import think from '../assets/banner/think.png'
const WhyChooseUs = () => {
  return (
    <div className='w-full h-full mt-5'>
        <div className='flex items-center justify-center text-red-500'>
            <h1 className='text-5xl font-medium'> Why Choose ZeroMiddleMan.com</h1>
        </div>
        <div className='flex items-center justify-between mt-10 px-5 py-3'>
            <div className='p-4 skew-y-2 ml-16 '>
                <div className='border border-none rounded-md shadow-2xl bg-white p-5 h-64 w-[850px]'>
                    <div className=''>
                      <h1 className='font-bold text-black text-xl'>“Introducing Zeromiddleman.com: <span className='text-red-500 text-xl'>Connecting B2B Buyers Directly with the Source</span></h1> 
                    </div>
                    <div className= 'mt-4'>
                    <p>Tired of inflated prices and low margins due to unnecessary middlemen? Zeromiddleman.com is here to change that. Our platform completely removes the need for brokers, agents, distributors, exporters, and other intermediaries who often drive up costs in the supply chain. By doing so, we help sellers from the primary sector (agriculture, forestry, fishing, and producers) and the secondary sector (manufacturing and industry) reach buyers directly, worldwide.</p>
                    <p>Our mission is simple: connect B2B buyers with the original source—no middlemen, no inflated costs.</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img src={think} alt="think" />
            </div>
        </div>
        <div className='flex items-center justify-between mt-10 px-5 py-3'>
        <div className='w-full'>
                <img src={think} alt="think" />
            </div>
            <div className='p-4 skew-y-5 ml-16 '>
                <div className='border border-none rounded-md shadow-2xl bg-white p-5 h-64 w-[850px]'>
                    <div className=''>
                      <h1 className='font-bold text-black text-xl'>“Introducing Zeromiddleman.com: <span className='text-red-500 text-xl'>Connecting B2B Buyers Directly with the Source</span></h1> 
                    </div>
                    <div className= 'mt-4'>
                    <p>Tired of inflated prices and low margins due to unnecessary middlemen? Zeromiddleman.com is here to change that. Our platform completely removes the need for brokers, agents, distributors, exporters, and other intermediaries who often drive up costs in the supply chain. By doing so, we help sellers from the primary sector (agriculture, forestry, fishing, and producers) and the secondary sector (manufacturing and industry) reach buyers directly, worldwide.</p>
                    <p>Our mission is simple: connect B2B buyers with the original source—no middlemen, no inflated costs.</p>
                    </div>
                </div>
            </div>
           
        </div>
  

    </div>
  )
}

export default WhyChooseUs