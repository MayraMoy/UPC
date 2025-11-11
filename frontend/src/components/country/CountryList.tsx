// src/components/country/CountryList.tsx
import React from 'react';
import CountryCard from './CountryCard';
import type { Country } from '../../services/countryService';

export interface CountryListProps {
  countries: Country[];
  onEdit?: ((country: Country) => void) | undefined;
  onDelete?: ((id: number) => void) | undefined;
}

const CountryList: React.FC<CountryListProps> = ({ countries, onEdit, onDelete }) => {
  if (countries.length === 0) {
    return <p className="text-gray-500 text-center py-6">No hay países registrados.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CountryList;

