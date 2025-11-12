import axios from "axios";

export interface Materia {
  id: number;
  nombre: string;
  carreraId: number;
  carrera?: {
    id: number;
    nombre: string;
  };
}

// 👇 Asegúrate de que exista esta propiedad
export interface CreateMateriaDto {
  nombre: string;
  carreraNombre: string; // selecciona carrera por nombre, no por ID
}

const API_URL = "http://localhost:5000/api/materias";

export const MateriaService = {
  async getAll() {
    return axios.get<Materia[]>(API_URL);
  },

  async create(data: CreateMateriaDto) {
    return axios.post(API_URL, data);
  },

  async update(id: number, data: CreateMateriaDto) {
    return axios.put(`${API_URL}/${id}`, data);
  },

  async delete(id: number) {
    return axios.delete(`${API_URL}/${id}`);
  },
};


