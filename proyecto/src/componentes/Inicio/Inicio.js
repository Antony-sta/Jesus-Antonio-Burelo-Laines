import React, { useState, useEffect } from 'react';
import './Inicio.css';
import { Datos } from '../../API/';

const ctrDatos = new Datos();

export function Inicio() {
  const [usuario, setUsuario] = useState(null);
  const usuarioId = localStorage.getItem("usuarioId");

  const obtener = async () => {
    try {
      const listaPro = await ctrDatos.getDatos();
      const filtrados = listaPro.filter(dato => String(dato._id) === String(usuarioId));
      setUsuario(filtrados[0] || null);
    } catch (error) {
      console.error("No se logra obtener:", error);
      setUsuario(null);
    }
  };

  useEffect(() => {
    obtener();
    // eslint-disable-next-line
  }, []);

  if (!usuario) {
    return (
      <div className="inicio-container">
        <div className="ventana-inicio">
          <h2 style={{ color: "#6a11cb", fontWeight: "bold" }}>No se encontraron datos para este usuario.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="inicio-container">
      <div className="ventana-inicio">
        <h1 style={{ color: "#6a11cb", fontWeight: "bold", marginBottom: 6 }}>
          <span style={{ background: "#2575fc", color: "#fff", padding: "2px 10px", borderRadius: "6px", fontWeight: "bold" }}>Información</span>
          <span style={{ color: "#6a11cb", fontWeight: "bold" }}> del alumno</span>
        </h1>
        <h2 style={{ color: "#6a11cb", fontWeight: "bold", marginBottom: 24 }}>{usuario.nombre || "N/A"}</h2>
        <div className="sie-info-flex">
          <div className="foto-halo-fuego">
            <img
              src= "https://randomuser.me/api/portraits/lego/1.jpg"
              alt="Foto del alumno"
              className="foto-sofia"
            />
          </div>
          <div className="sie-info-datos">
            <div><strong>Nombre:</strong> {usuario.nombre || "N/A"}</div>
            <div><strong>No. Control:</strong> {usuario.nocontrol || "N/A"}</div>
            <div><strong>Calle:</strong> {usuario.calle || "N/A"}</div>
            <div><strong>Correo:</strong> {usuario.correo || "N/A"}</div>
            <div><strong>Sexo:</strong> {usuario.sexo || "N/A"}</div>
            <div><strong>Barrio:</strong> {usuario.barrio || "N/A"}</div>
            <div><strong>Teléfono:</strong> {usuario.telefono || "N/A"}</div>
            <div><strong>Edad:</strong> {usuario.edad || "N/A"}</div>
            <div><strong>Año:</strong> {usuario.año !== undefined && usuario.año !== null ? usuario.año : "N/A"}</div>
            <div><strong>Mes:</strong> {usuario.mes || "N/A"}</div>
            <div><strong>Día:</strong> {usuario.dia !== undefined && usuario.dia !== null ? usuario.dia : "N/A"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;