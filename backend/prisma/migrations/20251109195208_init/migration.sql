/*
  Warnings:

  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Users_email_key";

-- AlterTable
ALTER TABLE "Condicion" ADD COLUMN "descripcion" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Posts";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER,
    "accion" TEXT NOT NULL,
    "entidad" TEXT NOT NULL,
    "entidadId" INTEGER,
    "detalle" JSONB,
    "ip" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AuditLog_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CondicionMateria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,
    "condicionId" INTEGER NOT NULL,
    "fechaAsignada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observaciones" TEXT,
    "createdById" INTEGER,
    CONSTRAINT "CondicionMateria_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CondicionMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CondicionMateria_condicionId_fkey" FOREIGN KEY ("condicionId") REFERENCES "Condicion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CondicionMateria_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CondicionMateria" ("condicionId", "estudianteId", "id", "materiaId") SELECT "condicionId", "estudianteId", "id", "materiaId" FROM "CondicionMateria";
DROP TABLE "CondicionMateria";
ALTER TABLE "new_CondicionMateria" RENAME TO "CondicionMateria";
CREATE UNIQUE INDEX "CondicionMateria_estudianteId_materiaId_key" ON "CondicionMateria"("estudianteId", "materiaId");
CREATE TABLE "new_Cursada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,
    "notaFinal" REAL,
    "createdById" INTEGER,
    CONSTRAINT "Cursada_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Cursada_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Cursada_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cursada" ("estudianteId", "id", "materiaId", "notaFinal") SELECT "estudianteId", "id", "materiaId", "notaFinal" FROM "Cursada";
DROP TABLE "Cursada";
ALTER TABLE "new_Cursada" RENAME TO "Cursada";
CREATE UNIQUE INDEX "Cursada_estudianteId_materiaId_key" ON "Cursada"("estudianteId", "materiaId");
CREATE TABLE "new_EstudianteCarrera" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,
    "fechaAlta" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaBaja" DATETIME,
    CONSTRAINT "EstudianteCarrera_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "EstudianteCarrera_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_EstudianteCarrera" ("carreraId", "estudianteId", "fechaAlta", "fechaBaja", "id") SELECT "carreraId", "estudianteId", "fechaAlta", "fechaBaja", "id" FROM "EstudianteCarrera";
DROP TABLE "EstudianteCarrera";
ALTER TABLE "new_EstudianteCarrera" RENAME TO "EstudianteCarrera";
CREATE UNIQUE INDEX "EstudianteCarrera_estudianteId_carreraId_key" ON "EstudianteCarrera"("estudianteId", "carreraId");
CREATE TABLE "new_Inscripcion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estudianteId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,
    "fechaInscripcion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL DEFAULT 'Activa',
    "causaInactividad" TEXT,
    "createdById" INTEGER,
    CONSTRAINT "Inscripcion_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Inscripcion_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Inscripcion_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Inscripcion" ("carreraId", "causaInactividad", "estado", "estudianteId", "fechaInscripcion", "id") SELECT "carreraId", "causaInactividad", "estado", "estudianteId", "fechaInscripcion", "id" FROM "Inscripcion";
DROP TABLE "Inscripcion";
ALTER TABLE "new_Inscripcion" RENAME TO "Inscripcion";
CREATE UNIQUE INDEX "Inscripcion_estudianteId_carreraId_key" ON "Inscripcion"("estudianteId", "carreraId");
CREATE TABLE "new_Localidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "paisId" INTEGER NOT NULL,
    CONSTRAINT "Localidad_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Localidad" ("id", "nombre", "paisId") SELECT "id", "nombre", "paisId" FROM "Localidad";
DROP TABLE "Localidad";
ALTER TABLE "new_Localidad" RENAME TO "Localidad";
CREATE UNIQUE INDEX "Localidad_nombre_paisId_key" ON "Localidad"("nombre", "paisId");
CREATE TABLE "new_Materia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "carreraId" INTEGER NOT NULL,
    CONSTRAINT "Materia_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Materia" ("carreraId", "id", "nombre") SELECT "carreraId", "id", "nombre" FROM "Materia";
DROP TABLE "Materia";
ALTER TABLE "new_Materia" RENAME TO "Materia";
CREATE UNIQUE INDEX "Materia_nombre_carreraId_key" ON "Materia"("nombre", "carreraId");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'PERSONAL',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "password", "role", "updatedAt") SELECT "createdAt", "email", "id", "password", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
