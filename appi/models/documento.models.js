const mongoose = require("mongoose");

const DocumentoSchema = mongoose.Schema({
  nombre: String,
  tipo: String,
  archivo: String, // Aquí guardas el nombre del archivo subido
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Documento", DocumentoSchema);