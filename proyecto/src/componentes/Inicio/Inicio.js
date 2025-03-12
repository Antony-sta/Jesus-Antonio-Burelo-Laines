import React from 'react';
import './Inicio.css'; // Importa el archivo CSS

const TableRow = ({ data }) => (
  <tr>
    {data.map((cell, index) => (
      <td key={index} className="td">{cell}</td>
    ))}
  </tr>
);

export function Inicio() {
  const rows = [
    ['Tutor', 'Sexo', 'Barrio', ''],
    ['Correo', 'No Teléfono', '', 'No de Casa'],
    ['Edad', 'Año de nacimiento', '', ''],
  ];

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th className="th">Nombre</th>
            <th className="th">No Control</th>
            <th className="th">Dirección</th>
            <th className="th">Calle</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow key={index} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inicio;