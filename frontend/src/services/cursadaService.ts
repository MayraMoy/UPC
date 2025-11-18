import axios from "axios";

export interface Cursada {
  id: number;
  estudianteId: number;
  carreraId: number;
  anio: number;
}

export interface CreateCursadaDto {
  estudianteId: number;
  carreraId: number;
  anio: number;
}

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const CursadaService = {
  getAll() {
    return api.get<Cursada[]>("/cursadas");
  },
  getById(id: number) {
    return api.get<Cursada>(`/cursadas/${id}`);
  },
  create(data: CreateCursadaDto) {
    return api.post<Cursada>("/cursadas", data);
  },
  update(id: number, data: Partial<CreateCursadaDto>) {
    return api.put(`/cursadas/${id}`, data);
  },
  delete(id: number) {
    return api.delete(`/cursadas/${id}`);
  },
};
