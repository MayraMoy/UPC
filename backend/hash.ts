// hash.ts
import bcrypt from 'bcrypt';
const password = 'admin123'; // ← tu contraseña en texto plano
console.log(bcrypt.hashSync(password, 10));