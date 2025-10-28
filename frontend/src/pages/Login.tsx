// frontend/src/pages/Login.tsx 
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Colores institucionales - Azul profesional
const COLORS = {
  primary: '#1e40af',        // Azul institucional
  primaryDark: '#1e3a8a',    // Azul más oscuro
  primaryLight: '#3b82f6',   // Azul claro
  secondary: '#475569',      // Gris azulado
  success: '#059669',        // Verde profesional
  error: '#dc2626',          // Rojo profesional
  textPrimary: '#1e293b',    // Texto oscuro
  textSecondary: '#64748b',  // Texto secundario
  background: '#f8fafc',     // Fondo gris muy claro
  backgroundPaper: '#ffffff' // Fondo blanco
};

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await login(email, password);
      navigate('/students'); // Ruta funcional
    } catch (err) {
      setError('Credenciales incorrectas. Contacta al administrador del sistema.');
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = COLORS.primary;
    e.target.style.boxShadow = `0 0 0 2px ${COLORS.primary}15`;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#e2e8f0';
    e.target.style.boxShadow = 'none';
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      e.currentTarget.style.backgroundColor = COLORS.primaryDark;
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading) {
      e.currentTarget.style.backgroundColor = COLORS.primary;
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="rounded-xl shadow-lg w-full max-w-md p-8 border"
        style={{ 
          backgroundColor: COLORS.backgroundPaper,
          borderColor: '#e2e8f0'
        }}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
               style={{ backgroundColor: `${COLORS.primary}15` }}>
            <span className="text-2xl" style={{ color: COLORS.primary }}>🎓</span>
          </div>
          <h1 
            className="text-2xl font-bold mb-2"
            style={{ color: COLORS.textPrimary }}
          >
            Sistema de Gestión Universitaria
          </h1>
          <p 
            className="text-sm"
            style={{ color: COLORS.textSecondary }}
          >
            Acceso restringido a personal autorizado
          </p>
        </div>

        {error && (
          <div 
            className="p-3 rounded-lg mb-4 text-sm flex items-start"
            style={{ 
              backgroundColor: '#fef2f2',
              color: COLORS.error,
              border: `1px solid ${COLORS.error}20`
            }}
          >
            <span className="mr-2">⚠️</span>
            {error}
          </div>
        )}

        <div className="mb-4">
          <label 
            className="block mb-2 text-sm font-medium"
            style={{ color: COLORS.textPrimary }}
          >
            Correo institucional
          </label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none transition-all text-sm"
            style={{
              borderColor: '#e2e8f0',
              color: COLORS.textPrimary,
              backgroundColor: COLORS.backgroundPaper
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@institucion.edu"
            required
          />
        </div>

        <div className="mb-6">
          <label 
            className="block mb-2 text-sm font-medium"
            style={{ color: COLORS.textPrimary }}
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full p-3 pr-12 border rounded-lg focus:outline-none transition-all text-sm"
              style={{
                borderColor: '#e2e8f0',
                color: COLORS.textPrimary,
                backgroundColor: COLORS.backgroundPaper
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none text-sm"
              onClick={() => setShowPassword(!showPassword)}
              style={{ color: COLORS.textSecondary }}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm"
          style={{
            backgroundColor: loading ? COLORS.textSecondary : COLORS.primary,
            color: '#ffffff',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verificando...
            </span>
          ) : (
            'Ingresar al Sistema'
          )}
        </button>

        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-xs" style={{ color: COLORS.textSecondary }}>
            Sistema de acceso restringido. <br />
            Para solicitar credenciales contacta al área de sistemas.
          </p>
        </div>
      </form>
    </div>
  );
}