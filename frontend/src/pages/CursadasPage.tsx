import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CursadaService } from "../services/cursadaService";

const CursadasPage = () => {
  const navigate = useNavigate();
  const [cursadas, setCursadas] = useState<any[]>([]);

  const loadData = async () => {
    try {
      const res = await CursadaService.getAll();
      setCursadas(res.data);
    } catch (err) {
      console.error("Error cargando cursadas:", err);
      alert("Error al cargar cursadas.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar cursada?")) return;

    try {
      await CursadaService.delete(id);
      loadData();
    } catch (err) {
      console.error("Error eliminando:", err);
      alert("No se pudo eliminar.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cursadas</h2>

      <button
        onClick={() => navigate("/cursadas/nueva")}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Nueva Cursada
      </button>

      <table className="table table-striped w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Estudiante</th>
            <th>Materia</th>
            <th>Carrera</th>
            <th>Año</th>
            <th>Nota Final</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {cursadas.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>

              <td>{c.estudiante?.nombres} {c.estudiante?.apellidos}</td>

              <td>{c.materia?.nombre ?? "-"}</td>

              <td>{c.materia?.carrera?.nombre ?? "-"}</td>

              <td>{c.anio ?? "-"}</td>

              <td>{c.notaFinal ?? "-"}</td>

              <td>
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                  onClick={() => navigate(`/cursadas/editar/${c.id}`)}
                >
                  Editar
                </button>

                <button
                  className="px-2 py-1 bg-red-600 text-white rounded"
                  onClick={() => handleDelete(c.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CursadasPage;
