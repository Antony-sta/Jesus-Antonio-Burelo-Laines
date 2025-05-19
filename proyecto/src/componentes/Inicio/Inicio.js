import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Datos } from '../../API/';
import { Home } from '../../page';
import './Inicio.css';

const ctrDatos = new Datos();

export function Inicio() {
  const [listaDatos, setListaDatos] = useState([]);
  const usuarioId = localStorage.getItem("usuarioId"); // Debe ser el _id del usuario

  const obtener = async () => {
    try {
      const listaPro = await ctrDatos.getDatos();
      console.log("Datos recibidos:", listaPro);
      console.log("ID usuario logueado:", usuarioId);
      const filtrados = listaPro.filter(dato => String(dato._id) === String(usuarioId));
      console.log("Filtrados:", filtrados);
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
          {listaDatos.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No se encontraron datos para este usuario.
              </td>
            </tr>
          ) : (
            listaDatos.map((dato, index) => (
              <tr key={index}>
                <td>{dato.nombre}</td>
                <td>{dato.nocontrol}</td>
                <td>{dato.correo}</td>
                <td>{dato.telefono}</td>
                <td>{dato.edad}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Inicio;