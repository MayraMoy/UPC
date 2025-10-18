-- CreateTable
CREATE TABLE "PAISES" (
    "id_pais" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "PAISES_pkey" PRIMARY KEY ("id_pais")
);

-- CreateTable
CREATE TABLE "LOCALIDADES" (
    "id_localidad" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_pais" INTEGER NOT NULL,

    CONSTRAINT "LOCALIDADES_pkey" PRIMARY KEY ("id_localidad")
);

-- CreateTable
CREATE TABLE "AREAS_TELEFONICAS" (
    "id_area_telefonica" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "AREAS_TELEFONICAS_pkey" PRIMARY KEY ("id_area_telefonica")
);

-- CreateTable
CREATE TABLE "GENEROS" (
    "id_genero" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "GENEROS_pkey" PRIMARY KEY ("id_genero")
);

-- CreateTable
CREATE TABLE "CARRERAS" (
    "id_carrera" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "titulo_otorgado" TEXT NOT NULL,

    CONSTRAINT "CARRERAS_pkey" PRIMARY KEY ("id_carrera")
);

-- CreateTable
CREATE TABLE "MATERIAS" (
    "id_materia" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "id_carrera" INTEGER NOT NULL,

    CONSTRAINT "MATERIAS_pkey" PRIMARY KEY ("id_materia")
);

-- CreateTable
CREATE TABLE "CONDICIONES" (
    "id_condition" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "CONDICIONES_pkey" PRIMARY KEY ("id_condition")
);

-- CreateTable
CREATE TABLE "ESTUDIANTES" (
    "id_estudiante" SERIAL NOT NULL,
    "id_pais" INTEGER NOT NULL,
    "id_localidad" INTEGER NOT NULL,
    "id_area_telefonica" INTEGER NOT NULL,
    "id_genero" INTEGER NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "cohorte" TEXT NOT NULL,
    "secundario" TEXT NOT NULL,
    "cuil" TEXT NOT NULL,
    "examen_mayores25" BOOLEAN NOT NULL,
    "solicito_beca" BOOLEAN NOT NULL,
    "trabajador" BOOLEAN NOT NULL,
    "persona_a_cargo" BOOLEAN NOT NULL,
    "observaciones" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "ESTUDIANTES_pkey" PRIMARY KEY ("id_estudiante")
);

-- CreateTable
CREATE TABLE "INSCRIPCIONES" (
    "id_inscripcion" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id_carrera" INTEGER NOT NULL,
    "fecha_inscripcion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "causa_inactividad" TEXT,

    CONSTRAINT "INSCRIPCIONES_pkey" PRIMARY KEY ("id_inscripcion")
);

-- CreateTable
CREATE TABLE "ESTUDIANTES_CARRERAS" (
    "id_ec" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id_carrera" INTEGER NOT NULL,
    "fecha_alta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_baja" TIMESTAMP(3),

    CONSTRAINT "ESTUDIANTES_CARRERAS_pkey" PRIMARY KEY ("id_ec")
);

-- CreateTable
CREATE TABLE "CURSADAS" (
    "id_cursada" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id_materia" INTEGER NOT NULL,
    "nota_final" DECIMAL(65,30),

    CONSTRAINT "CURSADAS_pkey" PRIMARY KEY ("id_cursada")
);

-- CreateTable
CREATE TABLE "CONDICIONES_MATERIAS" (
    "id_cm" SERIAL NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "id_materia" INTEGER NOT NULL,
    "id_condition" INTEGER NOT NULL,

    CONSTRAINT "CONDICIONES_MATERIAS_pkey" PRIMARY KEY ("id_cm")
);

-- CreateIndex
CREATE UNIQUE INDEX "ESTUDIANTES_dni_key" ON "ESTUDIANTES"("dni");

-- AddForeignKey
ALTER TABLE "LOCALIDADES" ADD CONSTRAINT "LOCALIDADES_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "PAISES"("id_pais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MATERIAS" ADD CONSTRAINT "MATERIAS_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "CARRERAS"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ESTUDIANTES" ADD CONSTRAINT "ESTUDIANTES_id_pais_fkey" FOREIGN KEY ("id_pais") REFERENCES "PAISES"("id_pais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ESTUDIANTES" ADD CONSTRAINT "ESTUDIANTES_id_localidad_fkey" FOREIGN KEY ("id_localidad") REFERENCES "LOCALIDADES"("id_localidad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ESTUDIANTES" ADD CONSTRAINT "ESTUDIANTES_id_area_telefonica_fkey" FOREIGN KEY ("id_area_telefonica") REFERENCES "AREAS_TELEFONICAS"("id_area_telefonica") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ESTUDIANTES" ADD CONSTRAINT "ESTUDIANTES_id_genero_fkey" FOREIGN KEY ("id_genero") REFERENCES "GENEROS"("id_genero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "INSCRIPCIONES" ADD CONSTRAINT "INSCRIPCIONES_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "ESTUDIANTES"("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "INSCRIPCIONES" ADD CONSTRAINT "INSCRIPCIONES_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "CARRERAS"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ESTUDIANTES_CARRERAS" ADD CONSTRAINT "ESTUDIANTES_CARRERAS_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "ESTUDIANTES"("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ESTUDIANTES_CARRERAS" ADD CONSTRAINT "ESTUDIANTES_CARRERAS_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "CARRERAS"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CURSADAS" ADD CONSTRAINT "CURSADAS_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "ESTUDIANTES"("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CURSADAS" ADD CONSTRAINT "CURSADAS_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "MATERIAS"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CONDICIONES_MATERIAS" ADD CONSTRAINT "CONDICIONES_MATERIAS_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "ESTUDIANTES"("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CONDICIONES_MATERIAS" ADD CONSTRAINT "CONDICIONES_MATERIAS_id_materia_fkey" FOREIGN KEY ("id_materia") REFERENCES "MATERIAS"("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CONDICIONES_MATERIAS" ADD CONSTRAINT "CONDICIONES_MATERIAS_id_condition_fkey" FOREIGN KEY ("id_condition") REFERENCES "CONDICIONES"("id_condition") ON DELETE RESTRICT ON UPDATE CASCADE;
