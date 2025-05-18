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
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>No. Control</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {listaDatos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.nombre}</td>
              <td>{dato.nocontrol}</td>
              <td>{dato.correo}</td>
              <td>{dato.telefono}</td>
              <td>{dato.edad}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Inicio;