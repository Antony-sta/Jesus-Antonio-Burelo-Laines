const express = require("express");
const multiparty = require("connect-multiparty");

const productosController = require("../controlles/productos.controller");
const usuarios = require("../controlles/usuarios.controller");
const usuariosController = require("../controlles/usuarios.controller");

const md_mparty = multiparty({ uploadDir: "./uploads" });
const api = express.Router();

// Rutas para productos
api.post("/crear", [md_mparty], productosController.createProducto);
api.post("/user", [md_mparty], usuarios.createUser);

api.get("/lista", productosController.getProducto);
api.patch("/verlos/:id", [md_mparty], productosController.updateProducto);
api.delete("/eliminar/:id", productosController.delProducto);

// Ruta para login
api.post("/login", usuariosController.loginUser);

module.exports = api;