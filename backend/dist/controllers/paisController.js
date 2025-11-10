"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePais = exports.updatePais = exports.createPais = exports.getPaisById = exports.getPaises = void 0;
const paisService_1 = require("../services/paisService");
const paisService = new paisService_1.PaisService();
const getPaises = async (_req, res) => {
    try {
        const paises = await paisService.getAllPaises();
        return res.json(paises);
    }
    catch (error) {
        console.error("Error al obtener países:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.getPaises = getPaises;
const getPaisById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        const pais = await paisService.getPaisById(id);
        if (!pais) {
            return res.status(404).json({ error: "País no encontrado" });
        }
        return res.json(pais);
    }
    catch (error) {
        console.error("Error al buscar país:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.getPaisById = getPaisById;
const createPais = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
            return res
                .status(400)
                .json({ error: "El nombre del país es obligatorio" });
        }
        const pais = await paisService.createPais({ nombre: nombre.trim() });
        console.log(`[AUDIT] País creado: ${pais.nombre}`);
        return res.status(201).json(pais);
    }
    catch (error) {
        console.error("Error al crear país:", error);
        if (error.message === "Ya existe un país con ese nombre") {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.createPais = createPais;
const updatePais = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        const { nombre } = req.body;
        if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
            return res
                .status(400)
                .json({ error: "El nombre del país es obligatorio" });
        }
        const updated = await paisService.updatePais(id, {
            nombre: nombre.trim(),
        });
        console.log(`[AUDIT] País actualizado: ${updated.nombre}`);
        return res.json(updated);
    }
    catch (error) {
        console.error("Error al actualizar país:", error);
        if (error.message === "País no encontrado") {
            return res.status(404).json({ error: error.message });
        }
        if (error.message === "Ya existe otro país con ese nombre") {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.updatePais = updatePais;
const deletePais = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        const deleted = await paisService.deletePais(id);
        console.log(`[AUDIT] País eliminado: ${deleted.nombre}`);
        return res.json({ message: "País eliminado correctamente", pais: deleted });
    }
    catch (error) {
        console.error("Error al eliminar país:", error);
        if (error.message === "País no encontrado") {
            return res.status(404).json({ error: error.message });
        }
        if (error.message ===
            "No se puede eliminar el país porque tiene estudiantes asociados") {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.deletePais = deletePais;
//# sourceMappingURL=paisController.js.map