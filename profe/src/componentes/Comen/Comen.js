import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';

export function Comen() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };
  return (
    <div className="container">
      <h1 className="title">Comentarios</h1>
      <ul className="list">
        <li className="listItem" onClick={() => handleShow('Equaciones Diferenciales')}>Equaciones Diferenciales</li>
        <li className="listItem" onClick={() => handleShow('Métodos Numéricos')}>Métodos Numéricos</li>
        <li className="listItem" onClick={() => handleShow('Fundamentos Base de datos')}>Fundamentos Base de datos</li>
        <li className="listItem" onClick={() => handleShow('Tópicos Avan. De programación')}>Tópicos Avan. De programación</li>
      </ul>

      <ul className="list">
        <li className="listItem" onClick={() => handleShow('Redes de computadoras')}>Redes de computadoras</li>
        <li className="listItem" onClick={() => handleShow('Princ. Electrónicos')}>Princ. Electrónicos</li>
        <li className="listItem" onClick={() => handleShow('Conmutación y Enrutamiento')}>Conmutación y Enrutamiento</li>
      </ul>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Agregar comentario a {modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}> Enviar </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Comen;