import React from 'react';
import type { Career } from '../../services/careerService';

interface CareerCardProps {
  career: Career;
  onEdit?: ((career: Career) => void) | undefined;
  onDelete?: ((id: number) => void) | undefined;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-gray-800">{career.nombre}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Duración: <span className="font-medium">{career.duracion} años</span>
      </p>
      <p className="text-sm text-gray-600">
        Título otorgado: <span className="font-medium">{career.tituloOtorgado}</span>
      </p>

      <div className="flex justify-end gap-3 mt-4">
        {onEdit && (
          <button
            onClick={() => onEdit(career)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(career.id)}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default CareerCard;
