# Registro de Cambios

## [10/11/2025] - Reemplazo de `confirm` nativo por diálogo de React

### Cambios realizados:
1. Se eliminó el uso de `window.confirm()` en `CareersPage.tsx`
2. Se implementó un diálogo personalizado usando Headless UI Dialog
3. Se mejoró la experiencia de usuario con una interfaz más amigable

### Razones para el cambio:
El uso de `window.confirm()` no se recomienda por las siguientes razones:

1. **Bloquea el hilo principal**: Congela la interfaz de usuario hasta que el usuario responda, lo que puede afectar el rendimiento.

2. **Poco personalizable**: No permite personalizar el estilo, texto de los botones o comportamiento.

3. **Inconsistencia en la UI**: El aspecto varía según el navegador, rompiendo la consistencia visual de la aplicación.

4. **Accesibilidad**: Los diálogos nativos no siempre son accesibles para usuarios con discapacidades.

5. **Mejor experiencia de usuario**: Los diálogos personalizados permiten un flujo más natural y una mejor integración con el diseño de la aplicación.

### Cómo probar:
1. Navega a la sección de Carreras
2. Intenta eliminar una carrera
3. Verifica que aparezca el diálogo de confirmación personalizado
4. Comprueba que tanto el botón de confirmar como el de cancelar funcionen correctamente
