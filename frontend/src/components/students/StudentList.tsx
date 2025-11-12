import type { Estudiante } from "../../services/studentService";

interface StudentListProps {
  students: Estudiante[];
  onEdit: (student: Estudiante) => void;
  onDelete: (id: number) => void; // 👈 agregar esta línea
}

const StudentList: React.FC<StudentListProps> = ({ students, onEdit, onDelete }) => {
  if (!students.length) return <p>No hay estudiantes registrados.</p>;

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          <th className="border px-4 py-2">Nombre</th>
          <th className="border px-4 py-2">DNI</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td className="border px-4 py-2">
              {student.nombres} {student.apellidos}
            </td>
            <td className="border px-4 py-2">{student.dni}</td>
            <td className="border px-4 py-2">{student.email}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(student)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(student.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
