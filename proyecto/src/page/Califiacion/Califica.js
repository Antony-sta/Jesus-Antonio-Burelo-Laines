import React, { useState, useEffect } from 'react';
import { Datos } from '../../API';
import './Calicacion.css';

const ctrDatos = new Datos();

const materiasEjemplo = [
  "Ecuaciones Diferenciales",
  "Métodos Numéricos",
  "Fundamentos Base de datos",
  "Tópicos Avan. De programación"
];

// Datos de ejemplo para cada materia
const datosMaterias = {
  "Ecuaciones Diferenciales": {
    estado: "Aprobado",
    calificacion: 92,
    motivo: "Excelente desempeño en exámenes y tareas.",
    faltas: [0, 1, 0, 2, 0],
    temas: [
      { nombre: "Tema 1: EDOs de primer orden", calificacion: 90 },
      { nombre: "Tema 2: EDOs de segundo orden", calificacion: 95 },
      { nombre: "Tema 3: Sistemas de EDOs", calificacion: 88 },
      { nombre: "Tema 4: Métodos numéricos", calificacion: 93 },
      { nombre: "Tema 5: Aplicaciones", calificacion: 94 }
    ]
  },
  "Métodos Numéricos": {
    estado: "Aprobado",
    calificacion: 88,
    motivo: "Participación activa y buenos proyectos.",
    faltas: [1, 0, 0, 0, 1]
  },
  "Fundamentos Base de datos": {
    estado: "Reprobado",
    calificacion: 58,
    motivo: "Faltas frecuentes y bajo rendimiento en prácticas.",
    faltas: [2, 3, 1, 0, 2]
  },
  "Tópicos Avan. De programación": {
    estado: "Aprobado",
    calificacion: 95,
    motivo: "Proyectos sobresalientes y asistencia perfecta.",
    faltas: [0, 0, 0, 0, 0]
  }
};

export function Califica() {
    const [usuario, setUsuario] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
    const [modalTemaOpen, setModalTemaOpen] = useState(false);
    const [temaSeleccionado, setTemaSeleccionado] = useState(null);
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
            <div>
                <h2>No se encontraron datos para este usuario.</h2>
            </div>
        );
    }

    return (
        <div className="califica-main">
            <div className="alumno-info-centro">
                <img
                    src={
                        usuario.imagep
                            ? `http://localhost:5000/${usuario.imagep}`
                            : "https://via.placeholder.com/110"
                    }
                    alt="Imagen del usuario"
                    width="110"
                    height="110"
                    className="cali-materia-img"
                />
                <div className="alumno-nombre">{usuario.nombre}</div>
                <div className="alumno-matricula">{usuario.matricula}</div>
            </div>
            <div className="materias-grid">
                {materiasEjemplo.map((materia, idx) => (
                    <div
                        className="materia-card"
                        key={idx}
                        onClick={() => {
                            setMateriaSeleccionada(materia);
                            setModalOpen(true);
                        }}
                    >
                        <div>{materia}</div>
                        <div className="materia-alumno-nombre">{usuario.nombre}</div>
                        <div className="materia-alumno-matricula">{usuario.matricula}</div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3>{materiaSeleccionada}</h3>
                        <div className="materia-nombre-resaltado">Sofia Ramirez</div>
                        <div className="materia-alumno-matricula">{usuario.matricula}</div>
                        <table className="tabla-materia">
                            <thead>
                                <tr>
                                    <th>Estado</th>
                                    <th>Calificación</th>
                                    <th>Motivo</th>
                                    <th colSpan="5">Faltas por Semestre</th>
                                </tr>
                                <tr>
                                    <th colSpan="3"></th>
                                    <th>Sem 1</th>
                                    <th>Sem 2</th>
                                    <th>Sem 3</th>
                                    <th>Sem 4</th>
                                    <th>Sem 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className={datosMaterias[materiaSeleccionada].estado === "Aprobado" ? "estado-aprobado" : "estado-reprobado"}>
                                            {datosMaterias[materiaSeleccionada].estado}
                                        </span>
                                    </td>
                                    <td>{datosMaterias[materiaSeleccionada].calificacion}</td>
                                    <td>{datosMaterias[materiaSeleccionada].motivo}</td>
                                    {datosMaterias[materiaSeleccionada].faltas.map((f, i) => (
                                        <td key={i}>{f}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <button className="modal-close-btn" onClick={() => setModalOpen(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Califica;