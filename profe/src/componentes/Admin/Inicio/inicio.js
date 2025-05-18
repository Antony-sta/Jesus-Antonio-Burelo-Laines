import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap'; // Importa React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './Inicio.css';

const TableRow = ({ data, rowIndex, onCellChange }) => (
  <tr>
    {data.map((cell, cellIndex) => (
      <td key={cellIndex} className="td">
        <input
          type="text"
          value={cell}
          onChange={(e) => onCellChange(rowIndex, cellIndex, e.target.value)}
        />
      </td>
    ))}
  </tr>
);

export function Inicio() {
  const initialRows = [
    ['Tutor:', 'Sexo', 'Barrio', 'Los pozos'],
    ['Correo:', 'No Teléfono', 'Colonia', 'No de Casa'],
    ['Edad:', 'Año de nacimiento', 'Mes el que sea', 'Dia 12'],
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
    // Aquí puedes implementar la lógica para guardar los datos actualizados
    console.log('Datos guardados:', rows);
    alert("Datos Guardados en la consola")
  };

  return (
    
    <div className="container">
      <Table striped bordered hover> {/* Usa el componente Table de React Bootstrap */}
        <thead>
          <tr>
            <th>Nombre</th> {/* Usa <th> en lugar de <th className="th"> */}
            <th>No Control</th>
            <th>Dirección</th>
            <th>Calle</th>
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
      <Button variant="primary" onClick={handleSave}>Guardar</Button> {/* Usa el componente Button de React Bootstrap */}
    </div>
  );
}

export default Inicio;