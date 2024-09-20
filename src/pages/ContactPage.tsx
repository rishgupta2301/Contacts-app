import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/charts-and-maps');
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
        Contact Page
      </h1>
      <div className="text-center mt-8 mb-10">
        <button
          onClick={handleNavigate}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Charts and Maps
        </button>
      </div>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactPage;
