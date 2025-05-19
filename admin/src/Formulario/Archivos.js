import React, { useState } from 'react';
import axios from "axios";
import './Archivos.css';

function Archivos() {
  const [showModal, setShowModal] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel")
    ) {
      setSelectedFile(file);
    } else {
      alert("Solo se permiten archivos PDF o Excel.");
      e.target.value = null;
      setSelectedFile(null);
    }
  };

  const handleAgregar = () => {
    if (selectedFile) {
      setFileList([...fileList, selectedFile]);
      setSelectedFile(null);
    } else {
      alert("Selecciona un archivo primero.");
    }
  };

  const handleEliminar = (index) => {
    const newList = fileList.filter((_, i) => i !== index);
    setFileList(newList);
  };

  const handleSubir = async () => {
    if (fileList.length === 0) {
      alert("No hay archivos para subir.");
      return;
    }

    try {
      for (const file of fileList) {
        const formData = new FormData();
        formData.append("file", file); // Cambia "file" por el nombre correcto

        // Cambia la URL por la de tu API REST si es necesario
        await axios.post("http://localhost:5000/documentos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      alert("Archivos subidos correctamente");
      setFileList([]);
    } catch (error) {
      alert("Error al subir los archivos");
      console.error(error);
    }
  };

  const handleOcultar = () => {
    setShowModal(false);
    setFilePreview(null);
  };

  const handleVer = (file) => {
    if (file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setFilePreview({ url, type: "pdf" });
    } else {
      alert("Solo se puede previsualizar archivos PDF.");
    }
  };

  const handleClosePreview = () => {
    if (filePreview && filePreview.url) {
      URL.revokeObjectURL(filePreview.url);
    }
    setFilePreview(null);
  };

  return (
    <div className="archivos-bg">
      <h2>Formulario Profesor</h2>
      {showModal && (
        <div className="modal-doc">
          <h3>Documentos</h3>
          <input
            type="file"
            accept=".pdf,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileChange}
            className="input-file"
          />
          {selectedFile && (
            <div className="file-info">
              <span>{selectedFile.name}</span>
            </div>
          )}
          <div className="btn-group">
            <button onClick={() => setSelectedFile(null)}>Eliminar</button>
            <button onClick={handleAgregar}>Agregar Archivo</button>
            <button onClick={handleSubir}>Subir</button>
            <button onClick={handleOcultar}>Ocultar Ventana</button>
          </div>
          <ul className="file-list">
            {fileList.map((file, idx) => (
              <li key={idx} className="file-list-item">
                <span title={file.name}>{file.name.length > 30 ? file.name.slice(0, 27) + "..." : file.name}</span>
                <div>
                  <button className="ver-btn" onClick={() => handleVer(file)}>Ver</button>
                  <button className="btn-eliminar" onClick={() => handleEliminar(idx)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {filePreview && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(44,62,80,0.7)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={handleClosePreview}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              padding: "1.5rem",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#434eea",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "2.2rem",
                height: "2.2rem",
                fontSize: "1.3rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #434eea33"
              }}
              onClick={handleClosePreview}
              title="Cerrar"
            >×</button>
            {filePreview.type === "pdf" ? (
              <iframe
                src={filePreview.url}
                title="Vista previa PDF"
                style={{ width: "70vw", height: "70vh", border: "none", borderRadius: "8px" }}
              />
            ) : (
              <div>No se puede previsualizar este tipo de archivo.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Archivos;