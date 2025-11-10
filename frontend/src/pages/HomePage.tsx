import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-default">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary-DEFAULT mb-6">
            Sistema de Gestión Estudiantil
          </h1>
          <p className="text-lg text-primary-muted mb-8 max-w-2xl mx-auto">
            Bienvenido al panel central de administración del sistema. 
            Accede al Dashboard para gestionar los módulos principales.
          </p>

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Ir al Panel Principal
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background-subtle px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-primary-DEFAULT mb-8">
            Funcionalidades principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-card border border-border-light">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-DEFAULT mb-2">
                Panel de Control
              </h3>
              <p className="text-primary-muted text-sm">
                Visualiza métricas, reportes y accesos rápidos a los módulos principales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border border-border-light">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-lg">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-DEFAULT mb-2">
                Gestión de Usuarios
              </h3>
              <p className="text-primary-muted text-sm">
                Administra el acceso del personal y estudiantes dentro del sistema.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border border-border-light">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-lg">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-DEFAULT mb-2">
                Administración Académica
              </h3>
              <p className="text-primary-muted text-sm">
                Controla carreras, materias y registros estudiantiles desde un solo lugar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
