import axios from 'axios';

// Tipos principales
export interface Country {
  id: number;
  nombre: string;
}

export interface CreateCountryDto {
  nombre: string;
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
    return api.get<Country[]>('/countries');
  },

  // Obtener carrera por ID
  getById(id: number) {
    return api.get<Country>(`/careers/${id}`);
  },

  // Crear nueva carrera
  create(data: CreateCountryDto) {
    return api.post<Country>('/countries', data);
  },

  // Actualizar carrera existente
  update(id: number, data: Partial<CreateCountryDto>) {
    return api.put<Country>(`/countries/${id}`, data);
  },

  // Eliminar carrera
  delete(id: number) {
    return api.delete(`/countries/${id}`);
  },
};

export default CareerService;