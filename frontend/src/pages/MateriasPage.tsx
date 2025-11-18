import { useEffect, useState } from "react";
import { MateriaService } from "../services/materiaService"; 
import type { Materia, CreateMateriaDto } from "../services/materiaService"; 
import MateriaList from "../components/materias/MateriaList";
import MateriaForm from "../components/materias/MateriaForm";
import { useNavigate } from 'react-router-dom';

const MateriasPage = () => {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [selectedMateria, setSelectedMateria] = useState<Materia | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false); // 👈 nuevo estado
  const navigate = useNavigate();

  // 🔹 Cargar todas las materias al montar
  const loadMaterias = async () => {
    try {
      setLoading(true);
      const response = await MateriaService.getAll();
      setMaterias(response.data);
    } catch (error) {
      console.error("Error al cargar materias:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMaterias();
  }, []);

  // 🔹 Crear nueva materia
  const handleCreate = async (data: CreateMateriaDto) => {
    try {
      await MateriaService.create(data);
      await loadMaterias();
      setShowForm(false); // 👈 ocultar formulario después de crear
    } catch (error) {
      console.error("Error al crear materia:", error);
    }
  };

  // 🔹 Actualizar materia existente
  const handleUpdate = async (id: number, data: CreateMateriaDto) => {
    try {
      await MateriaService.update(id, data);
      await loadMaterias();
      setSelectedMateria(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error al actualizar materia:", error);
    }
  };

  // 🔹 Eliminar materia
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("¿Seguro que deseas eliminar esta materia?");
    if (!confirmDelete) return;

    try {
      await MateriaService.delete(id);
      await loadMaterias();
    } catch (error) {
      console.error("Error al eliminar materia:", error);
    }
  };

  // 🔹 Seleccionar materia para editar
  const handleSelect = (materia: Materia) => {
    setSelectedMateria(materia);
    setShowForm(true); // 👈 mostrar formulario al editar
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
      >
        ← Volver al Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-4 text-gray-800">Gestión de Materias</h1>

      {/* Botón para mostrar formulario */}
      {!showForm && (
        <button
          onClick={() => {
            setSelectedMateria(null);
            setShowForm(true);
          }}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Registrar Materia
        </button>
      )}

      {/* Formulario visible solo cuando showForm = true */}
      {showForm && (
        <div className="mb-6">
          <MateriaForm
            onSubmit={selectedMateria
              ? (data) => handleUpdate(selectedMateria.id, data)
              : handleCreate
            }
            initialData={
              selectedMateria
                ? { nombre: selectedMateria.nombre, carreraNombre: selectedMateria.carrera?.nombre || "" }
                : undefined
            }
            onCancel={() => {
              setSelectedMateria(null);
              setShowForm(false);
            }}
          />
          <hr className="my-6 border-gray-300" />
        </div>
      )}

      {/* Lista visible solo cuando el formulario está oculto */}
      {!showForm && (
        <>
          {loading ? (
            <p className="text-gray-500">Cargando materias...</p>
          ) : (
            <MateriaList
              materias={materias}
              onEdit={handleSelect}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MateriasPage;

