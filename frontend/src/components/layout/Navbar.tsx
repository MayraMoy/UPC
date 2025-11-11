import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-primary-DEFAULT text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide text-black">
          Gestión UPC
        </Link>
        
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <button 
                onClick={() => navigate('/profile')}
                className="text-black hover:text-gray-700 transition-colors duration-200"
              >
                Perfil
              </button>
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link 
              to="/login"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}