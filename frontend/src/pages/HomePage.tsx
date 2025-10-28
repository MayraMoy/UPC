import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-default">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-DEFAULT mb-6">
              Sistema de Gestión Estudiantil
            </h1>
            <p className="text-lg text-primary-muted mb-8 max-w-2xl mx-auto">
              Una plataforma moderna para administrar la información académica de manera eficiente y organizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/students" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                Gestionar Estudiantes
              </Link>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200">
                Más Información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background-subtle px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-primary-DEFAULT mb-8">
            ¿Qué puedes hacer?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-card border border-border-light">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">👤</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-DEFAULT mb-2">
                Gestión de Perfiles
              </h3>
              <p className="text-primary-muted text-sm">
                Administra información personal y académica de cada estudiante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border border-border-light">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-lg">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-DEFAULT mb-2">
                Registro Académico
              </h3>
              <p className="text-primary-muted text-sm">
                Mantén un historial completo de calificaciones y materias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card border border-border-light">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-lg">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-DEFAULT mb-2">
                Seguimiento
              </h3>
              <p className="text-primary-muted text-sm">
                Monitorea el progreso y rendimiento de los estudiantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary-DEFAULT mb-4">
            Comienza ahora
          </h2>
          <p className="text-primary-muted mb-6">
            Accede al sistema y comienza a gestionar la información estudiantil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/students" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              Ver Lista de Estudiantes
            </Link>
            <button className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200">
              Contactar Soporte
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;