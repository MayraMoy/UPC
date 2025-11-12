import { useEffect, useState } from "react";
import { StudentService } from "../services/studentService";
import type { Estudiante, CreateEstudianteDto } from "../services/studentService";
import StudentForm from "../components/students/StudentForm";
import StudentList from "../components/students/StudentList";

const StudentsPage = () => {
  const [students, setStudents] = useState<Estudiante[]>([]);
  const [selected, setSelected] = useState<Estudiante | null>(null);
  const [showForm, setShowForm] = useState(false);

  const loadStudents = async () => {
    const res = await StudentService.getAll();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleCreate = async (data: CreateEstudianteDto) => {
    await StudentService.create(data);
    setShowForm(false);
    loadStudents();
  };

  const handleUpdate = async (id: number, data: CreateEstudianteDto) => {
    await StudentService.update(id, data);
    setSelected(null);
    setShowForm(false);
    loadStudents();
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("¿Eliminar estudiante?")) {
      await StudentService.deactivate(id);
      loadStudents();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Estudiantes</h1>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Registrar Estudiante
        </button>
      ) : (
        <StudentForm
          onSubmit={
            selected
              ? (data) => handleUpdate(selected.id, data)
              : handleCreate
          }
          initialData={
            selected
              ? {
                  nombres: selected.nombres,
                  apellidos: selected.apellidos,
                  dni: selected.dni,
                  fechaNacimiento: "",
                  email: selected.email,
                  telefono: selected.telefono,
                  domicilio: "",
                  cohorte: "",
                  secundario: "",
                  cuil: "",
                  examenMayores25: false,
                  solicitoBeca: false,
                  trabajador: false,
                  personaACargo: false,
                  observaciones: "",
                  paisNombre: selected.pais?.nombre || "",
                  localidadNombre: selected.localidad?.nombre || "",
                  generoNombre: selected.genero?.nombre || "",
                  areaTelefonicaCodigo: selected.areaTelefonica?.codigo || "",
                }
              : undefined
          }
          onCancel={() => setShowForm(false)}
        />
      )}

      {!showForm && (
        <StudentList
          students={students}
          onEdit={(student) => {
            setSelected(student);
            setShowForm(true);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default StudentsPage;
