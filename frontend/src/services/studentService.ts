// src/services/studentService.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export interface CreateEstudianteDto {
  paisId: number;
  localidadId: number;
  areaTelefonicaId: number;
  generoId: number;
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
}

export const createStudent = async (
  data: CreateEstudianteDto,
  token: string
) => {
  const res = await axios.post(`${API_URL}/students`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
