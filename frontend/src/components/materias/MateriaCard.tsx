import React from "react";
import type { Materia } from "../../services/materiaService";

interface MateriaCardProps {
  materia: Materia;
  onEdit: (materia: Materia) => void;
  onDelete: (id: number) => void;
}

const MateriaCard: React.FC<MateriaCardProps> = ({ materia, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-semibold">{materia.nombre}</h2>
      <p className="text-gray-600">Carrera: {materia.carrera?.nombre || "Sin carrera"}</p>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEdit(materia)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(materia.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default MateriaCard;
