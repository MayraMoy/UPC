import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes';
import careerRoutes from './routes/careerRoutes';
import authRoutes from './routes/authRoutes';
import paisRoutes from './routes/paisRoutes';
import localidadRoutes from './routes/localidadRoutes';
import materiaRoutes from './routes/materiaRoutes';

// Importar rutas
//import userRoutes from './apis/userRoutes';
import userRoutes from './apis/userRoutes';
//import postRoutes from './apis/postRoutes';
import postRoutes from './apis/postRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Rutas
// Rutas irán aquí (ej. /api/students)
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/paises', paisRoutes);
app.use('/api/localidades', localidadRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
// Ruta de salud
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});