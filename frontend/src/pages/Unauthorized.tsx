// frontend/src/pages/Unauthorized.tsx
export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fdfdfc">
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold text-423e3c mb-2">Acceso denegado</h1>
        <p className="text-64748b">No tienes permisos para acceder a esta sección.</p>
      </div>
    </div>
  );
}