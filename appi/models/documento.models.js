const mongoose = require("mongoose");

const DocumentoSchema = mongoose.Schema({
  nombre: String,
  tipo: String,
  datos: Buffer,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Documento", DocumentoSchema);