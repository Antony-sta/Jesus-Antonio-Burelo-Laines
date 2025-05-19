const Documento = require("../models/documento.models");
const path = require('path');

async function subirDocumento(req, res) {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).send({ msg: "No se subió ningún archivo" });
    }
    const file = req.files.file;
    // Guarda solo el nombre del archivo, no la ruta completa
    const fileName = path.basename(file.path);

    // Aquí puedes guardar el nombre y otros datos en tu modelo Documento
    const nuevoDoc = new Documento({
      nombre: file.originalFilename,
      tipo: file.type,
      archivo: fileName, // Guarda solo el nombre, igual que haces con imagep
      // otros campos si quieres...
    });
    await nuevoDoc.save();
    res.status(201).send({ msg: "Documento guardado correctamente", documento: nuevoDoc });
  } catch (error) {
    console.error("Error al guardar el documento:", error);
    res.status(500).send({ msg: "Error al guardar el documento", error: error.message });
  }
}

async function getDocumentos(req, res) {
  try {
    const documentos = await Documento.find().sort({ createdAt: -1 });
    res.status(200).send({ documentos });
  } catch (error) {
    res.status(500).send({ msg: "Error al obtener documentos", error: error.message });
  }
}

module.exports = { subirDocumento, getDocumentos };