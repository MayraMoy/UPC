import React, { useEffect, useState } from "react";
import type { CreateMateriaDto } from "../../services/materiaService";

import { CareerService, type Career } from "../../services/careerService";

interface MateriaFormProps {
  onSubmit: (data: CreateMateriaDto) => Promise<void>;
  onCancel: () => void;
  initialData?: CreateMateriaDto | undefined;
}

const MateriaForm: React.FC<MateriaFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
}) => {
  const [nombre, setNombre] = useState(initialData?.nombre || "");
  const [carreraNombre, setCarreraNombre] = useState(
    initialData?.carreraNombre || ""
  );
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar todas las carreras disponibles
  useEffect(() => {
    CareerService.getAll()
      .then((res) => setCareers(res.data))
      .catch((err) => console.error("Error al obtener carreras:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ nombre, carreraNombre });
    setNombre("");
    setCarreraNombre("");
  };

  if (loading) return <p className="text-gray-500">Cargando carreras...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-gray-700">
        {initialData ? "Editar Materia" : "Registrar Materia"}
      </h2>

      {/* Nombre de la materia */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Nombre de la materia
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ej: Programación I"
          required
        />
      </div>

      {/* Selección de carrera */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Carrera
        </label>
        <select
          value={carreraNombre}
          onChange={(e) => setCarreraNombre(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Seleccione una carrera</option>
          {careers.map((career) => (
            <option key={career.id} value={career.nombre}>
              {career.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Botones */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          {initialData ? "Actualizar" : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default MateriaForm;
