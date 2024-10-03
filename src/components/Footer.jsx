import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 text-center">
      <div className="flex justify-around flex-wrap px-5 py-2">
        {/* Useful Links Section */}
        <div className="mb-5">
          <h3 className="mb-4 text-lg font-semibold">Useful Links</h3>
          <ul className="list-none p-0">
            {['About Us', 'Contact Us', 'Help', 'Terms & Conditions', 'Privacy & Policy'].map((link) => (
              <li key={link} className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-5">
          <h3 className="mb-4 text-lg font-semibold">Services</h3>
          <ul className="list-none p-0">
            {['Listing Services', 'Liaison Services', 'Directory Services', 'Company Incorporation', 'Import & Export Services', 'Documentation Services'].map((service) => (
              <li key={service} className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="mb-5">
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center items-center">
            {['linkedin', 'instagram', 'facebook'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-white no-underline mx-2"
              >
                <i className={`fab fa-${platform} fa-2x`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="border-t border-white my-5"></div>

      {/* Footer Copyright */}
      <p className="m-0">Copyright © 2023 ZeroMiddleman.com. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
