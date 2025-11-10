"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const careerRoutes_1 = __importDefault(require("./routes/careerRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const paisRoutes_1 = __importDefault(require("./routes/paisRoutes"));
const localidadRoutes_1 = __importDefault(require("./routes/localidadRoutes"));
const userRoutes_1 = __importDefault(require("./apis/userRoutes"));
const postRoutes_1 = __importDefault(require("./apis/postRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api/students', studentRoutes_1.default);
app.use('/api/careers', careerRoutes_1.default);
app.use('/api/paises', paisRoutes_1.default);
app.use('/api/localidades', localidadRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/posts', postRoutes_1.default);
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=Index.js.map