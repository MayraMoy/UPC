"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const password = 'admin123';
const hashed = bcrypt_1.default.hashSync(password, 10);
console.log('Hash generado:', hashed);
const isValid = bcrypt_1.default.compareSync('admin123', hashed);
console.log('¿Password válido?:', isValid);
//# sourceMappingURL=hashPassword.js.map