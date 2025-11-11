import React from 'react';
import type { Localidad } from '../../services/localidadService';
import LocalidadCard from './LocalidadCard';

interface LocalidadListProps {
  localidades: Localidad[];
  onEdit?: (localidad: Localidad) => void;
  onDelete?: (id: number) => void;
}

const LocalidadList: React.FC<LocalidadListProps> = ({ localidades, onEdit, onDelete }) => {
  if (!localidades.length) {
    return <p className="text-gray-500 text-center">No hay localidades registradas.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {localidades.map(localidad => (
        <LocalidadCard
          key={localidad.id}
          localidad={localidad}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default LocalidadList;
