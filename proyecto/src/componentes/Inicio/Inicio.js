import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Datos } from '../../API/';
import './Inicio.css';

const ctrDatos = new Datos();

export function Inicio() {
  const [listaDatos, setListaDatos] = useState([]);
  const usuario = localStorage.getItem("usuario"); // Obtiene el usuario logueado

  const obtener = async () => {
    try {
      const listaPro = await ctrDatos.getDatos();
      // Filtra solo los datos del usuario logueado
      const filtrados = listaPro.filter(dato => dato.user === usuario);
      setListaDatos(filtrados);
    } catch (error) {
      console.error("No se logra obtener:", error);
    }
  };

  useEffect(() => {
    obtener();
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