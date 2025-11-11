import React, { useState } from 'react';
import type { FormEvent } from 'react';
import type { Localidad, CreateLocalidadDto } from '../../services/localidadService';

interface LocalidadFormProps {
  initialData?: Localidad | undefined;
  onSubmit: (data: CreateLocalidadDto) => Promise<void>;
  onCancel: () => void;
}

const LocalidadForm: React.FC<LocalidadFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<CreateLocalidadDto>({
    nombre: initialData?.nombre ?? '',
    paisId: initialData?.paisId ?? 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'paisId' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {initialData ? 'Editar Localidad' : 'Registrar Localidad'}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">País ID</label>
        <input
          type="number"
          name="paisId"
          value={formData.paisId}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {initialData ? 'Guardar Cambios' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};

export default LocalidadForm;
