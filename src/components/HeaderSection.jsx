import React, { useState } from 'react';
import dropdown from '../assets/banner/dropdown.png';

const HeaderSection = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showBenefitsDropdown, setShowBenefitsDropdown] = useState(false);
  const [showListYourBusinessDropdown, setShowListYourBusinessDropdown] = useState(false);
  const [showPostRequirementsDropdown, setShowPostRequirementsDropdown] = useState(false);

  const services = ["Listing Service", "Liaison service", "Import & Export service", "Directory Services", 'Incorporate services'];
  const benefits = ["Benefit 1", "Benefit 2", "Benefit 3"];
  const listYourBusiness = ["Listing 1", "Listing 2", "Listing 3"];
  const postRequirements = ["Requirement 1", "Requirement 2", "Requirement 3"];

  return (
    <div className="relative w-full shadow-md border-t border-gray-300">
      <div className="flex justify-center items-center gap-16 p-4 ">
        {/* Services Dropdown */}
        <div 
          className="flex items-center justify-center relative"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <div className='flex items-center justify-center'>
            <h1 className='text-white cursor-pointer'>Services</h1>
            <img src={dropdown} alt="dropdown" className="ml-2 mt-1 cursor-pointer" />
          </div>
          {showServicesDropdown && (
            <div className="absolute left-0 mt-[200px] w-[600px] bg-white shadow-lg rounded-md z-10">
              <div className="p-2 font-bold">Listing Services</div>
              <div className="m-2 mx-5 flex items-center justify-between gap-8">
                <div>
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className=" cursor-pointer hover:underline" // Add underline on hover
                    >
                      {service}
                    </div>
                  ))}
                </div>
                <div>
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className="cursor-pointer hover:underline" // Add underline on hover
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Benefits Dropdown */}
        <div 
          className="flex items-center relative"
          onMouseEnter={() => setShowBenefitsDropdown(true)}
          onMouseLeave={() => setShowBenefitsDropdown(false)}
        >
          <span className="text-white text-base font-normal cursor-pointer">Benefits</span>
          <img src={dropdown} alt="dropdown" className="ml-2 mt-1 cursor-pointer" />
          {showBenefitsDropdown && (
            <div className="absolute left-0 mt-[150px] w-[600px] bg-white shadow-lg rounded-md z-10">
              <div className="p-2 font-bold">Benefits List</div>
              <div className="p-2">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="cursor-pointer hover:underline" // Add underline on hover
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* List Your Business Dropdown */}
        <div 
          className="flex items-center relative"
          onMouseEnter={() => setShowListYourBusinessDropdown(true)}
          onMouseLeave={() => setShowListYourBusinessDropdown(false)}
        >
          <span className="text-white text-base font-normal cursor-pointer">List your Business</span>
          <img src={dropdown} alt="dropdown" className="ml-2 mt-1 cursor-pointer" />
          {showListYourBusinessDropdown && (
            <div className="absolute left-0 mt-[150px] w-[600px] bg-white shadow-lg rounded-md z-10">
              <div className="p-2 font-bold">List Your Business Options</div>
              <div className="p-2">
                {listYourBusiness.map((listing, index) => (
                  <div 
                    key={index} 
                    className=" cursor-pointer hover:underline" // Add underline on hover
                  >
                    {listing}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Post Your Requirements Dropdown */}
        <div 
          className="flex items-center relative"
          onMouseEnter={() => setShowPostRequirementsDropdown(true)}
          onMouseLeave={() => setShowPostRequirementsDropdown(false)}
        >
          <span className="text-white text-base font-normal cursor-pointer">Post your Requirements</span>
          <img src={dropdown} alt="dropdown" className="ml-2 mt-1 cursor-pointer" />
          {showPostRequirementsDropdown && (
            <div className="absolute left-0 mt-[150px] w-[600px] bg-white shadow-lg rounded-md z-10">
              <div className="p-2 font-bold">Post Your Requirements</div>
              <div className="p-2">
                {postRequirements.map((requirement, index) => (
                  <div 
                    key={index} 
                    className="cursor-pointer hover:underline" // Add underline on hover
                  >
                    {requirement}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Explore B2B Buyer Directory */}
        <div className="bg-[#6A1237] text-white text-base font-normal py-2 px-4 flex items-center cursor-pointer">
          Explore B2B Buyer Directory
        </div>
        
        {/* Explore B2B Supplier Directory */}
        <div className="bg-[#6A1237] text-white text-base font-normal py-2 px-4 flex items-center cursor-pointer">
          Explore B2B Supplier Directory
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
