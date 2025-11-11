// src/components/country/CountryCard.tsx
import React from 'react';
import type { Country } from '../../services/countryService';

export interface CountryCardProps {
  country: Country;
  onEdit?: ((country: Country) => void) | undefined;
  onDelete?: ((id: number) => void) | undefined;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-primary-DEFAULT">{country.nombre}</h3>

      <div className="mt-4 flex gap-2">
        {onEdit && (
          <button
            onClick={() => onEdit(country)}
            className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(country.id)}
            className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
