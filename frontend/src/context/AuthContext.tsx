// src/contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import { AuthService } from '../services/api';
import type { User, LoginData } from '../services/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error('Error al parsear usuario:', err);
        logout();
      }
    }
    setLoading(false);
  }, []);

  // Iniciar sesión
  const login = async (email: string, password: string): Promise<void> => {
    const loginData: LoginData = { email, password };
    const response = await AuthService.login(loginData);
    const { token, user: userData } = response.data;

    // Validar que el rol sea uno de los permitidos por el SRS
    const validRoles = ['ADMIN', 'DOCENTE', 'PERSONAL'];
    if (!validRoles.includes(userData.role)) {
      throw new Error('Rol de usuario no autorizado');
    }

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Cerrar sesión
  const logout = (): void => {
    // Opcional: llamar a un endpoint de logout si lo implementas
    AuthService.logout().catch(() => {
      // Ignorar errores en logout
    });
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};