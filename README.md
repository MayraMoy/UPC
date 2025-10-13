# Sistema de Gestión de Estudiantes Universitarios

Este proyecto es una aplicación web completa diseñada para gestionar eficientemente los datos de los estudiantes de una universidad. Incluye funcionalidades como registro, consulta, actualización y eliminación de información académica y personal, con una arquitectura clara y escalable.

---

## Estructura del Proyecto

```
/
├── backend/          # Lógica de negocio y API REST (Node.js + TypeScript)
├── frontend/         # Interfaz de usuario (React + TypeScript)
├── db/               # Scripts SQL, migraciones y documentación de PostgreSQL
├── docs/             # Documentación técnica, guías de usuario y decisiones de diseño
├── qa/               # Pruebas automatizadas (unitarias, integración) y manuales
├── ui/               # Assets de diseño: mockups, paleta de colores, tipografía, etc.
├── README.md         # Este archivo
└── .gitignore        # Archivos y carpetas excluidos del control de versiones
```

---

## Funcionalidades Principales

- Registro y autenticación de usuarios (administradores, docentes, personal académico)
- Gestión completa de perfiles de estudiantes (datos personales, contacto, historial académico)
- Administración de programas académicos, cursos y matrículas
- Búsqueda y filtrado avanzado de estudiantes
- Reportes y estadísticas básicas
- Control de roles y permisos por tipo de usuario

---

## Tecnologías Utilizadas

### Backend
- **Lenguaje**: TypeScript
- **Framework**: Node.js + Express
- **Base de datos**: PostgreSQL
- **ORM**: Prisma o TypeORM (según elección del equipo)
- **Autenticación**: JWT + Bcrypt
- **Validación**: Zod o Joi

### Frontend
- **Framework**: React 18+
- **Lenguaje**: TypeScript
- **Gestión de estado**: Context API o Zustand
- **Estilado**: Tailwind CSS / Styled Components
- **Rutas**: React Router DOM
- **Consumo de API**: Axios o fetch

### Herramientas
- **Control de versiones**: Git + GitHub
- **Pruebas**: Jest, Cypress, React Testing Library
- **Despliegue**: Docker (opcional), Vercel (frontend), Render/Heroku (backend)

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v12+)
- [Git](https://git-scm.com/)

---

## Configuración Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/MayraMoy/UPC.git
cd UPC
```

### 2. Configurar la base de datos

- Crea una base de datos en PostgreSQL (ej. `university_db`)
- Ejecuta los scripts de inicialización desde la carpeta `db/`:

```bash
psql -U tu_usuario -d university_db -f db/init.sql
```

### 3. Backend

```bash
cd backend
cp .env.example .env  # y ajusta las variables
npm install
npm run dev
```

> El servidor correrá en `http://localhost:3000`

### 4. Frontend

```bash
cd frontend
cp .env.example .env  # ajusta la URL del backend si es necesario
npm install
npm start
```

> La app se abrirá en `http://localhost:5173` (o puerto asignado por Vite)

---

## 🧪 Pruebas

Ejecuta las pruebas automatizadas:

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test

# Pruebas E2E (si aplica)
npx cypress open
```

Los casos de prueba manuales están documentados en `qa/manual-tests.md`.

---

## Documentación

Toda la documentación adicional (diagramas UML, decisiones arquitectónicas, guías de contribución, etc.) se encuentra en la carpeta [`docs/`](docs/).

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, revisa [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) antes de enviar un PR.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [`LICENSE`](LICENSE) para más detalles.

---

## Contacto

¿Tienes preguntas o sugerencias?  
📧 Correo: mayrayazminmoyano@gmail.com 

---

> **Nota**: Este README es un punto de partida. Adáptalo según las decisiones técnicas específicas de tu equipo y los requerimientos reales del proyecto.

--- 
