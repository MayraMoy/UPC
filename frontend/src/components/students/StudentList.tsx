// src/components/students/StudentList.tsx
import type { Estudiante } from '../../services/api'; 

interface StudentListProps {
  students: Estudiante[];
}

export default function StudentList({ students }: StudentListProps) {
  if (students.length === 0) {
    return <p className="text-primary">No hay estudiantes registrados.</p>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">DNI</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">País</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-primary uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id_estudiante} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">{student.dni}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">
                {student.nombres} {student.apellidos}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  student.estado === 'Activo'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {student.estado}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-accent-soft hover:text-accent-strong mr-3">Ver</button>
                <button className="text-accent-soft hover:text-accent-strong mr-3">Editar</button>
                <button className="text-red-600 hover:text-red-900">Desactivar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
