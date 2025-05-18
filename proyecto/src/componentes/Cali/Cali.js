import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form'; // <-- Comenta esta línea si no usas Form
import './Cali.css'; // Importa el archivo CSS

const materias = [
  {
    nombre: 'Equaciones Diferenciales',
    descripcion: 'Estudio de ecuaciones diferenciales y sus aplicaciones.',
    utilidad: 'Es fundamental para modelar fenómenos físicos y resolver problemas en ingeniería.',
    comportamiento: 'El alumno muestra interés en resolver problemas complejos y aplicar conceptos matemáticos.',
    calificaciones: [85, 90, 88, 92, 87, 89, 91, 93],
    asistencias: [2, 1, 3, 2, 2, 1, 0, 1], // Días de faltas por semestre
    estado: [
      "Participativo y entrega tareas a tiempo.",
      "Mejoró en exámenes parciales.",
      "Bajó por falta de entrega de proyecto.",
      "Excelente desempeño en clase.",
      "Participación constante.",
      "Recuperó puntos en trabajos fina*les.",
      "Sin faltas, actitud positiva.",
      "Muy buen cierre de ciclo."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
    imagen: "https://normatrevino.com/wp-content/uploads/2020/04/Ecuaciones_Diferenciales_UANL_FCQ.png"
  },
  {
    nombre: 'Métodos Numéricos',
    descripcion: 'Métodos computacionales para resolver problemas matemáticos.',
    utilidad: 'Se utiliza en simulaciones y cálculos avanzados en ingeniería y ciencias.',
    comportamiento: 'El alumno demuestra habilidades en el uso de herramientas computacionales.',
    calificaciones: [80, 85, 83, 88, 84, 86, 89, 90],
    asistencias: [1, 0, 2, 1, 0, 1, 0, 0], // Ejemplo de faltas
    estado: [
      "Participación activa en clase.",
      "Entrega puntual de tareas.",
      "Buen desempeño en exámenes.",
      "Uso eficiente de software matemático.",
      "Colaboración en equipo.",
      "Mejoró en trabajos finales.",
      "Asistencia perfecta.",
      "Excelente actitud."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
    imagen: "https://cdn.slidesharecdn.com/ss_thumbnails/intrometodosnumericos-240104101908-92d4daff-thumbnail.jpg?width=640&height=640&fit=bounds"
  },
  { 
    nombre: 'Fundamentos Base de datos', 
    descripcion: 'Introducción a bases de datos y SQL.', 
    calificaciones: [78, 82, 85, 87, 84, 88, 90, 92],
    asistencias: [0, 2, 1, 0, 1, 0, 0, 1],
    estado: [
      "Aprendió conceptos básicos de SQL.",
      "Participó en prácticas de laboratorio.",
      "Realizó proyecto de base de datos.",
      "Mejoró consultas complejas.",
      "Trabajo en equipo destacado.",
      "Entrega puntual de tareas.",
      "Participación en clase.",
      "Excelente presentación final."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
    imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721302.png"
  },
  { 
    nombre: 'Tópicos Avanzados de Programación', 
    descripcion: 'Programación avanzada y patrones de diseño.', 
    calificaciones: [88, 90, 85, 87, 89, 91, 92, 93],
    asistencias: [0, 0, 1, 0, 0, 0, 0, 0],
    estado: [
      "Dominio de patrones de diseño.",
      "Participación en proyectos grupales.",
      "Resolución de problemas complejos.",
      "Entrega de prácticas avanzadas.",
      "Liderazgo en equipo.",
      "Mejoró en evaluaciones.",
      "Asistencia constante.",
      "Excelente desempeño final."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
    imagen: "https://uveg.edu.mx/images/materias/ISC/23.jpg"
  },
  { 
    nombre: 'Redes de Computadoras', 
    descripcion: 'Conceptos básicos de redes y protocolos de comunicación.', 
    calificaciones: [80, 82, 84, 86, 88, 90, 92, 94],
    asistencias: [1, 1, 0, 1, 0, 0, 0, 0],
    estado: [
      "Participación en laboratorios.",
      "Configuración de redes básicas.",
      "Entrega de proyectos de red.",
      "Mejoró en exámenes prácticos.",
      "Trabajo en equipo.",
      "Participación en clase.",
      "Asistencia perfecta.",
      "Excelente cierre de curso."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
    imagen: "https://i.pinimg.com/736x/76/e9/96/76e99676f4f7539026462e81e3f5805e.jpg"
  },
  { 
    nombre: 'Principios Electrónicos', 
    descripcion: 'Fundamentos de electrónica y circuitos.', 
    calificaciones: [75, 78, 80, 82, 85, 87, 89, 91],
    asistencias: [2, 1, 2, 1, 1, 0, 0, 1],
    estado: [
      "Aprendió conceptos de circuitos.",
      "Participación en prácticas.",
      "Entrega de proyectos electrónicos.",
      "Mejoró en exámenes.",
      "Trabajo en equipo.",
      "Participación en clase.",
      "Asistencia constante.",
      "Excelente actitud."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
     imagen: "https://0901.static.prezi.com/preview/v2/atiare7gdzgzmd3jxm4n74vfc76jc3sachvcdoaizecfr3dnitcq_3_0.png"
  },
  { 
    nombre: 'Conmutación y Enrutamiento', 
    descripcion: 'Configuración de redes y protocolos de enrutamiento.', 
    calificaciones: [70, 72, 75, 78, 80, 82, 85, 87],
    asistencias: [1, 0, 1, 0, 1, 0, 0, 0],
    estado: [
      "Configuró routers y switches.",
      "Participación en laboratorios.",
      "Entrega de proyectos de enrutamiento.",
      "Mejoró en exámenes prácticos.",
      "Trabajo en equipo.",
      "Participación en clase.",
      "Asistencia constante.",
      "Excelente desempeño final."
    ],
    alumno: {
      nombre: "Sofía Ramírez",
      matricula: "A01234567"
    },
     imagen: "https://aulavirtual.itjiquilpan.edu.mx/pluginfile.php/40625/course/overviewfiles/imagen%20conmutacion.png"
  },
];

export function Cali() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewSemesters, setViewSemesters] = useState(false); // Nuevo estado para alternar vistas
  const [formCalificaciones, setFormCalificaciones] = useState(Array(8).fill('')); // Estado para el formulario
  const [asistencia, setAsistencia] = useState({ nombre: '', matricula: '', faltas: '' });

  // Nuevo estado para el modal de explicación
  const [showExpModal, setShowExpModal] = useState(false);
  const [explicacion, setExplicacion] = useState('');

  // Nuevo estado para el modal de faltas
  const [showFaltasModal, setShowFaltasModal] = useState(false);
  const [faltasHistorial, setFaltasHistorial] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (materia, index) => {
    setModalContent(materia);
    setSelectedItem(index);
    setFormCalificaciones(materia.calificaciones); // Cargar calificaciones existentes
    setShow(true);
  };

  const handleInputChange = (index, value) => {
    const newCalificaciones = [...formCalificaciones];
    newCalificaciones[index] = value;
    setFormCalificaciones(newCalificaciones);
  };

  const handleSaveCalificaciones = () => {
    if (selectedItem !== null) {
      const updatedMaterias = [...materias];
      updatedMaterias[selectedItem].calificaciones = formCalificaciones.map(Number);
      setModalContent(updatedMaterias[selectedItem]);
      setFormCalificaciones(Array(8).fill('')); // Reinicia el formulario
      alert('Calificaciones guardadas correctamente.');
    }
  };

  const handleAsistenciaChange = (field, value) => {
    setAsistencia({ ...asistencia, [field]: value });
  };

  const handleAsistenciaSubmit = () => {
    alert(`Asistencia registrada:\nNombre: ${asistencia.nombre}\nMatrícula: ${asistencia.matricula}\nFaltas: ${asistencia.faltas}`);
    setAsistencia({ nombre: '', matricula: '', faltas: '' }); // Reinicia el formulario
  };

  // Nuevo: mostrar explicación
  const handleShowExplicacion = (estado) => {
    setExplicacion(estado || "No hay explicación disponible.");
    setShowExpModal(true);
  };

  // Función para mostrar el historial de faltas
  const handleShowFaltas = () => {
    setFaltasHistorial(modalContent.asistencias || []);
    setShowFaltasModal(true);
  };

  if (false) {
    // Referencias dummy para evitar warnings de eslint
    handleInputChange();
    handleSaveCalificaciones();
    handleAsistenciaChange();
    handleAsistenciaSubmit();
  }

  return (
    <div className="cali-background">
      <div className="cali-container">
        <h1 className="cali-title">Mis Calificaciones</h1>
        <Button variant="primary" onClick={() => setViewSemesters(!viewSemesters)}>
          {viewSemesters ? 'Ver Materias' : 'Ver Calificaciones por Semestre'}
        </Button>

        {!viewSemesters ? (
          <div className="cali-lists-container">
            <ul className="cali-list">
              {materias.map((materia, index) => (
                <li
                  key={index}
                  className={`cali-listItem ${selectedItem === index ? 'cali-selected' : ''}`}
                  onClick={() => handleShow(materia, index)}
                >
                  <div className="cali-listItem-content">
                    <span>{materia.nombre}</span>
                    {materia.imagen && (
                      <img
                        src={materia.imagen}
                        alt={materia.nombre}
                        className="cali-materia-img"
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="cali-semesters-container">
            {materias.map((materia, index) => (
              <div key={index} className="cali-semester">
                <h3>{materia.nombre}</h3>
                <ul className="cali-list">
                  {materia.calificaciones.map((calificacion, semestre) => (
                    <li key={semestre} className="cali-listItem">
                      Semestre {semestre + 1}: {calificacion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="modal-description">{modalContent.descripcion}</p>
            <h5 className="modal-subtitle">Nombre del alumno:</h5>
            {modalContent.alumno ? (
              <div className="alumno-info">
                <span className="alumno-nombre">{modalContent.alumno.nombre}</span>
                <span className="alumno-matricula">Matrícula: {modalContent.alumno.matricula}</span>
              </div>
            ) : (
              <p>Nombre no registrado</p>
            )}
            <h5 className="modal-subtitle">Estado por semestre:</h5>
            <div className="cali-card-calificaciones cali-card-efecto">
              <div className="cali-card-header">
                <span>Semestre</span>
                <span>Calificación</span>
                <span>Estado</span>
                <span>Faltas</span>
              </div>
              <div className="cali-card-body">
                {modalContent.calificaciones &&
                  modalContent.calificaciones.map((calificacion, index) => {
                    // Flechita de faltas
                    let flecha = "➡️";
                    if (
                      modalContent.asistencias &&
                      index > 0 &&
                      modalContent.asistencias[index] > modalContent.asistencias[index - 1]
                    ) flecha = "⬆️";
                    else if (
                      modalContent.asistencias &&
                      index > 0 &&
                      modalContent.asistencias[index] < modalContent.asistencias[index - 1]
                    ) flecha = "⬇️";
                    // Nuevo: botón para estado
                    const estado = modalContent.estado ? modalContent.estado[index] : null;
                    return (
                      <div className="cali-card-row" key={index}>
                        <span className="cali-semestre">Semestre {index + 1}</span>
                        <span className={`cali-calificacion ${calificacion >= 70 ? 'cali-aprobado' : 'cali-reprobado'}`}>
                          {calificacion}
                        </span>
                        <span>
                          <button
                            className="estado-btn"
                            onClick={() => handleShowExplicacion(estado)}
                          >
                            {estado ? "Ver motivo" : "Sin datos"}
                          </button>
                        </span>
                        <span>
                          <button
                            className="faltas-btn"
                            onClick={handleShowFaltas}
                            title="Ver historial de faltas"
                          >
                            {modalContent.asistencias ? modalContent.asistencias[index] : 0} {flecha}
                          </button>
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* Fin del cuadro visual */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal pequeño para explicación */}
        <Modal show={showExpModal} onHide={() => setShowExpModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Motivo de la calificación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="explicacion-estado">
              {explicacion}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowExpModal(false)}>
              Entendido
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para historial de faltas */}
        <Modal show={showFaltasModal} onHide={() => setShowFaltasModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Historial de faltas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="faltas-historial">
              {faltasHistorial.length > 0 ? (
                <ul>
                  {faltasHistorial.map((faltas, idx) => (
                    <li key={idx}>
                      Semestre {idx + 1}: <b>{faltas}</b> faltas
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay datos de faltas para este alumno.</p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowFaltasModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Cali;