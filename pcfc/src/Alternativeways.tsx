import React, { useState, useRef, useEffect } from 'react';
import PaymentForm from './payment'; // Assuming you have a PaymentForm component defined
import { AuthContext } from './auth/AuthProvider';
import { useContext } from 'react';

// Dummy data for companies
const companies = [
  {
    name: 'GreenTech Solutions',
    description:
      'GreenTech Solutions is dedicated to developing innovative technologies for carbon reduction and sustainable energy solutions.',
    website: 'https://greentechsolutionsgroup.com/',
    logoUrl: './download.jpeg', // Placeholder URL for logo
  },
  {
    name: 'EcoFriendly Ventures',
    description:
      'EcoFriendly Ventures focuses on promoting eco-friendly practices and offers consultancy services for carbon footprint reduction.',
    website: 'https://www.ecofriendlyventures.com',
    logoUrl: './heyyy.jpg', // Placeholder URL for logo
  },
  {
    name: 'CarbonNeutral Co.',
    description:
      'CarbonNeutral Co. specializes in offsetting carbon emissions through reforestation and renewable energy projects.',
    website: 'https://www.carbonneutral.com/how/define',
    logoUrl: './images.png', // Placeholder URL for logo
  },
  {
    name: 'Sustainable Futures Ltd.',
    description:
      'Sustainable Futures Ltd. provides sustainable business solutions and environmental consulting services.',
    website: 'https://www.sustainable-futures.co/',
    logoUrl: './imagess.png', // Placeholder URL for logo
  },
];

const CompanyCard = ({ name, description, website, logoUrl, handleClick }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={logoUrl}
            alt={name}
            className="h-16 w-16 rounded-full mr-4 transition-transform duration-300 transform hover:rotate-12"
          />
          <div>
            <h2 className="text-lg font-bold text-green-800">{name}</h2>
            <p className="text-sm text-green-700">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 inline-block mr-2"
          >
            Visit Website
          </a>
          {isAuthenticated && (
            <button
              onClick={(e) => handleClick(e)}
              className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 inline-block"
            >
              Donate Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CompanyList = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [showPaymentForm, setPaymentForm] = useState(false);
  const paymentFormRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (paymentFormRef.current && !paymentFormRef.current.contains(event.target)) {
        setPaymentForm(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setPaymentForm(!showPaymentForm); // Toggle payment form visibility
  };

  return (
    <div className="bg-green-100 mt-0 p-12">
      {showPaymentForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={paymentFormRef}>
            <PaymentForm />
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold text-green-900 mb-2 text-center">Featured Companies</h1>
      <p className="text-center text-green-800">
        You can reduce your footprint points and ranking by donating to any companies listed below.
      </p>
      <div className="max-w-4xl mt-5 mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
