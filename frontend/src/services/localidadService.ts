import axios from 'axios';

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
