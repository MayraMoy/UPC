// src/pages/StudentsPage.tsx
import { useState, useEffect } from 'react'; 
import { StudentService, type Estudiante } from '../services/api';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function StudentsPage() {
  const { user, loading: authLoading } = useAuth();
  const [students, setStudents] = useState<Estudiante[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await StudentService.getAll();
        setStudents(response.data);
      } catch (err) {
        setError('Error al cargar los estudiantes');
        console.error('Error fetching students:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Movemos las verificaciones de autenticación aquí
  if (authLoading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-lg">Cargando estudiantes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-600 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Gestión de Estudiantes</h1>
        <button 
          className="btn-primary"
          onClick={() => navigate('/students/new')}
        >
          + Nuevo Estudiante
        </button>
      </div>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por DNI, nombre o apellido"
          className="w-full p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="px-4 bg-blue-600 text-white rounded-md">Buscar</button>
      </div>
      <div className="bg-white rounded-lg shadow-card border border-border-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border-light">
            <thead className="bg-background-subtle">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-primary-muted uppercase tracking-wider">
                  Estudiante
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-primary-muted uppercase tracking-wider">
                  DNI
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-primary-muted uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-primary-muted uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-primary-muted uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {students.map((student) => (
                <tr key={student.id_estudiante} className="hover:bg-background-subtle">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-DEFAULT">
                      {student.nombres} {student.apellidos}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-muted">
                    {student.dni}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-muted">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.estado === 'activo' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-accent-DEFAULT hover:text-accent-dark mr-4">
                      Editar
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {students.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-primary-muted">No hay estudiantes registrados.</p>
        </div>
      )}
    </div>
  );
}
