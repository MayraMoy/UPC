import { z } from 'zod';

export const careerSchema = z.object({
  name: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede tener más de 100 caracteres'),
  description: z.string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(500, 'La descripción no puede tener más de 500 caracteres')
    .optional(),
  duration: z.number()
    .int('La duración debe ser un número entero')
    .positive('La duración debe ser un número positivo')
    .max(10, 'La duración máxima es de 10 años'),
  isActive: z.boolean().default(true)
});

export type CareerFormData = z.infer<typeof careerSchema>;
