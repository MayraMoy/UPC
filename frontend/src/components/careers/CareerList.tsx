import React from 'react';
import CareerCard from './CareerCard';
import type { Career } from '../../services/careerService';

interface CareerListProps {
  careers: Career[];
  onEdit?: (career: Career) => void;
  onDelete?: (id: number) => void;
}

const CareerList: React.FC<CareerListProps> = ({ careers, onEdit, onDelete }) => {
  if (careers.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay carreras registradas.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {careers.map((career) => (
        <CareerCard
          key={career.id}
          career={career}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CareerList;

