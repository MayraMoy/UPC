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
  const [selectedStudent, setSelectedStudent] = useState<Estudiante | null>(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // 🔹 Cargar estudiantes
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

  if (authLoading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" />;

  const handleDelete = async () => {
    if (!selectedStudent) return;

    try {
      await StudentService.remove(selectedStudent.id);
      setStudents(students.filter(s => s.id !== selectedStudent.id));
      setShowModal(false);
    } catch (err) {
      console.error('Error eliminando estudiante:', err);
      alert('Hubo un error al eliminar el estudiante.');
    }
  };

  const filteredStudents = students.filter((student) =>
    [student.nombres, student.apellidos, student.dni]
      .some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
        >
        ← Volver al Dashboard
        </button>

        <h1 className="text-2xl font-bold text-primary">Gestión de Estudiantes</h1>
        <button 
          className="btn-primary"
          onClick={() => navigate('/students/new')}
        >
          + Nuevo Estudiante
        </button>
      </div>

      {/* Buscador */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Buscar por DNI, nombre o apellido"
          className="w-full p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabla */}
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
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary-DEFAULT">
                      {student.nombres} {student.apellidos}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.dni}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        student.estado === 'Activo'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {student.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-800 mr-4"
                      onClick={() => navigate(`/students/edit/${student.id}`)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => {
                        setSelectedStudent(student);
                        setShowModal(true);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStudents.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          No hay estudiantes registrados.
        </div>
      )}

      {/* 🔹 Modal de confirmación */}
      {showModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Confirmar eliminación
            </h2>
            <p className="text-gray-700 mb-6">
              ¿Seguro que deseas eliminar a <strong>{selectedStudent.nombres} {selectedStudent.apellidos}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

