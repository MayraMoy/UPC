Miembros:

Usuario: admin@upc.edu.ar y contraseña: admin123

Tiago
Narciso Perez
Martino Costigliolo
Ana Nieto

# Sistema de Gestión de Estudiantes Universitarios

Este proyecto es una aplicación web completa diseñada para gestionar eficientemente los datos de los estudiantes de una universidad. Incluye funcionalidades como registro, consulta, actualización y eliminación de información académica y personal, con una arquitectura clara y escalable.

---

## 📁 Estructura del Proyecto

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

## ✨ Funcionalidades Principales

- Registro y autenticación de usuarios (administradores, docentes, personal académico)
- Gestión completa de perfiles de estudiantes (datos personales, contacto, historial académico)
- Administración de programas académicos, cursos y matrículas
- Búsqueda y filtrado avanzado de estudiantes
- Reportes y estadísticas básicas
- Control de roles y permisos por tipo de usuario

---

## ⚙️ Tecnologías Utilizadas

### Backend
- **Lenguaje**: TypeScript  
- **Framework**: Node.js + Express  
- **Base de datos**: PostgreSQL  
- **ORM**: Prisma  
- **Autenticación**: JWT + Bcrypt  
- **Validación**: Zod  

### Frontend
- **Framework**: React 18+  
- **Lenguaje**: TypeScript  
- **Gestión de estado**: Context API  
- **Estilado**: Tailwind CSS  
- **Rutas**: React Router DOM  
- **Consumo de API**: Axios  

### Herramientas
- **Control de versiones**: Git + GitHub  
- **Pruebas**: Jest, React Testing Library  
- **Despliegue**: Vercel (frontend), Render (backend)

---

## 🛠 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v12+)
- [Git](https://git-scm.com/)

> 💡 **Consejo**: Si usas Windows, puedes instalar PostgreSQL con el [instalador oficial](https://www.postgresql.org/download/windows/) o mediante Docker.

---

## 🚀 Configuración Local (Guía para Colaboradores)

Sigue estos pasos **en orden** para levantar el entorno de desarrollo:

### 1. Clonar el repositorio

```bash
git clone https://github.com/MayraMoy/UPC.git
cd UPC
```

---

### 2. Configurar la base de datos PostgreSQL

#### a) **Inicia el servicio de PostgreSQL**  
Asegúrate de que PostgreSQL esté corriendo en tu máquina (puerto `5432` por defecto).

#### b) **Crea la base de datos**

Conéctate a PostgreSQL (por ejemplo, con `psql`) y ejecuta:

```sql
CREATE DATABASE university_db;
```

> 🔐 El usuario por defecto suele ser `postgres`. Si usas otro, anótalo para el paso siguiente.

---

### 3. Configurar el backend

```bash
cd backend
```

#### a) **Copia y configura el archivo `.env`**

```bash
cp .env.example .env
```

Edita `.env` y actualiza las credenciales de tu base de datos:

```env
DATABASE_URL="postgresql://postgres:tupassword@localhost:5432/university_db?schema=public"
JWT_SECRET="tu_clave_secreta_segura"
PORT=5000
```

> ⚠️ Reemplaza `tupassword` con la contraseña real de tu usuario de PostgreSQL.  
> Si tu usuario no es `postgres`, cámbialo también.

#### b) **Instalar dependencias**

```bash
npm install
```

#### c) **Generar el cliente de Prisma y aplicar migraciones**

```bash
npx prisma generate
npx prisma migrate dev --name init
```

> ✅ Esto creará las tablas en `university_db` según el modelo definido en `prisma/schema.prisma`.

#### d) **(Opcional) Cargar datos iniciales**

Si existe un script de seed (ej. `prisma/seed.ts`), ejecuta:

```bash
npx prisma db seed
```

#### e) **Iniciar el servidor**

```bash
npm run dev
```

> ✅ El backend correrá en `http://localhost:5000`

---

### 4. Configurar el frontend

```bash
cd ../frontend
cp .env.example .env  # Normalmente no requiere cambios si el backend está en localhost:5000
npm install
npm start
```

> ✅ La app se abrirá automáticamente en `http://localhost:5173`

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
```

Los casos de prueba manuales están en `qa/manual-tests.md`.

---

## 📚 Documentación

Toda la documentación adicional (DER, requisitos, decisiones técnicas, etc.) está en la carpeta [`docs/`](docs/).

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, revisa [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) antes de enviar un PR.

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver [`LICENSE`](LICENSE).

---

## 📩 Contacto

¿Tienes preguntas o sugerencias?  
📧 **Correo**: mayrayazminmoyano@gmail.com

---

> 💡 **Nota para colaboradores**:  
> Si encuentras errores en la configuración o en las instrucciones, ¡por favor abre un issue o mejora este README con un PR!

---

Este README ahora guía claramente a cualquier nuevo colaborador desde **cero hasta un entorno funcional**, con especial atención a la configuración de PostgreSQL y Prisma, que son los puntos más sensibles.
