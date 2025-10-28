// src/pages/StudentForm.tsx
import React, { useState } from 'react';
import type { Estudiante, CreateEstudianteDto } from '../../services/api';

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
  fecha_nacimiento: student?.fecha_nacimiento? student.fecha_nacimiento.split('T')[0] ?? '': '',
  id_pais: student?.id_pais ?? 1,
  id_localidad: student?.id_localidad ?? 1,
  id_area_telefonica: student?.id_area_telefonica ?? 1,
  id_genero: student?.id_genero ?? 1,
  cohorte: student?.cohorte ?? '',
  secundario: student?.secundario ?? '',
  cuil: student?.cuil ?? '',
  examen_mayores25: student?.examen_mayores25 ?? false,
  solicito_beca: student?.solicito_beca ?? false,
  trabajador: student?.trabajador ?? false,
  persona_a_cargo: student?.persona_a_cargo ?? false,
  observaciones: student?.observaciones ?? '',
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    const val =
      type === 'checkbox' && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setFormData(prev => ({ ...prev, [name]: val }));
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
            autoComplete="given-name"
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
            autoComplete="family-name"
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
            autoComplete="email"
          />
        </div>

        {/* Fecha de nacimiento */}
        <div>
          <label className="block text-sm font-medium mb-1">Fecha de Nacimiento *</label>
          <input
            type="date"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
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

        {/* Selects de ejemplo */}
        <div>
          <label className="block text-sm font-medium mb-1">País</label>
          <select
            name="id_pais"
            value={formData.id_pais}
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
            name="id_localidad"
            value={formData.id_localidad}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value={1}>Córdoba</option>
            <option value={2}>Rosario</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Área telefónica</label>
          <select
            name="id_area_telefonica"
            value={formData.id_area_telefonica}
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
            name="id_genero"
            value={formData.id_genero}
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
            name="examen_mayores25"
            checked={formData.examen_mayores25}
            onChange={handleChange}
          />
          <label>Examen mayores 25</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="solicito_beca"
            checked={formData.solicito_beca}
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
            name="persona_a_cargo"
            checked={formData.persona_a_cargo}
            onChange={handleChange}
          />
          <label>Persona a cargo</label>
        </div>

        {/* Observaciones */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Observaciones</label>
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
