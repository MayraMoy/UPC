"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const careerRoutes_1 = __importDefault(require("./routes/careerRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const paisRoutes_1 = __importDefault(require("./routes/paisRoutes"));
const localidadRoutes_1 = __importDefault(require("./routes/localidadRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/students', studentRoutes_1.default);
app.use('/api/careers', careerRoutes_1.default);
app.use('/api/paises', paisRoutes_1.default);
app.use('/api/localidades', localidadRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
app.post("/test", (req, res) => {
    res.send("Ruta POST /test funcionando ✅");
});
//# sourceMappingURL=server.js.map