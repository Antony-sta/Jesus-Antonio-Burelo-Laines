import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { Forms } from '../Api';
import { EditarDatos } from '../Formulario';

const ctrDatos = new Forms();

export function Estudiantes() {
    const [listaDatos, setListaDatos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selecProdc, setselecProdc] = useState(null)

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
            await ctrDatos.delDatos(id); // Realizar la solicitud DELETE al backend
            setListaDatos(listaDatos.filter((dato) => dato._id !== id));
        } catch (error) {
            console.error("No se logra eliminar:", error);
        }
    };

    const handleEdit = (dato) => {
        setselecProdc(dato); // Establecer el registro que se está editando
        setShowModal(true); // Mostrar el modal
    };

    const handleClose = () => {
        console.log("Cerrando el modal"); // Depuración
        setShowModal(false); // Cerrar el modal
        setselecProdc(null); // Limpiar el estado de edición
    };

    const onEdit = async (updatedData) => {
        if (!selecProdc) return;
        try {
            await ctrDatos.patchDatos(selecProdc._id, updatedData);
            setListaDatos((prev) =>
                prev.map((dato) =>
                    dato._id === selecProdc._id ? { ...dato, ...updatedData } : dato
                )
            );
            handleClose();
        } catch (error) {
            console.error("Error al actualizar el registro:", error);
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
                                <Button
                                    variant="success"
                                    onClick={() => handleEdit(dato)}
                                >
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
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selecProdc && (
                        <EditarDatos
                            producto={selecProdc}
                            onSubmit={onEdit}
                            onCancel={handleClose}
                            isEditing={true}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Estudiantes;