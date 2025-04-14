import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Forms } from '../Api';
const ctrDatos = new Forms();

export function Estudiantes() {
    const [listaDatos, setListaDatos] = useState([]);

    const obtener = async () => {
        try {
            const listaPro = await ctrDatos.getDatos(); // Llamar al método getDatos de la clase Datos
            setListaDatos(listaPro); // Guardar los datos en el estado
        } catch (error) {
            console.error("No se logra obtener:", error);
        }
    };

    const onDelete = async (id) => {
        try {
            // Realizar la solicitud DELETE al backend
            await ctrDatos.delDatos(id);
            setListaDatos(listaDatos.filter((dato) => dato._id !== id));
        } catch (error) {
            console.error("No se logra eliminar:", error);
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
                        <th>Editar</th>
                        <th>Eliminar</th>
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
                            <td>
                                <Button variant="success" size="sm">
                                    Editar
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => onDelete(dato._id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Estudiantes;