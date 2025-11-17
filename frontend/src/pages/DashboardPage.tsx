import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StudentService } from '../services/api';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    inactiveStudents: 0,
  });

  // Cargar datos de resumen
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await StudentService.getAll();
        const total = res.data.length;
        const active = res.data.filter((s) => s.estado === 'Activo').length;
        const inactive = res.data.filter((s) => s.estado === 'Inactivo').length;
        setStats({ totalStudents: total, activeStudents: active, inactiveStudents: inactive });
      } catch (err) {
        console.error('Error al cargar estadísticas:', err);
      }
    };

    if (user?.role === 'ADMIN' || user?.role === 'PERSONAL') {
      fetchStats();
    }
  }, [user]);

  // Módulos disponibles según rol
  const modules = [
    {
      title: 'Gestión de Estudiantes',
      description: 'Registrar, consultar y actualizar datos de los estudiantes.',
      icon: '🎓',
      path: '/students',
      roles: ['ADMIN', 'PERSONAL'],
    },
    {
      title: 'Gestión de Carreras',
      description: 'Administrar las carreras disponibles en la institución.',
      icon: '🏫',
      path: '/careers',
      roles: ['ADMIN'],
    },
    {
      title: 'Gestión de Materias',
      description: 'Configurar materias y planes de estudio.',
      icon: '📚',
      path: '/subjects',
      roles: ['ADMIN', 'DOCENTE'],
    },
    {
      title: 'Gestión de Inscripciones',
      description: 'Registrar y controlar inscripciones de estudiantes.',
      icon: '📝',
      path: '/enrollments',
      roles: ['ADMIN', 'PERSONAL'],
    },
    {
      title: 'Condiciones Académicas',
      description: 'Gestionar las condiciones académicas por materia.',
      icon: '🧾',
      path: '/academic-status',
      roles: ['ADMIN'],
    },
    {
      title: 'Paises',
      description: 'Administrar la lista de países.',
      icon: '🌍',
      path: '/paises',
      roles: ['ADMIN'],
    },
    {
      title: 'Localidades',
      description: 'Administrar la lista de localidades.',
      icon: '📌',
      path: '/localidades',
      roles: ['ADMIN'],
    },
    {
      title: 'Cursadas',
      description: 'Administrar cursadas, profesores y materias asignadas.',
      icon: '📖',
      path: '/cursadas',
      roles: ['ADMIN', 'PERSONAL'],
    }
  ];

  const availableModules = modules.filter((mod) =>
    mod.roles.includes(user?.role ?? '')
  );

  return (
    <div className="min-h-screen bg-[#fdfdfc] text-[#423e3c] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Bienvenido{user ? `, ${user.name}` : ''} 👋
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Seleccioná un módulo para comenzar a gestionar el sistema.
        </p>

        {/* Sección de estadísticas */}
        {(user?.role === 'ADMIN' || user?.role === 'PERSONAL') && (
          <div className="grid gap-6 sm:grid-cols-3 mb-10">
            <div className="bg-white p-5 rounded-2xl shadow border border-gray-200">
              <p className="text-gray-500 text-sm mb-1">Total de estudiantes</p>
              <p className="text-2xl font-bold text-[#423e3c]">{stats.totalStudents}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow border border-gray-200">
              <p className="text-gray-500 text-sm mb-1">Estudiantes activos</p>
              <p className="text-2xl font-bold text-green-700">{stats.activeStudents}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow border border-gray-200">
              <p className="text-gray-500 text-sm mb-1">Estudiantes inactivos</p>
              <p className="text-2xl font-bold text-red-700">{stats.inactiveStudents}</p>
            </div>
          </div>
        )}

        {/* Sección de módulos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableModules.map((mod) => (
            <div
              key={mod.title}
              onClick={() => navigate(mod.path)}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{mod.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{mod.title}</h2>
                <p className="text-gray-600 text-sm">{mod.description}</p>
              </div>
              <div className="mt-4">
                <button className="w-full py-2 px-4 bg-[#1e40af] text-white font-medium rounded-lg hover:bg-[#d99733] transition">
                  Ir al módulo →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
