import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CursadaService } from "../../services/cursadaService";
import { CareerService } from "../../services/careerService";
import { StudentService } from "../../services/api";

interface FormState {
  estudianteId: string;
  carreraId: string;
  anio: string;
}

interface StudentOption {
  id: number;
  nombres?: string;
  apellidos?: string;
}

interface CareerOption {
  id: number;
  nombre?: string;
}

const CursadaForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    estudianteId: "",
    carreraId: "",
    anio: "",
  });

  const [estudiantes, setEstudiantes] = useState<StudentOption[]>([]);
  const [careers, setCareers] = useState<CareerOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const [estRes, carRes] = await Promise.all([StudentService.getAll(), CareerService.getAll()]);
        setEstudiantes((estRes.data as StudentOption[]) || []);
        setCareers((carRes.data as CareerOption[]) || []);

        if (id) {
          const curRes = await CursadaService.getById(Number(id));
          const data = curRes.data as Partial<FormState> & {
            estudiante?: { id?: number };
            carrera?: { id?: number };
          };
          setForm({
            estudianteId: String(data.estudianteId ?? data.estudiante?.id ?? ""),
            carreraId: String(data.carreraId ?? data.carrera?.id ?? ""),
            anio: String(data.anio ?? ""),
          });
        }
      } catch (err) {
        console.error("Error cargando datos del formulario:", err);
        alert("Error al cargar datos. Revisá la consola.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    try {
      const payload = {
        estudianteId: Number(form.estudianteId),
        carreraId: Number(form.carreraId),
        anio: Number(form.anio),
      };

      if (id) {
        await CursadaService.update(Number(id), payload);
      } else {
        await CursadaService.create(payload);
      }

      navigate("/cursadas");
    } catch (err) {
      console.error("Error guardando cursada:", err);
      alert("No se pudo guardar la cursada. Revisá la consola.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Cargando...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{id ? "Editar Cursada" : "Nueva Cursada"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Estudiante</label>
          <select
            name="estudianteId"
            value={form.estudianteId}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Seleccione...</option>
            {estudiantes.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nombres} {s.apellidos ?? ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Carrera</label>
          <select name="carreraId" value={form.carreraId} onChange={handleChange} className="w-full border p-2 rounded" required>
            <option value="">Seleccione...</option>
            {careers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Año</label>
          <input
            name="anio"
            type="number"
            min="1"
            max="10"
            value={form.anio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="mr-2 px-4 py-2 border rounded"
            onClick={() => navigate("/cursadas")}
            disabled={saving}
          >
            Cancelar
          </button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded" disabled={saving}>
            {saving ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CursadaForm;
