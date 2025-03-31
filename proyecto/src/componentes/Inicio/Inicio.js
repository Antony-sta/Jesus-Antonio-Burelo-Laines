import React, { useState } from 'react';
import { Table, Button, Card, Container } from 'react-bootstrap'; // Importa React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './Inicio.css';

const TableRow = ({ data, rowIndex, onCellChange }) => (
  <tr>
    {data.map((cell, cellIndex) => (
      <td key={cellIndex} className="td">
        <input
          type="text"
          className="form-control table-input" // Clase personalizada para inputs
          value={cell}
          onChange={(e) => onCellChange(rowIndex, cellIndex, e.target.value)}
        />
      </td>
    ))}
  </tr>
);

export function Inicio() {
  const initialRows = [
    ['Nombre:', 'No. Control', 'Calle', 'Correo'],
    ['Sexo:', 'Barrio', 'Teléfono', ''],
    ['Edad:', 'Año', 'Mes', 'Día'],
    ['Imagen:', 'Seleccionar archivo', 'Sin archivos seleccionados'],
  ];

  const [rows, setRows] = useState(initialRows);

  const handleCellChange = (rowIndex, cellIndex, newValue) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return row.map((cell, idx) => (idx === cellIndex ? newValue : cell));
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleSave = () => {
    console.log('Datos guardados:', rows);
    alert('Datos Guardados en la consola');
  };

  return (
    <div className="inicio-container">
      {/* Si deseas agregar una imagen de fondo */}
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Ffondos-para-paginas-web&psig=AOvVaw0Tij0N0bocDPUM9nNVOhWX&ust=1743463766013000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCuouj6sowDFQAAAAAdAAAAABAE" alt="Fondo" />
      <Container className="formulario-sie mt-4">
        <Card className="shadow-lg">
          <Card.Header className="bg-primary text-white text-center">
            <h4>Formulario de Estudiante</h4>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover responsive className="custom-table">
              <thead>
                <tr>
                  <th>Campo</th>
                  <th>Valor 1</th>
                  <th>Valor 2</th>
                  <th>Valor 3</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    rowIndex={index}
                    data={row}
                    onCellChange={handleCellChange}
                  />
                ))}
              </tbody>
            </Table>
            <div className="text-center mt-3">
              <Button variant="success" onClick={handleSave}>
                Guardar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Inicio;