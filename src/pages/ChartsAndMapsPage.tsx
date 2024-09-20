import React from 'react';
import Charts from '../components/Charts';
import Map from '../components/Map';
import { useNavigate } from 'react-router-dom';

const ChartsAndMapsPage: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-600 mb-8 text-center">
        Charts and Maps
      </h1>
      <div className="text-center mt-8 mb-10">
        <button
          onClick={handleNavigate}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Contacts Page
        </button>
      </div>
      <Charts />
      <Map />
    </div>
  );
};

export default ChartsAndMapsPage;
