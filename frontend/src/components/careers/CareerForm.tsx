import React, { useState, type FormEvent } from 'react';
import type { Career, CreateCareerDto } from '../../services/careerService';

interface CareerFormProps {
  initialData?: Career | undefined; // ✅ clave: incluimos | undefined explícitamente
  onSubmit: (data: CreateCareerDto) => Promise<void>;
  onCancel: () => void;
}

export default function CareerForm({ initialData, onSubmit, onCancel }: CareerFormProps) {
  const [formData, setFormData] = useState<CreateCareerDto>({
    nombre: initialData?.nombre ?? '',
    duracion: initialData?.duracion ?? 1,
    tituloOtorgado: initialData?.tituloOtorgado ?? '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'duracion' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {initialData ? 'Editar Carrera' : 'Registrar Nueva Carrera'}
      </h2>

      {/* Nombre */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre de la carrera
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Duración */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Duración (en años)
        </label>
        <input
          type="number"
          name="duracion"
          value={formData.duracion}
          onChange={handleChange}
          required
          min={1}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Título Otorgado */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Título otorgado
        </label>
        <input
          type="text"
          name="tituloOtorgado"
          value={formData.tituloOtorgado}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Botones */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-700"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          {initialData ? 'Guardar Cambios' : 'Crear Carrera'}
        </button>
      </div>
    </form>
  );
}

