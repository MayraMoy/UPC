import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
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

  // Estados para el diálogo de confirmación
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [careerToDelete, setCareerToDelete] = useState<number | null>(null);

  // Manejar clic en eliminar
  const handleDeleteClick = (id: number) => {
    setCareerToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  // Confirmar eliminación
  const confirmDelete = async () => {
    if (careerToDelete === null) return;
    
    try {
      await CareerService.delete(careerToDelete);
      await fetchCareers();
      setIsDeleteDialogOpen(false);
      setCareerToDelete(null);
    } catch (err) {
      console.error('Error al eliminar carrera:', err);
      setError('No se pudo eliminar la carrera');
      setIsDeleteDialogOpen(false);
    }
  };

  // Cancelar eliminación
  const cancelDelete = () => {
    setIsDeleteDialogOpen(false);
    setCareerToDelete(null);
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
            <CareerList careers={careers} onEdit={handleEdit} onDelete={handleDeleteClick} />
          )}
        </>
      ) : (
        <CareerForm
          initialData={selectedCareer}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}

      {/* Diálogo de confirmación de eliminación */}
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                Eliminar carrera
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  ¿Estás seguro de que quieres eliminar esta carrera? Esta acción no se puede deshacer.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              onClick={confirmDelete}
            >
              Eliminar
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={cancelDelete}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
