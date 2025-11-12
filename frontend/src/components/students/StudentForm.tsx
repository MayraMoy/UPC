import { useState, useEffect } from "react";
import type { CreateEstudianteDto } from "../../services/studentService";
import {
  getPaises,
  getLocalidades,
  getGeneros,
  getAreasTelefonicas,
} from "../../services/studentService";

interface StudentFormProps {
  onSubmit: (data: CreateEstudianteDto) => Promise<void>;
  initialData?: CreateEstudianteDto | undefined; // ✅ ahora acepta undefined
  onCancel: () => void;
}


const StudentForm: React.FC<StudentFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  const [formData, setFormData] = useState<CreateEstudianteDto>(
    initialData || {
      nombres: "",
      apellidos: "",
      dni: "",
      fechaNacimiento: "",
      email: "",
      telefono: "",
      domicilio: "",
      cohorte: "",
      secundario: "",
      cuil: "",
      examenMayores25: false,
      solicitoBeca: false,
      trabajador: false,
      personaACargo: false,
      observaciones: "",
      paisNombre: "",
      localidadNombre: "",
      generoNombre: "",
      areaTelefonicaCodigo: "",
    }
  );

  const [paises, setPaises] = useState<any[]>([]);
  const [localidades, setLocalidades] = useState<any[]>([]);
  const [generos, setGeneros] = useState<any[]>([]);
  const [areas, setAreas] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [p, l, g, a] = await Promise.all([
        getPaises(),
        getLocalidades(),
        getGeneros(),
        getAreasTelefonicas(),
      ]);
      setPaises(p);
      setLocalidades(l);
      setGeneros(g);
      setAreas(a);
    };
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const input = e.target as HTMLInputElement;
    const newValue = type === "checkbox" ? input.checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-700">Registrar Estudiante</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          placeholder="Nombres"
          className="border p-2 rounded"
        />
        <input
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          placeholder="Apellidos"
          className="border p-2 rounded"
        />
        <input
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          placeholder="DNI"
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          className="border p-2 rounded"
        />
        <input
          name="domicilio"
          value={formData.domicilio}
          onChange={handleChange}
          placeholder="Domicilio"
          className="border p-2 rounded"
        />
        <input
          name="cohorte"
          value={formData.cohorte}
          onChange={handleChange}
          placeholder="Cohorte"
          className="border p-2 rounded"
        />
        <input
          name="secundario"
          value={formData.secundario}
          onChange={handleChange}
          placeholder="Secundario"
          className="border p-2 rounded"
        />
        <input
          name="cuil"
          value={formData.cuil}
          onChange={handleChange}
          placeholder="CUIL"
          className="border p-2 rounded"
        />

        {/* Selects */}
        <select
          name="paisNombre"
          value={formData.paisNombre}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Seleccione país</option>
          {paises.map((p) => (
            <option key={p.id} value={p.nombre}>
              {p.nombre}
            </option>
          ))}
        </select>

        <select
          name="localidadNombre"
          value={formData.localidadNombre}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Seleccione localidad</option>
          {localidades.map((l) => (
            <option key={l.id} value={l.nombre}>
              {l.nombre}
            </option>
          ))}
        </select>

        <select
          name="generoNombre"
          value={formData.generoNombre}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Seleccione género</option>
          {generos.map((g) => (
            <option key={g.id} value={g.nombre}>
              {g.nombre}
            </option>
          ))}
        </select>

        <select
          name="areaTelefonicaCodigo"
          value={formData.areaTelefonicaCodigo}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Seleccione área telefónica</option>
          {areas.map((a) => (
            <option key={a.id} value={a.codigo}>
              {a.codigo}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-4 mt-2">
        {["examenMayores25", "solicitoBeca", "trabajador", "personaACargo"].map(
          (field) => (
            <label key={field} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={field}
                checked={(formData as any)[field]}
                onChange={handleChange}
              />
              {field}
            </label>
          )
        )}
      </div>

      <textarea
        name="observaciones"
        value={formData.observaciones || ""}
        onChange={handleChange}
        placeholder="Observaciones"
        className="border p-2 rounded w-full mt-2"
      />

      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Guardar
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default StudentForm;
