// src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import studentRoutes from './routes/studentRoutes';
import careerRoutes from './routes/careerRoutes';
import authRoutes from './routes/authRoutes';
import paisRoutes from './routes/paisRoutes';
import localidadRoutes from './routes/localidadRoutes';
import cursadasRoutes from './routes/cursadasRoutes';


import materiaRoutes from './routes/materiaRoutes';
import generoRoutes from "./routes/generoRoutes";
import areaTelefonicaRoutes from "./routes/areaTelefonicaRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/paises', paisRoutes);
app.use('/api/localidades', localidadRoutes);
app.use('/api/cursadas', cursadasRoutes);

app.use('/api/materias', materiaRoutes);
app.use("/api/generos", generoRoutes);
app.use("/api/areas-telefonicas", areaTelefonicaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
