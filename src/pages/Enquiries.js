import React from 'react'
import country from '../assets/banner/Country.png'
const Enquiries = () => {
    const cardsData = [
        {
          countryFlag: country, // Update with the correct flag image path
          title: 'Wanted : Fresh fruits like green banana',
          date: 'Sep 20, 2024',
          buyer: 'Buyer From India',
          verified: 'Verified',
          review: '4.5 / 5 review',
          description:
            'We are seeking quotations from reputable suppliers for the procurement of high-quality fresh fruits. Our goal is to ensure a consistent supply of fresh produce to meet our business needs and customer demands.',
        },
        {
          countryFlag: country,
          title: 'Wanted : Fresh fruits like mango',
          date: 'Sep 22, 2024',
          buyer: 'Buyer From India',
          verified: 'Verified',
          review: '4.7 / 5 review',
          description:
            'Looking for suppliers who can provide ripe mangoes in bulk. Please reach out if you can offer competitive pricing.',
        },
        {
          countryFlag: country,
          title: 'Wanted : Organic apples',
          date: 'Sep 25, 2024',
          buyer: 'Buyer From India',
          verified: 'Verified',
          review: '4.6 / 5 review',
          description:
            'We are interested in sourcing organic apples. Need details about your supply capacity and pricing.',
        },
        {
          countryFlag: country,
          title: 'Wanted : Fresh grapes',
          date: 'Sep 27, 2024',
          buyer: 'Buyer From India',
          verified: 'Verified',
          review: '4.8 / 5 review',
          description:
            'Seeking suppliers for fresh grapes. Contact us with your best offers.',
        },
      ];
  return (
    <div className='mt-5 m-5'>
         <div className='flex items-center justify-center text-red-500'>
            <h1 className='text-5xl font-medium'> Explore Products with High Demand / Hot Enquiries</h1>
        </div>
        <div className='flex items-center justify-center px-5'>
        <div className="p-8 border-none">
            <div className="grid grid-cols-2 gap-5 p-5">
                {cardsData.map((card, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center mb-2 gap-5 p-5">
                        <img src={card.countryFlag} alt="Country Flag" className="w-8 h-auto gap-3" /><span>IN</span>
                        <div className='flex items-center justify-between w-full'>
                            <div>
                              <h3 className="text-lg font-semibold">{card.title}</h3>
                            </div>
                            <div className="text-gray-500 text-sm">
                                <h1>{card.date}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex  items-center mb-2 gap-5">
                    <p className="font-bold">{card.buyer}</p>
                    <div className="flex items-center">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">{card.verified}</span>
                        <span className="text-orange-600 text-sm ml-2">{card.review}</span>
                    </div>
                    </div>
                    <p className="mb-2">{card.description} <span className='underline text-blue-500'>More</span></p>
                        
                </div>
                ))}
            </div>
         </div>
        </div>
    </div>
  )
}

export default Enquiries