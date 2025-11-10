import { useState, useEffect } from 'react';
import { CareerService } from '../services/careerService';
import type { Career, CreateCareerDto } from '../services/careerService';
import CareerList from '../components/careers/CareerList';
import CareerForm from '../components/careers/CareerForm';

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Cargar carreras
  const fetchCareers = async () => {
    try {
      setLoading(true);
      const response = await CareerService.getAll();
      setCareers(response.data);
    } catch (err) {
      console.error('Error cargando carreras:', err);
      setError('Error al cargar las carreras');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  // Crear o actualizar carrera
  const handleSubmit = async (data: CreateCareerDto) => {
    try {
      if (selectedCareer) {
        await CareerService.update(selectedCareer.id, data);
      } else {
        await CareerService.create(data);
      }
      await fetchCareers();
      setShowForm(false);
      setSelectedCareer(undefined);
    } catch (err) {
      console.error('Error al guardar carrera:', err);
      setError('No se pudo guardar la carrera');
    }
  };

  // Editar carrera
  const handleEdit = (career: Career) => {
    setSelectedCareer(career);
    setShowForm(true);
  };

  // Eliminar carrera
  const handleDelete = async (id: number) => {
    if (!confirm('¿Seguro que deseas eliminar esta carrera?')) return;
    try {
      await CareerService.delete(id);
      await fetchCareers();
    } catch (err) {
      console.error('Error al eliminar carrera:', err);
      setError('No se pudo eliminar la carrera');
    }
  };

  // Cancelar formulario
  const handleCancel = () => {
    setShowForm(false);
    setSelectedCareer(undefined);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-primary">Gestión de Carreras</h1>

      {error && (
        <div className="text-red-600 bg-red-100 border border-red-200 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {!showForm ? (
        <>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary mb-6"
          >
            + Nueva Carrera
          </button>

          {loading ? (
            <p className="text-gray-600">Cargando carreras...</p>
          ) : (
            <CareerList careers={careers} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </>
      ) : (
        <CareerForm
          initialData={selectedCareer}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
