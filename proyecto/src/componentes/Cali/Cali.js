import React, { useState } from 'react';
import './Cali.css'; // Importa el archivo CSS

export function Cali() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="container">
      <h1 className="title">Calificaciones</h1>
      <ul className="list">
        <li className="listItem" onClick={() => openModal('Equaciones Diferenciales')}>Equaciones Diferenciales</li>
        <li className="listItem" onClick={() => openModal('Métodos Numéricos')}>Métodos Numéricos</li>
        <li className="listItem" onClick={() => openModal('Fundamentos Base de datos')}>Fundamentos Base de datos</li>
        <li className="listItem" onClick={() => openModal('Tópicos Avan. De programación')}>Tópicos Avan. De programación</li>
      </ul>

      <ul className="list">
        <li className="listItem" onClick={() => openModal('Redes de computadoras')}>Redes de computadoras</li>
        <li className="listItem" onClick={() => openModal('Princ. Electrónicos')}>Princ. Electrónicos</li>
        <li className="listItem" onClick={() => openModal('Conmutación y Enrutamiento')}>Conmutación y Enrutamiento</li>
      </ul>

      {modalContent && (
        <div className="modalOverlay">
          <div className="modal">
            <h2>{modalContent}</h2>
            <button className="closeButton" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Cali;