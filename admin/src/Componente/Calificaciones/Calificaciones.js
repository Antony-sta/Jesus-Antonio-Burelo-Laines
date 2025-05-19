import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { Forms } from '../../Api';
import EditarCalificaciones from './EditarCalificaciones';
import { initialValues, validationSchema } from "./Calificaciones.forms";

const ctrDatos = new Forms();

export function Calificaciones() {
    const [listaDatos, setListaDatos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selecProdc, setselecProdc] = useState(null);

    const obtener = async () => {
        try {
            const listaPro = await ctrDatos.getDatos();
            setListaDatos(listaPro);
        } catch (error) {
            console.error("No se logra obtener:", error);
        }
    };

    const onDelete = async (id) => {
        try {
            await ctrDatos.delDatos(id);
            setListaDatos(listaDatos.filter((dato) => dato._id !== id));
        } catch (error) {
            console.error("No se logra eliminar:", error);
        }
    };

    const handleEdit = (dato) => {
        setselecProdc(dato);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setselecProdc(null);
    };

    const onEdit = async (values) => {
        if (!selecProdc) return;
        try {
            await ctrDatos.patchCalificaciones(selecProdc._id, values); // Usa el nuevo método
            setListaDatos((prev) =>
                prev.map((dato) =>
                    dato._id === selecProdc._id ? { ...dato, ...values } : dato
                )
            );
            handleClose();
        } catch (error) {
            console.error("Error al actualizar el registro:", error);
        }
    };

    const onCreate = async (values) => {
        try {
            await ctrDatos.createCalificaciones(values);
            obtener(); // Recarga la lista
            handleClose();
        } catch (error) {
            console.error("Error al crear el registro:", error);
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
                        <th>Materia 1</th>
                        <th>Materia 2</th>
                        <th>Materia 3</th>
                        <th>Materia 4</th>
                        <th>Materia 5</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDatos.map((dato, index) => (
                        <tr key={index}>
                            <td>{dato.nombre || "N/A"}</td>
                            <td>{dato.nocontrol || "N/A"}</td>
                            <td>{dato.materia1 || "N/A"}</td>
                            <td>{dato.materia2 || "N/A"}</td>
                            <td>{dato.materia3 || "N/A"}</td>
                            <td>{dato.materia4 || "N/A"}</td>
                            <td>{dato.materia5 || "N/A"}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    style={{ marginBottom: 10 }}
                                    onClick={() => {
                                        setselecProdc({ nombre: "", nocontrol: "", materia1: "", materia2: "", materia3: "", materia4: "", materia5: "" });
                                        setShowModal(true);
                                    }}
                                >
                                    Crear 
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
            <Modal show={showModal} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Editar Calificaciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selecProdc && (
                        <EditarCalificaciones
                            producto={selecProdc}
                            onSubmit={selecProdc && selecProdc._id ? onEdit : onCreate}
                            onCancel={handleClose}
                            isEditing={!!(selecProdc && selecProdc._id)}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Calificaciones;