import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Datos } from '../../API/'; // Importar la clase Datos
import './Inicio.css';

const ctrDatos = new Datos(); // Crear una instancia de la clase Datos

export function Inicio({ dato = [] }) {
  const [listaDatos, setListaDatos] = useState([]);

  const obtener = async () => {
    try {
      const listaPro = await ctrDatos.getDatos(); // Llamar al método getDatos de la clase Datos
      setListaDatos(listaPro); // Guardar los datos en el estado
    } catch (error) {
      console.error("No se logra obtener:", error);
    }
  };

  useEffect(() => {
    obtener(); // Llamar a la función obtener al montar el componente
  }, []);

  return (
    <div className="inicio-container">
      <div className="ventana-inicio">
        <h2>Bienvenido</h2>
        <p>Esta es tu ventana de inicio personalizada.</p>
        {/* Puedes agregar más contenido aquí */}
      </div>
    </div>
  );
}

export default Inicio;