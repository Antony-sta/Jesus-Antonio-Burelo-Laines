import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Archivos.css';

function Archivos() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [archivos, setArchivos] = useState([]);

  // Cargar archivos al montar
  useEffect(() => {
    obtenerArchivos();
  }, []);

  const obtenerArchivos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/documentos');
      setArchivos(res.data.documentos || []);
    } catch (error) {
      console.error('Error al obtener archivos:', error);
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (
      selected &&
      (selected.type === "application/pdf" ||
        selected.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        selected.type === "application/vnd.ms-excel")
    ) {
      setFile(selected);
    } else {
      alert("Solo se permiten archivos PDF o Excel.");
      e.target.value = null;
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Por favor selecciona un archivo');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // 'file' es el nombre que espera el backend

    try {
      setUploadStatus('Subiendo...');
      setUploadProgress(0);

      const response = await axios.post('http://localhost:5000/subir', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      setUploadStatus('¡Archivo subido con éxito!');
      console.log('Respuesta del servidor:', response.data);

      setTimeout(() => {
        setFile(null);
        setUploadProgress(0);
        setUploadStatus('');
        obtenerArchivos(); // Recarga la lista de archivos
      }, 1500);

    } catch (error) {
      console.error('Error al subir el archivo:', error);
      setUploadStatus('Error al subir el archivo');
    }
  };

  return (
    <div className="archivos-bg">
      <h2>Subir Archivo</h2>
      <input
        type="file"
        accept=".pdf,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={handleFileChange}
        className="input-file"
      />
      <button onClick={handleUpload} disabled={!file}>
        Subir Archivo
      </button>

      {uploadProgress > 0 && (
        <div>
          <progress value={uploadProgress} max="100" />
          <span>{uploadProgress}%</span>
        </div>
      )}

      {uploadStatus && <p>{uploadStatus}</p>}
      {file && (
        <div className="file-info">
          <span>{file.name}</span>
        </div>
      )}

      {/* Tabla de archivos PDF */}
      <h3 style={{marginTop: 30}}>Archivos PDF Subidos</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {archivos.filter(a => a.archivo && a.archivo.endsWith('.pdf')).map((archivo, idx) => (
            <tr key={idx}>
              <td>{archivo.nombre || archivo.archivo}</td>
              <td>
                <a
                  href={`http://localhost:5000/${archivo.archivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Ver PDF
                </a>
              </td>
            </tr>
          ))}
          {archivos.filter(a => a.archivo && a.archivo.endsWith('.pdf')).length === 0 && (
            <tr>
              <td colSpan={2}>No hay archivos PDF subidos.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Archivos;