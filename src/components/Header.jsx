import React from 'react';
import call from '../assets/banner/call.png'
import logo from '../assets/banner/logo.png'

function Header() {
 const menuItems = ['Home', 'Service', 'About', 'Contact', 'Help', 'Gallery', 'Team'];
  return (
    <div className="w-full h-[130px]">
        <div className='flex'>
            <div>
                <img
                    className="w-[200px] h-[128px] shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
                    src={logo}
                    alt="Logo"
                    />
            </div>
            <div className='w-full'>
                <div className=' mx-7 h-[50px] flex items-center justify-between'>
                    <div className='flex ml-2'>
                        <img src={call} alt="call" />
                         <p>+1 222-555-33-99</p>
                    </div>
                    <div className="">
                        {/* Flex container for the whole navbar */}
                        <div className="flex items-center justify-between">
                            <ul className="flex space-x-4">
                            {/* Mapping through the menuItems array */}
                            {menuItems.map((item, index) => (
                                <li key={index} className="list-none">
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-blue-500"
                                >
                                    {item}
                                </a>
                                </li>
                            ))}
                            </ul>
      </div>
                    </div>
                </div>
                <hr />
                <div className='w-full '>
                   <div className='mx-7 h-[76px] flex items-center justify-between'>
                   <div>
                          {/* Buyer and Seller buttons */}
                        <div className="flex gap-[14px] rounded-full px-[14px] py-[11px] shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
                        <div className="flex items-center justify-center rounded-[5px] px-[14px]">
                            <div className="flex items-center gap-[7px]">
                            <div className="relative w-[11px] h-[11px]">
                                <div className="absolute w-[11px] h-[11px] rounded-full border border-[#0C92CC]"></div>
                                <div className="absolute w-[7px] h-[7px] bg-[#0C92CC] rounded-full top-[2px] left-[2px]"></div>
                            </div>
                            <div className="text-[#0C92CC] text-[16px] font-medium">Buyer</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded-[5px] px-[14px]">
                            <div className="flex items-center gap-[7px]">
                            <div className="w-[11px] h-[11px] rounded-full border border-[#0C92CC]"></div>
                            <div className="text-[#0C92CC] text-[16px] font-medium">Seller</div>
                            </div>
                        </div>
                        </div>
                   </div>
                    <div>
                        <div className="relative w-[628px] h-[40px] bg-white border border-[#333] rounded-[24px]">
                            <div className="absolute left-[16px] top-1/2 transform -translate-y-1/2 text-[#C1BEBE] text-[14px]">
                                <input type="text" placeholder='looking for...' />
                            </div>
                            <div className="absolute right-0 top-0 h-full flex items-center justify-center bg-[#FF0000] rounded-[24px] px-[20px]">
                                <div className="w-[17px] h-[15px] bg-white mr-[6px]"></div>
                                <div className="text-white font-bold text-[16px]">Search</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-[10px]">
                            <button className="w-[119px] h-[40px] bg-white border border-[#333] rounded-full shadow-[0px_2px_3px_rgba(0,0,0,0.25)] font-bold text-[16px]">
                            Sign in
                            </button>
                            <button className="w-[119px] h-[40px] bg-[#FF0000] rounded-full shadow-[0px_2px_3px_rgba(0,0,0,0.25)] text-white font-bold text-[16px]">
                            Register
                            </button>
                        </div>
                    </div>
                   </div>
                </div>
                <hr />
            </div>
         </div>    
    </div>
  );
}

export default Header;
