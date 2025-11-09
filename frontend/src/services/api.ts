import axios from 'axios';

// --------------------
// Tipos para Estudiantes
// --------------------
export interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  dni: string;
  email: string;
  telefono: string;
  domicilio: string;
  fechaNacimiento: string;
  paisId: number;
  localidadId: number;
  areaTelefonicaId: number;
  generoId: number;
  cohorte: string;
  secundario: string;
  cuil: string;
  examenMayores25: boolean;
  solicitoBeca: boolean;
  trabajador: boolean;
  personaACargo: boolean;
  observaciones?: string;
  estado: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateEstudianteDto {
  nombres: string;
  apellidos: string;
  dni: string;
  email: string;
  telefono: string;
  domicilio: string;
  fechaNacimiento: string;
  paisId: number;
  localidadId: number;
  areaTelefonicaId: number;
  generoId: number;
  cohorte: string;
  secundario: string;
  cuil: string;
  examenMayores25: boolean;
  solicitoBeca: boolean;
  trabajador: boolean;
  personaACargo: boolean;
  observaciones?: string;
}

// --------------------
// Tipos para Autenticación
// --------------------
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: string;
}

// --------------------
// Cliente Axios base
// --------------------
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

// Interceptor para agregar el token a las requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// --------------------
// Servicio de Autenticación
// --------------------
export const AuthService = {
  login(data: LoginData) {
    return api.post<AuthResponse>('/auth/login', data);
  },
  register(data: RegisterData) {
    return api.post<AuthResponse>('/auth/register', data);
  },
  verifyToken() {
    return api.get<User>('/auth/verify');
  },
  logout() {
    return api.post('/auth/logout');
  },
};

// --------------------
// Servicio de Estudiantes
// --------------------
export const StudentService = {
  // Obtener todos los estudiantes
  getAll() {
    return api.get<Estudiante[]>('/students');
  },

  // Obtener estudiante por ID
  getById(id: number) {
    return api.get<Estudiante>(`/students/${id}`);
  },

  // Crear un estudiante
  create(data: CreateEstudianteDto) {
    return api.post<Estudiante>('/students', data);
  },

  // Actualizar un estudiante
  update(id: number, data: Partial<CreateEstudianteDto>) {
    return api.put<Estudiante>(`/students/${id}`, data);
  },

  // Desactivar estudiante (soft delete con motivo)
  deactivate(id: number, reason: string) {
    return api.delete<Estudiante>(`/students/${id}`, {
      data: { causa_inactividad: reason },
    });
  },

  // 🔥 Eliminar estudiante (hard delete)
  remove(id: number) {
    return api.delete<Estudiante>(`/students/${id}`);
  },
};

export default api;

