import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CursadaService } from "../../services/cursadaService";

interface CursadaSummary {
  id: number;
  estudianteId?: number;
  carreraId?: number;
  anio?: number;
  estudiante?: {
    nombres?: string;
    apellidos?: string;
  };
  carrera?: {
    nombre?: string;
  };
}

const CursadaList = () => {
  const [cursadas, setCursadas] = useState<CursadaSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCursadas();
  }, []);

  const loadCursadas = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await CursadaService.getAll();
      setCursadas((res.data as CursadaSummary[]) || []);
    } catch (err) {
      console.error("Error cargando cursadas:", err);
      setError("Error cargando cursadas");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const ok = window.confirm("¿Seguro que deseas eliminar esta cursada?");
    if (!ok) return;

    try {
      await CursadaService.delete(id);
      await loadCursadas();
    } catch (err) {
      console.error("Error al eliminar:", err);
      alert("No se pudo eliminar la cursada.");
    }
  };

  if (loading) return <div className="p-6">Cargando cursadas...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-3">Cursadas</h1>

      <Link to="/cursadas/new" className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Nueva Cursada
      </Link>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Estudiante</th>
              <th className="p-2 border">Carrera</th>
              <th className="p-2 border">Año</th>
              <th className="p-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cursadas.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center">
                  No hay cursadas registradas.
                </td>
              </tr>
            )}

            {cursadas.map((c) => (
              <tr key={c.id} className="odd:bg-white even:bg-gray-50">
                <td className="p-2 border">{c.id}</td>
                <td className="p-2 border">
                  {c.estudiante?.nombres ? `${c.estudiante.nombres} ${c.estudiante.apellidos || ""}` : c.estudianteId}
                </td>
                <td className="p-2 border">{c.carrera?.nombre ?? c.carreraId}</td>
                <td className="p-2 border">{c.anio ?? "-"}</td>
                <td className="p-2 border">
                  <Link to={`/cursadas/edit/${c.id}`} className="inline-block mr-2 px-3 py-1 bg-yellow-500 text-white rounded">
                    Editar
                  </Link>
                  <button onClick={() => handleDelete(c.id)} className="px-3 py-1 bg-red-600 text-white rounded">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CursadaList;
