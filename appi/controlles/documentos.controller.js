const Documento = require("../models/documento.models");

async function subirDocumento(req, res) {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).send({ msg: "No se subió ningún archivo" });
    }
    const file = req.files.file;
    const nuevoDoc = new Documento({
      nombre: file.originalFilename,
      tipo: file.type,
      datos: require("fs").readFileSync(file.path)
    });
    await nuevoDoc.save();
    res.status(201).send({ msg: "Documento guardado correctamente" });
  } catch (error) {
    console.error("Error al guardar el documento:", error);
    res.status(500).send({ msg: "Error al guardar el documento", error: error.message });
  }
}

module.exports = { subirDocumento };