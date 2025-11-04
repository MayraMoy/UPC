-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Localidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "paisId" INTEGER NOT NULL,
    CONSTRAINT "Localidad_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AreaTelefonica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Condicion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Carrera" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "tituloOtorgado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Materia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "carreraId" INTEGER NOT NULL,
    CONSTRAINT "Materia_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paisId" INTEGER NOT NULL,
    "localidadId" INTEGER NOT NULL,
    "areaTelefonicaId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "fechaIngreso" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cohorte" TEXT NOT NULL,
    "secundario" TEXT NOT NULL,
    "cuil" TEXT NOT NULL,
    "examenMayores25" BOOLEAN NOT NULL,
    "solicitoBeca" BOOLEAN NOT NULL,
    "trabajador" BOOLEAN NOT NULL,
    "personaACargo" BOOLEAN NOT NULL,
    "observaciones" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    CONSTRAINT "Estudiante_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estudiante_localidadId_fkey" FOREIGN KEY ("localidadId") REFERENCES "Localidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estudiante_areaTelefonicaId_fkey" FOREIGN KEY ("areaTelefonicaId") REFERENCES "AreaTelefonica" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estudiante_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,
    "fechaInscripcion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL DEFAULT 'Activa',
    "causaInactividad" TEXT,
    CONSTRAINT "Inscripcion_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscripcion_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EstudianteCarrera" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,
    "fechaAlta" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaBaja" DATETIME,
    CONSTRAINT "EstudianteCarrera_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EstudianteCarrera_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cursada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,
    "notaFinal" REAL,
    CONSTRAINT "Cursada_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cursada_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CondicionMateria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,
    "condicionId" INTEGER NOT NULL,
    CONSTRAINT "CondicionMateria_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CondicionMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CondicionMateria_condicionId_fkey" FOREIGN KEY ("condicionId") REFERENCES "Condicion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pais_nombre_key" ON "Pais"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Localidad_nombre_paisId_key" ON "Localidad"("nombre", "paisId");

-- CreateIndex
CREATE UNIQUE INDEX "AreaTelefonica_codigo_key" ON "AreaTelefonica"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Genero_nombre_key" ON "Genero"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Condicion_nombre_key" ON "Condicion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Carrera_nombre_key" ON "Carrera"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Materia_nombre_carreraId_key" ON "Materia"("nombre", "carreraId");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_dni_key" ON "Estudiante"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Inscripcion_estudianteId_carreraId_key" ON "Inscripcion"("estudianteId", "carreraId");

-- CreateIndex
CREATE UNIQUE INDEX "EstudianteCarrera_estudianteId_carreraId_key" ON "EstudianteCarrera"("estudianteId", "carreraId");

-- CreateIndex
CREATE UNIQUE INDEX "Cursada_estudianteId_materiaId_key" ON "Cursada"("estudianteId", "materiaId");

-- CreateIndex
CREATE UNIQUE INDEX "CondicionMateria_estudianteId_materiaId_key" ON "CondicionMateria"("estudianteId", "materiaId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
