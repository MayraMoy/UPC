import React from 'react';
import type { Localidad } from '../../services/localidadService';

export interface LocalidadCardProps {
  localidad: Localidad;
  onEdit?: ((localidad: Localidad) => void) | undefined;
  onDelete?: ((id: number) => void) | undefined;
}

const LocalidadCard: React.FC<LocalidadCardProps> = ({ localidad, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{localidad.nombre}</h3>
        <p className="text-sm text-gray-500">País ID: {localidad.paisId}</p>
      </div>
      <div className="flex gap-3">
        {onEdit && (
          <button
            onClick={() => onEdit(localidad)}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(localidad.id)}
            className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default LocalidadCard;
