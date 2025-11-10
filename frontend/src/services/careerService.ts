import axios from 'axios';

// Tipos principales
export interface Career {
  id: number;
  nombre: string;
  duracion: number;
  tituloOtorgado: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCareerDto {
  nombre: string;
  duracion: number;
  tituloOtorgado: string;
}

// Cliente Axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

// Interceptor de autenticación
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Servicio de carreras
export const CareerService = {
  // Obtener todas las carreras
  getAll() {
    return api.get<Career[]>('/careers');
  },

  // Obtener carrera por ID
  getById(id: number) {
    return api.get<Career>(`/careers/${id}`);
  },

  // Crear nueva carrera
  create(data: CreateCareerDto) {
    return api.post<Career>('/careers', data);
  },

  // Actualizar carrera existente
  update(id: number, data: Partial<CreateCareerDto>) {
    return api.put<Career>(`/careers/${id}`, data);
  },

  // Eliminar carrera
  delete(id: number) {
    return api.delete(`/careers/${id}`);
  },
};

export default CareerService;
