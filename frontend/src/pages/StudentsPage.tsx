import { useEffect, useState } from "react";
import { StudentService } from "../services/studentService";
import StudentList from "../components/students/StudentList";
import type { Estudiante } from "../services/studentService";
import { useNavigate } from 'react-router-dom';

const StudentsPage = () => {
  const [students, setStudents] = useState<Estudiante[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Estudiante[]>([]);
  const [search, setSearch] = useState("");
  const [, setSelectedStudent] = useState<Estudiante | null>(null);
  const navigate = useNavigate();

  const loadStudents = async () => {
    try {
      const res = await StudentService.getAll();
      setStudents(res.data);
      setFilteredStudents(res.data);
    } catch (error) {
      console.error("Error al cargar estudiantes:", error);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // filtro de búsqueda
  useEffect(() => {
    const text = search.toLowerCase();
    setFilteredStudents(
      students.filter((s) =>
        `${s.nombres} ${s.apellidos}`.toLowerCase().includes(text) ||
        s.dni.toLowerCase().includes(text)
      )
    );
  }, [search, students]);

  const handleDeactivate = async (id: number) => {
    await StudentService.deactivate(id);
    loadStudents();
  };

  const handleReactivate = async (id: number) => {
    await StudentService.reactivate(id);
    loadStudents();
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
      >
        ← Volver al Dashboard
      </button>

      <h1 className="text-2xl font-bold">Gestión de Estudiantes</h1>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por nombre o DNI..."
        className="border p-2 mt-4 w-80"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StudentList
        students={filteredStudents}
        onEdit={setSelectedStudent}
        onDeactivate={handleDeactivate}
        onReactivate={handleReactivate}
      />
    </div>
  );
};

export default StudentsPage;

