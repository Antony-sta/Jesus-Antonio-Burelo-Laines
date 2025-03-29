const Usuarios = require("../models/usuarios.models");
const Producto = require("../models/producto.models"); // Importar el modelo de productos

// Función para generar cadenas aleatorias de longitud específica
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

async function createUser(req, res) {
    try {
        const user = req.body.user || `user_${generateRandomString(5)}`;
        const password = req.body.password || generateRandomString(5);

        const existingUser = await Usuarios.findOne({ user });
        if (existingUser) {
            return res.status(400).send({ msg: "El usuario ya está en uso" });
        }

        const credenciales = await Usuarios.create({
            user,
            password,
        });

        res.status(201).send({
            msg: "Usuario creado correctamente",
            user: {
                id: credenciales._id,
                user: credenciales.user,
                password,
            },
        });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).send({ msg: "Error interno del servidor", error: error.message });
    }
}

async function loginUser(req, res) {
    try {
        const { user, password } = req.body;

        // Verificar si el usuario existe
        const usuario = await Usuarios.findOne({ user });
        if (!usuario) {
            return res.status(404).send({ msg: "Usuario no encontrado" });
        }

        // Verificar si la contraseña es correcta
        if (usuario.password !== password) {
            return res.status(401).send({ msg: "Contraseña incorrecta" });
        }

        // Si todo es correcto, devolver una respuesta exitosa
        res.status(200).send({
            msg: "Inicio de sesión exitoso",
            user: {
                id: usuario._id,
                user: usuario.user,
            },
        });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).send({ msg: "Error interno del servidor", error: error.message });
    }
}

module.exports = { createUser, loginUser };
