// src/components/country/CountryForm.tsx
import React, { useState, type FormEvent } from 'react';
import type { Country, CreateCountryDto } from '../../services/countryService';

export interface CountryFormProps {
  initialData?: Country | undefined;
  onSubmit: (data: CreateCountryDto) => Promise<void>;
  onCancel: () => void;
}

const CountryForm: React.FC<CountryFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [nombre, setNombre] = useState(initialData?.nombre ?? '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ nombre });
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
    >
      <h2 className="text-lg font-bold text-primary-DEFAULT mb-4">
        {initialData ? 'Editar País' : 'Nuevo País'}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del País</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default CountryForm;
