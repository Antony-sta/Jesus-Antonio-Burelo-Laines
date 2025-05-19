const mongoose = require("mongoose");

const CalificacionesSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // Usa el ID existente
    nombre: { type: String, required: true },
    nocontrol: { type: String, required: true },
    materia1: { type: Number, required: true },
    materia2: { type: Number, required: true },
    materia3: { type: Number, required: true },
    materia4: { type: Number, required: true },
    materia5: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Calificaciones", CalificacionesSchema);