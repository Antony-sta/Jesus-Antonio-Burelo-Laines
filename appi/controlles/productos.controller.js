const Producto = require('../models/producto.models');
const Usuarios = require('../models/usuarios.models'); // Importar el modelo de usuarios
const imagen = require("../utils/img");
const fs = require('fs');
const path = require('path');

function generar(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

async function createProducto(req, res) {
    try {
        const producto = new Producto(req.body);

        // Guardar el producto en la base de datos
        const savedProducto = await producto.save();

        // Generar usuario y contraseña automáticamente
        const user = `user_${generar(5)}`;
        const password = req.body.password || generar(5); // Contraseña generada

        // Crear el usuario con el mismo ID que el producto
        const usuario = await Usuarios.create({
            _id: savedProducto._id, // Usar el mismo ID que el producto
            user,
            password, // Guardar la contraseña en texto plano
        });

        res.status(201).send({
            msg: "Producto y usuario creados correctamente",
            producto: savedProducto,
            usuario: {
                id: usuario._id,
                user: usuario.user,
                password, // Enviamos la contraseña generada para que el cliente la reciba
            },
        });
    } catch (error) {
        console.error("Error al crear el producto y el usuario:", error);
        res.status(500).send({ msg: "Error interno del servidor", error: error.message });
    }
}

async function getProducto(req, res) {
    try {
        const buscarProducto = await Producto.find();
        res.status(200).send(buscarProducto);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).send({ msg: "Error al buscar los datos", error: error.message });
    }
}

async function delProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).send({ msg: "Producto no encontrado" });
        }

        // Eliminar la imagen asociada si existe
        if (producto.imagep) {
            const imagePath = path.join(__dirname, '..', 'uploads', producto.imagep);
            try {
                await fs.promises.unlink(imagePath);
            } catch (err) {
                console.error("Error al eliminar la imagen:", err);
                return res.status(500).send({ msg: "Error al eliminar la imagen" });
            }
        }

        await Producto.findByIdAndDelete(id);
        res.status(200).send({ msg: "Producto eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).send({ msg: "No se ha podido eliminar la información", error: error.message });
    }
}

async function updateProducto(req, res) {
    const { id } = req.params;
    const updateData = req.body;

    try {
        if (req.files?.imagep) {
            const filePath = imagen.getFilePath(req.files.imagep); 
            const fileName = path.basename(filePath); 
            updateData.imagep = fileName;

            const producto = await Producto.findById(id);
            if (producto?.imagep) {
                const oldImagePath = path.join(__dirname, '..', 'uploads', producto.imagep);
                if (fs.existsSync(oldImagePath)) {
                    await fs.promises.unlink(oldImagePath); 
                }
            }
        }

        // Actualiza el producto en la base de datos
        const productoActualizado = await Producto.findByIdAndUpdate(
            id,
            updateData,
            { new: true } // Devuelve el producto actualizado
        );

        if (!productoActualizado) {
            return res.status(404).send({ msg: "Producto no encontrado" });
        }

        res.status(200).send({ msg: "Producto actualizado correctamente", producto: productoActualizado });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).send({ msg: "Error al actualizar el producto", error: error.message });
    }
}

module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto,
};