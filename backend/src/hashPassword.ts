// src/hashPassword.ts
import bcrypt from 'bcrypt';

const password = 'admin123';
const hashed = bcrypt.hashSync(password, 10);
console.log('Hash generado:', hashed);

// Verificar que funciona
const isValid = bcrypt.compareSync('admin123', hashed);
console.log('¿Password válido?:', isValid);