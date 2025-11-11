// src/services/countryService.ts
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

// Servicio de países
export const CountryService = {
  // Obtener todos los países
  getAll() {
    return api.get<Country[]>('/paises');
  },

  // Obtener país por ID
  getById(id: number) {
    return api.get<Country>(`/paises/${id}`);
  },

  // Crear nuevo país
  create(data: CreateCountryDto) {
    return api.post<Country>('/paises', data);
  },

  // Actualizar país existente
  update(id: number, data: Partial<CreateCountryDto>) {
    return api.put<Country>(`/paises/${id}`, data);
  },

  // Eliminar país
  delete(id: number) {
    return api.delete(`/paises/${id}`);
  },
};

export default CountryService;
