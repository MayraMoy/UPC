import type { Estudiante } from "../../services/studentService";

interface StudentListProps {
  students: Estudiante[];
  onEdit: (student: Estudiante) => void;
  onDeactivate: (id: number) => void;
  onReactivate: (id: number) => void;
}

const StudentList = ({ students, onEdit, onDeactivate, onReactivate }: StudentListProps) => {
  if (!students.length) return <p>No hay estudiantes registrados.</p>;

  return (
    <table className="w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Nombre</th>
          <th className="p-2">DNI</th>
          <th className="p-2">Estado</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id} className="border-t border-gray-300">
            <td className="p-2">{s.nombres} {s.apellidos}</td>
            <td className="p-2">{s.dni}</td>
            <td className="p-2">{s.estado}</td>

            <td className="p-2 flex gap-2">
              <button
                onClick={() => onEdit(s)}
                className="px-2 py-1 bg-blue-600 text-white rounded"
              >
                Editar
              </button>

              {s.estado === "Activo" ? (
                <button
                  onClick={() => onDeactivate(s.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Desactivar
                </button>
              ) : (
                <button
                  onClick={() => onReactivate(s.id)}
                  className="px-2 py-1 bg-green-600 text-white rounded"
                >
                  Reactivar
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
