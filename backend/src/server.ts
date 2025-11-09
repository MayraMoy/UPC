// src/server.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes';
import careerRoutes from './routes/careerRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas irán aquí (ej. /api/students)
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/careers', careerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

app.post("/test", (req, res) => {
  res.send("Ruta POST /test funcionando ✅");
});
