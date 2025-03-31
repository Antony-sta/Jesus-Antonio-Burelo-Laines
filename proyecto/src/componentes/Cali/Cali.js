import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Cali.css'; // Importa el archivo CSS

export function Cali() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // Nuevo estado para el elemento seleccionado

  const handleClose = () => setShow(false);
  const handleShow = (content, index) => {
    setModalContent(content);
    setSelectedItem(index); // Establece el índice del elemento seleccionado
    setShow(true);
  };

  return (
    <div className="cali-background"> {/* Nuevo contenedor para el fondo */}
      <div className="cali-container"> {/* Renombrado para mayor claridad */}
        <h1 className="cali-title">Calificaciones</h1>
        <div className="cali-lists-container"> {/* Contenedor para las listas */}
          <ul className="cali-list">
            {['Equaciones Diferenciales', 'Métodos Numéricos', 'Fundamentos Base de datos', 'Tópicos Avan. De programación'].map((item, index) => (
              <li
                key={index}
                className={`cali-listItem ${selectedItem === index ? 'cali-selected' : ''}`}
                onClick={() => handleShow(item, index)}
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="cali-list">
            {['Redes de computadoras', 'Princ. Electrónicos', 'Conmutación y Enrutamiento'].map((item, index) => (
              <li
                key={index + 4}
                className={`cali-listItem ${selectedItem === index + 4 ? 'cali-selected' : ''}`}
                onClick={() => handleShow(item, index + 4)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Contenido del modal para {modalContent}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Cali;