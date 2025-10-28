// src/pages/NewStudentPage.tsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import StudentForm from '../components/students/StudentForm';
import { StudentService } from '../services/api';
import type { CreateEstudianteDto } from '../services/api';

export default function NewStudentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Protección básica: solo usuarios autenticados
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (data: CreateEstudianteDto) => {
    try {
      await StudentService.create(data);
      // Mensaje de éxito (opcional: usar notificación toast)
      alert('Estudiante registrado exitosamente');
      navigate('/students');
    } catch (error) {
      console.error('Error al crear estudiante:', error);
      alert('Error al registrar el estudiante. Verifica los datos e intenta nuevamente.');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <button
          onClick={() => navigate('/students')}
          className="text-primary hover:text-accent-strong flex items-center"
        >
          ← Volver a Gestión de Estudiantes
        </button>
      </div>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
}