import React, { useEffect, useState } from 'react';
import { LocalidadService, type Localidad, type CreateLocalidadDto } from '../services/localidadService';
import LocalidadList from '../components/localidad/LocalidadList';
import LocalidadForm from '../components/localidad/LocalidadForm';
import { useNavigate } from 'react-router-dom';


const LocalidadesPage: React.FC = () => {
  const [localidades, setLocalidades] = useState<Localidad[]>([]);
  const [editingLocalidad, setEditingLocalidad] = useState<Localidad | null>(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();


  const fetchLocalidades = async () => {
    const response = await LocalidadService.getAll();
    setLocalidades(response.data);
  };

  useEffect(() => {
    fetchLocalidades();
  }, []);

  const handleCreate = async (data: CreateLocalidadDto) => {
    if (editingLocalidad) {
      await LocalidadService.update(editingLocalidad.id, data);
    } else {
      await LocalidadService.create(data);
    }
    setShowForm(false);
    setEditingLocalidad(null);
    fetchLocalidades();
  };

  const handleEdit = (localidad: Localidad) => {
    setEditingLocalidad(localidad);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await LocalidadService.delete(id);
    fetchLocalidades();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <button
            onClick={() => navigate('/dashboard')}
            className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
        >
            ← Volver al Dashboard
        </button>

        <h1 className="text-2xl font-bold text-gray-800">Gestión de Localidades</h1>
        <button
          onClick={() => {
            setEditingLocalidad(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nueva Localidad
        </button>
      </div>

      {showForm ? (
        <LocalidadForm
          initialData={editingLocalidad || undefined}
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <LocalidadList
          localidades={localidades}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default LocalidadesPage;
