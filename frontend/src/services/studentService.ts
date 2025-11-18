import axios from "axios";

const API_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  process.env["REACT_APP_API_URL"] ||
  "http://localhost:5000/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// ---------------- TIPOS ----------------
export interface Estudiante {
  id: number;
  nombres: string;
  apellidos: string;
  dni: string;
  email: string;
  telefono: string;
  domicilio: string;
  cohorte: string;
  secundario: string;
  cuil: string;
  examenMayores25: boolean;
  solicitoBeca: boolean;
  trabajador: boolean;
  personaACargo: boolean;
  observaciones?: string;
  estado: string;
  pais?: { nombre: string };
  localidad?: { nombre: string };
  genero?: { nombre: string };
  areaTelefonica?: { codigo: string };
}

export interface CreateEstudianteDto {
  nombres: string;
  apellidos: string;
  dni: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
  domicilio: string;
  cohorte: string;
  secundario: string;
  cuil: string;
  examenMayores25: boolean;
  solicitoBeca: boolean;
  trabajador: boolean;
  personaACargo: boolean;
  observaciones?: string;
  paisNombre: string;
  localidadNombre: string;
  generoNombre: string;
  areaTelefonicaCodigo: string;
}

// ---------------- SERVICIO ----------------
export const StudentService = {
  async getAll() {
    return axios.get(`${API_URL}/students`, getAuthHeaders());
  },

  async getById(id: number) {
    return axios.get(`${API_URL}/students/${id}`, getAuthHeaders());
  },

  async create(data: CreateEstudianteDto) {
    return axios.post(`${API_URL}/students`, data, getAuthHeaders());
  },

  async update(id: number, data: CreateEstudianteDto) {
    return axios.put(`${API_URL}/students/${id}`, data, getAuthHeaders());
  },

  async deactivate(id: number) {
    return axios.patch(`${API_URL}/students/${id}/deactivate`, {}, getAuthHeaders());
  },

  async reactivate(id: number) {
    return axios.patch(`${API_URL}/students/${id}/reactivate`, {}, getAuthHeaders());
  },
};

// ---------------- AUXILIARES ----------------
export async function getPaises() {
  const res = await axios.get(`${API_URL}/paises`);
  return res.data;
}

export async function getLocalidades() {
  const res = await axios.get(`${API_URL}/localidades`);
  return res.data;
}

export async function getGeneros() {
  const res = await axios.get(`${API_URL}/generos`);
  return res.data;
}

export async function getAreasTelefonicas() {
  const res = await axios.get(`${API_URL}/areas-telefonicas`);
  return res.data;
}