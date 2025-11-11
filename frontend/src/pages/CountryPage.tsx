// src/pages/CountryPage.tsx
import React, { useEffect, useState } from 'react';
import { CountryService, type Country, type CreateCountryDto } from '../services/countryService';
import CountryList from '../components/country/CountryList';
import CountryForm from '../components/country/CountryForm';
import { useNavigate } from 'react-router-dom';


const CountryPage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();


  const fetchCountries = async () => {
    const res = await CountryService.getAll();
    setCountries(res.data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSubmit = async (data: CreateCountryDto) => {
    if (selectedCountry) {
      await CountryService.update(selectedCountry.id, data);
    } else {
      await CountryService.create(data);
    }
    await fetchCountries();
    setShowForm(false);
    setSelectedCountry(undefined);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Deseas eliminar este país?')) {
      await CountryService.delete(id);
      await fetchCountries();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
        >
          ← Volver al Dashboard
        </button>

        <h1 className="text-2xl font-bold text-primary-DEFAULT">Gestión de Países</h1>
        <button
          onClick={() => {
            setSelectedCountry(undefined);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Nuevo País
        </button>
      </div>

      {showForm ? (
        <CountryForm
          initialData={selectedCountry}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setSelectedCountry(undefined);
          }}
        />
      ) : (
        <CountryList
          countries={countries}
          onEdit={(country) => {
            setSelectedCountry(country);
            setShowForm(true);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CountryPage;

