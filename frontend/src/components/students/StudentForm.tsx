import React, { useState } from 'react';
import type { CreateEstudianteDto, Estudiante } from '../../services/api';

interface StudentFormProps {
  student?: Estudiante;
  onSubmit: (data: CreateEstudianteDto) => void;
}

export default function StudentForm({ student, onSubmit }: StudentFormProps) {
  const [formData, setFormData] = useState<CreateEstudianteDto>({
    nombres: student?.nombres ?? '',
    apellidos: student?.apellidos ?? '',
    dni: student?.dni ?? '',
    email: student?.email ?? '',
    telefono: student?.telefono ?? '',
    domicilio: student?.domicilio ?? '',
    fechaNacimiento: student?.fechaNacimiento?.split('T')[0] ?? '',
    paisId: student?.paisId ?? 1,
    localidadId: student?.localidadId ?? 1,
    areaTelefonicaId: student?.areaTelefonicaId ?? 1,
    generoId: student?.generoId ?? 1,
    cohorte: student?.cohorte ?? '',
    secundario: student?.secundario ?? '',
    cuil: student?.cuil ?? '',
    examenMayores25: student?.examenMayores25 ?? false,
    solicitoBeca: student?.solicitoBeca ?? false,
    trabajador: student?.trabajador ?? false,
    personaACargo: student?.personaACargo ?? false,
    observaciones: student?.observaciones ?? '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value } = e.target;
    const val =
      type === 'checkbox' && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card max-w-3xl mx-auto p-6 shadow-md rounded-md bg-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">
        {student ? 'Editar Estudiante' : 'Registrar Estudiante'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombres */}
        <div>
          <label className="block text-sm font-medium mb-1">Nombres *</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Apellidos */}
        <div>
          <label className="block text-sm font-medium mb-1">Apellidos *</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* DNI */}
        <div>
          <label className="block text-sm font-medium mb-1">DNI *</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Fecha de nacimiento */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Fecha de Nacimiento *
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* CUIL */}
        <div>
          <label className="block text-sm font-medium mb-1">CUIL</label>
          <input
            type="text"
            name="cuil"
            value={formData.cuil}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium mb-1">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Domicilio */}
        <div>
          <label className="block text-sm font-medium mb-1">Domicilio</label>
          <input
            type="text"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Cohorte */}
        <div>
          <label className="block text-sm font-medium mb-1">Cohorte</label>
          <input
            type="text"
            name="cohorte"
            value={formData.cohorte}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Secundario */}
        <div>
          <label className="block text-sm font-medium mb-1">Secundario</label>
          <input
            type="text"
            name="secundario"
            value={formData.secundario}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Selects */}
        <div>
          <label className="block text-sm font-medium mb-1">País</label>
          <select
            name="paisId"
            value={formData.paisId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={1}>Argentina</option>
            <option value={2}>Brasil</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Localidad</label>
          <select
            name="localidadId"
            value={formData.localidadId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={1}>Córdoba</option>
            <option value={2}>Rosario</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Área Telefónica
          </label>
          <select
            name="areaTelefonicaId"
            value={formData.areaTelefonicaId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={1}>+54</option>
            <option value={2}>+55</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Género</label>
          <select
            name="generoId"
            value={formData.generoId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={1}>Femenino</option>
            <option value={2}>Masculino</option>
            <option value={3}>Otro</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="examenMayores25"
            checked={formData.examenMayores25}
            onChange={handleChange}
          />
          <label>Examen mayores de 25</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="solicitoBeca"
            checked={formData.solicitoBeca}
            onChange={handleChange}
          />
          <label>Solicitó beca</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="trabajador"
            checked={formData.trabajador}
            onChange={handleChange}
          />
          <label>Trabajador</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="personaACargo"
            checked={formData.personaACargo}
            onChange={handleChange}
          />
          <label>Persona a cargo</label>
        </div>

        {/* Observaciones */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Observaciones
          </label>
          <textarea
            name="observaciones"
            value={formData.observaciones}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary w-full">
          {student ? 'Actualizar Estudiante' : 'Registrar Estudiante'}
        </button>
      </div>
    </form>
  );
}

