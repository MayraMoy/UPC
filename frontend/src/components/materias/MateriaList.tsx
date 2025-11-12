import React from "react";
import MateriaCard from "./MateriaCard";
import type { Materia } from "../../services/materiaService";

interface MateriaListProps {
  materias: Materia[];
  onEdit: (materia: Materia) => void;
  onDelete: (id: number) => void;
}

const MateriaList: React.FC<MateriaListProps> = ({ materias, onEdit, onDelete }) => {
  if (!materias || materias.length === 0) {
    return <p className="text-center text-gray-500 py-8">No hay materias registradas.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {materias.map((materia) => (
        <MateriaCard
          key={materia.id}
          materia={materia}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default MateriaList;
