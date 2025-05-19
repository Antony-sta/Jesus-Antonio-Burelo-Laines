const Calificaciones = require('../models/calificaciones.models');

async function crearCalificaciones(req, res) {
    try {
        // Agrega este log para ver el body recibido
        console.log("Body recibido en crearCalificaciones:", req.body);

        const { _id, nombre, nocontrol, materia1, materia2, materia3, materia4, materia5 } = req.body;

        // Usa el _id proporcionado
        const nuevaCalificacion = new Calificaciones({
            _id,
            nombre,
            nocontrol,
            materia1,
            materia2,
            materia3,
            materia4,
            materia5
        });

        await nuevaCalificacion.save();

        res.status(201).send({
            msg: "Calificaciones guardadas correctamente",
            calificaciones: nuevaCalificacion
        });
    } catch (error) {
        res.status(500).send({ msg: "Error interno del servidor", error: error.message });
    }
}

// NUEVA función para actualizar calificaciones por ID
async function actualizarCalificaciones(req, res) {
    try {
        const { id } = req.params;
        const update = req.body;
        const calificacionActualizada = await Calificaciones.findByIdAndUpdate(id, update, { new: true });
        if (!calificacionActualizada) {
            return res.status(404).send({ msg: "No se encontró la calificación" });
        }
        res.status(200).send({ msg: "Calificaciones actualizadas", calificaciones: calificacionActualizada });
    } catch (error) {
        res.status(500).send({ msg: "Error al actualizar calificaciones", error: error.message });
    }
}

module.exports = {
    crearCalificaciones,
    actualizarCalificaciones
};