import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Comentarios.css'; // Asegúrate de que este archivo tenga los estilos similares a Cali.css

export function Comen() { // Cambiado a mayúscula
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (content, index) => {
    setModalContent(content);
    setSelectedItem(index);
    setShow(true);
  };

  const materias = [
    'Ecuaciones Diferenciales',
    'Métodos Numéricos',
    'Fundamentos Base de datos',
    'Tópicos Avan. De programación',
    'Redes de computadoras',
    'Princ. Electrónicos',
    'Conmutación y Enrutamiento'
  ];

  return (
    <div className="cali-background">
      <div className="cali-container">
        <h1 className="cali-title">Comentarios</h1>
        <div className="cali-lists-container">
          <ul className="cali-list">
            {materias.map((item, index) => (
              <li
                key={index}
                className={`cali-listItem ${selectedItem === index ? 'cali-selected' : ''}`}
                onClick={() => handleShow(item, index)}
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

export default Comen; // Cambiado a mayúscula