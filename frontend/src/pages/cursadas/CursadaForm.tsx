import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CursadaService } from "../../services/cursadaService";
import { StudentService } from "../../services/api";
import { MateriaService } from "../../services/materiaService";

interface FormState {
  estudianteId: string;
  materiaId: string;
  notaFinal: string;
}

const CursadaForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    estudianteId: "",
    materiaId: "",
    notaFinal: "",
  });

  const [estudiantes, setEstudiantes] = useState<any[]>([]);
  const [materias, setMaterias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const [estRes, matRes] = await Promise.all([
          StudentService.getAll(),
          MateriaService.getAll()
        ]);

        setEstudiantes(estRes.data || []);
        setMaterias(matRes.data || []);

        if (id) {
          const curRes = await CursadaService.getById(Number(id));
          const data = curRes.data;

          setForm({
            estudianteId: String(data.estudianteId),
            materiaId: String(data.materiaId),
            notaFinal: String(data.notaFinal ?? "")
          });
        }
      } catch (err) {
        console.error("Error cargando form:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      estudianteId: Number(form.estudianteId),
      materiaId: Number(form.materiaId),
      notaFinal: form.notaFinal ? Number(form.notaFinal) : null,
    };

    try {
      if (id) {
        await CursadaService.update(Number(id), payload);
      } else {
        await CursadaService.create(payload);
      }
      navigate("/cursadas");
    } catch (err) {
      console.error("Error guardando cursada:", err);
      alert("Error guardando cursada");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-4">Cargando...</div>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar Cursada" : "Nueva Cursada"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label>Estudiante</label>
          <select
            name="estudianteId"
            value={form.estudianteId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione...</option>
            {estudiantes.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nombres} {s.apellidos}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Materia</label>
          <select
            name="materiaId"
            value={form.materiaId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione...</option>
            {materias.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Nota Final</label>
          <input
            type="number"
            name="notaFinal"
            value={form.notaFinal}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
            max="10"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={saving}
        >
          {saving ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default CursadaForm;
