import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Comentarios.css'; // Asegúrate de que este archivo tenga los estilos similares a Cali.css

export function Comen() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (content, index) => {
    setModalContent(content);
    setSelectedItem(index);
    setShow(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => ({
        ...prevComments,
        [selectedItem]: [...(prevComments[selectedItem] || []), newComment],
      }));
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentIndex) => {
    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      updatedComments[selectedItem] = updatedComments[selectedItem].filter(
        (_, idx) => idx !== commentIndex
      );
      return updatedComments;
    });
  };

  const materias = [
    { nombre: 'Ecuaciones Diferenciales', maestro: 'Dr. Juan Pérez' },
    { nombre: 'Métodos Numéricos', maestro: 'Mtra. Ana López' },
    { nombre: 'Fundamentos Base de datos', maestro: 'Ing. Carlos Gómez' },
    { nombre: 'Tópicos Avan. De programación', maestro: 'Dr. Luis Martínez' },
    { nombre: 'Redes de computadoras', maestro: 'Mtro. Pedro Sánchez' },
    { nombre: 'Princ. Electrónicos', maestro: 'Ing. María Fernández' },
    { nombre: 'Conmutación y Enrutamiento', maestro: 'Dr. José Ramírez' },
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
                onClick={() => handleShow(item.nombre, index)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>
                  {item.nombre}
                </span>
                {/* Mostrar el último comentario si existe */}
                {comments[index] && comments[index].length > 0 && (
                  <span
                    style={{
                      marginLeft: 10,
                      background: '#e6f7ff',
                      borderRadius: 8,
                      padding: '2px 10px',
                      color: '#2575fc',
                      fontSize: '0.9em',
                      maxWidth: 200,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    title={comments[index][comments[index].length - 1]}
                  >
                    {comments[index][comments[index].length - 1]}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Maestro:</strong> {materias[selectedItem]?.maestro}</p>
            <div className="comments-section">
              <h5>Comentarios:</h5>
              <ul>
                {(comments[selectedItem] || []).map((comment, idx) => (
                  <li key={idx} className="comment-item">
                    {comment}
                    <Button
                      variant="danger"
                      size="sm"
                      style={{ marginLeft: '10px' }}
                      onClick={() => handleDeleteComment(idx)}
                    >
                      Eliminar
                    </Button>
                  </li>
                ))}
              </ul>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Escribe tu comentario aquí..."
                rows="3"
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <Button variant="primary" onClick={handleAddComment}>
                Agregar Comentario
              </Button>
            </div>
          </Modal.Body>
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

export default Comen;