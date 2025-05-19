const express = require("express");
const multiparty = require("connect-multiparty");

const productosController = require("../controlles/productos.controller");
const usuarios = require("../controlles/usuarios.controller");
const usuariosController = require("../controlles/usuarios.controller");
const documento = require("../controlles/documentos.controller")
const calificacionesController = require("../controlles/calificaciones.controller");

const md_mparty = multiparty({ uploadDir: "./uploads" });
const api = express.Router();

// Rutas para productos
api.post("/crear", [md_mparty], productosController.createProducto);
api.post("/user", [md_mparty], usuarios.createUser);

api.get("/lista", productosController.getProducto);
api.patch("/verlos/:id", [md_mparty], productosController.updateProducto);
api.delete("/eliminar/:id", productosController.delProducto);

api.post("/subir",[md_mparty,documento.subirDocumento ])
api.get("/documentos", documento.getDocumentos);
// Ruta para login
api.post("/login", usuariosController.loginUser);

// Ruta para actualizar calificaciones por ID

// Ruta para crear calificaciones
api.post("/calificaciones", calificacionesController.crearCalificaciones);

// Ruta para ver (listar) todas las calificaciones
api.get("/calificaciones", async (req, res) => {
    try {
        const calificaciones = await require("../models/calificaciones.models").find().sort({ createdAt: -1 });
        res.status(200).send({ calificaciones });
    } catch (error) {
        res.status(500).send({ msg: "Error al obtener calificaciones", error: error.message });
    }
});

module.exports = api;