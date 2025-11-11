// src/services/localidadService.ts
import axios from 'axios';

// Tipos principales
export interface Localidad {
  id: number;
  nombre: string;
  paisId: number;
}

export interface CreateLocalidadDto {
  nombre: string;
  paisId: number;
}

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

export const LocalidadService = {
  getAll() {
    return api.get<Localidad[]>('/localidades');
  },
  getById(id: number) {
    return api.get<Localidad>(`/localidades/${id}`);
  },
  create(data: CreateLocalidadDto) {
    return api.post<Localidad>('/localidades', data);
  },
  update(id: number, data: Partial<CreateLocalidadDto>) {
    return api.put<Localidad>(`/localidades/${id}`, data);
  },
  delete(id: number) {
    return api.delete(`/localidades/${id}`);
  },
};

export default LocalidadService;
