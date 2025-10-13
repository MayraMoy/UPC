# Guía para Contribuir al Proyecto

¡Gracias por tu interés en contribuir al **Sistema de Gestión de Estudiantes Universitarios**!  
Este documento contiene las pautas y buenas prácticas que debes seguir para asegurar que tus contribuciones sean claras, consistentes y útiles para todo el equipo.

---

## 📌 Tabla de Contenidos

- [Cómo contribuir](#cómo-contribuir)
- [Flujo de trabajo con Git](#flujo-de-trabajo-con-git)
- [Estándares de código](#estándares-de-código)
- [Pruebas](#pruebas)
- [Documentación](#documentación)
- [Reportar problemas](#reportar-problemas)
- [Solicitudes de características](#solicitudes-de-características)
- [Código de conducta](#código-de-conducta)

---

## Cómo contribuir

1. **Haz un fork** del repositorio.
2. **Clona tu fork** localmente:
   ```bash
   git clone https://github.com/MayraMoy/UPC.git
   cd UPC
   ```
3. **Crea una rama** para tu funcionalidad o corrección:
   ```bash
   git checkout -b feat/nueva-funcion
   # o
   git checkout -b fix/corregir-bug
   ```
4. **Desarrolla tus cambios** siguiendo los estándares del proyecto.
5. **Ejecuta las pruebas** y asegúrate de que pasan.
6. **Actualiza la documentación** si es necesario.
7. **Haz commit** con mensajes claros y descriptivos.
8. **Sube tu rama** a tu fork:
   ```bash
   git push origin feat/nueva-funcion
   ```
9. **Abre un Pull Request (PR)** desde tu rama hacia `main` del repositorio original.

---

## Flujo de trabajo con Git

- Usa **convencional commits** para tus mensajes:
  - `feat: agregar formulario de matrícula`
  - `fix: corregir error de validación en login`
  - `docs: actualizar guía de instalación`
  - `test: añadir pruebas para servicio de estudiantes`
- No hagas commits directamente en `main`.
- Mantén tu rama actualizada con `main` del repositorio original si el desarrollo toma varios días:
  ```bash
  git remote add upstream https://github.com/MayraMoy/UPC.git
  git fetch upstream
  git rebase upstream/main
  ```

---

## Estándares de código

### Backend (Node.js + TypeScript)
- Usa **ESLint + Prettier** (configuración ya incluida).
- Estructura las rutas, controladores y servicios de forma separada.
- Valida entradas con **Zod** o **Joi**.
- Maneja errores de forma centralizada.
- Usa nombres de variables y funciones en **inglés**, descriptivos y en `camelCase`.

### Frontend (React + TypeScript)
- Componentes en **carpetas propias** con `index.tsx` y `styles.ts` (si aplica).
- Evita lógica compleja en componentes; delega a hooks personalizados o servicios.
- Usa **TypeScript estricto** (`strict: true` en `tsconfig.json`).
- Estilos con **Tailwind CSS** preferentemente; si usas Styled Components, mantén la coherencia.

---

## Pruebas

- **Toda nueva funcionalidad debe incluir pruebas**.
- Las pruebas unitarias deben cubrir lógica de negocio crítica.
- Las pruebas de integración deben verificar flujos completos (ej. registro → login → consulta).
- Ejecuta las pruebas antes de hacer commit:
  ```bash
  # Backend
  npm test

  # Frontend
  npm test -- --watchAll=false
  ```

---

## Documentación

- Si tu PR introduce una nueva característica, actualiza:
  - El README (si es relevante para usuarios finales).
  - La carpeta `docs/` con diagramas, decisiones técnicas o guías.
- Usa lenguaje claro, conciso y en **español neutro** (a menos que el equipo decida otro idioma).

---

## Reportar problemas

Si encuentras un bug o comportamiento inesperado:

1. Revisa si ya existe un [issue abierto](https://github.com/MayraMoy/UPC/issues).
2. Si no existe, crea uno nuevo con:
   - Título descriptivo.
   - Pasos para reproducir.
   - Comportamiento esperado vs. real.
   - Capturas de pantalla o logs si es útil.

---

## Solicitudes de características

¿Tienes una idea para mejorar el sistema?

1. Abre un **issue** con la etiqueta `enhancement`.
2. Describe:
   - El problema que resuelve.
   - Casos de uso.
   - Posibles alternativas consideradas.
3. Espera retroalimentación del equipo antes de implementarla.

---

## Código de conducta

Este proyecto se compromete a mantener un entorno **respetuoso, inclusivo y colaborativo**.  
Todas las contribuciones deben alinearse con los principios de respeto mutuo, empatía y profesionalismo.  
Cualquier forma de acoso, discriminación o lenguaje ofensivo no será tolerada.

---

¡Gracias por ayudar a construir un sistema mejor para la comunidad universitaria! 🎓✨

--- 