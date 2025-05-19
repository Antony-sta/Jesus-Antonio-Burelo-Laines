import React from 'react';
import './Inicio.css';

export function Inicio() {
  return (
    <div className="inicio-container">
      <div className="ventana-inicio">
        <h1 style={{ color: "#6a11cb", fontWeight: "bold", marginBottom: 6 }}>
          <span style={{ background: "#2575fc", color: "#fff", padding: "2px 10px", borderRadius: "6px", fontWeight: "bold" }}>Información</span>
          <span style={{ color: "#6a11cb", fontWeight: "bold" }}> del alumno</span>
        </h1>
        <h2 style={{ color: "#6a11cb", fontWeight: "bold", marginBottom: 24 }}>Sofía Ramírez</h2>
        <div className="sie-info-flex">
          <div className="foto-halo-fuego">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Foto del alumno"
              className="foto-sofia"
            />
          </div>
          <div className="sie-info-datos">
            <div><strong>Matrícula:</strong> 202312346</div>
            <div><strong>Nombre:</strong> Sofía Ramírez</div>
            <div><strong>CURP:</strong> RAMS010203MDFRRN09</div>
            <div><strong>Carrera:</strong> Ingeniería en Sistemas</div>
            <div><strong>Semestre:</strong> 6°</div>
            <div><strong>Grupo:</strong> 6A</div>
            <div><strong>Correo:</strong> sofia.ramirez@ejemplo.com</div>
            <div><strong>Teléfono:</strong> 555-987-6543</div>
            <div><strong>Fecha de nacimiento:</strong> 03/02/2001</div>
            <div><strong>Dirección:</strong> Av. Reforma 456, CDMX</div>
            <div><strong>Estado civil:</strong> Soltera</div>
            <div><strong>Tipo de sangre:</strong> O+</div>
            <div><strong>Tutor:</strong> Laura Ramírez</div>
            <div><strong>Promedio general:</strong> 9.4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;