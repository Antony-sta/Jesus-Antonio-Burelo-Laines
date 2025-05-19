import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

export function EditarCalificaciones({ producto, onSubmit, onCancel, isEditing }) {
    const formik = useFormik({
        initialValues: {
            nombre: producto?.nombre || "",
            nocontrol: producto?.nocontrol || "",
            materia1: producto?.materia1 || "",
            materia2: producto?.materia2 || "",
            materia3: producto?.materia3 || "",
            materia4: producto?.materia4 || "",
            materia5: producto?.materia5 || "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await onSubmit(values);
            } finally {
                setSubmitting(false);
            }
        },
        enableReinitialize: true,
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={formik.values.nombre}
                        disabled
                        readOnly
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label>No. Control</Form.Label>
                    <Form.Control
                        type="text"
                        name="nocontrol"
                        value={formik.values.nocontrol}
                        disabled
                        readOnly
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                {[1,2,3,4,5].map(num => (
                    <Form.Group as={Col} md="4" key={num}>
                        <Form.Label>Materia {num}</Form.Label>
                        <Form.Control
                            type="number"
                            name={`materia${num}`}
                            value={formik.values[`materia${num}`]}
                            onChange={formik.handleChange}
                            min={0}
                            max={100}
                            required
                        />
                    </Form.Group>
                ))}
            </Row>
            <div className="d-flex justify-content-end gap-2 mt-3">
                <Button type="submit" disabled={formik.isSubmitting}>
                    Crear
                </Button>
                <Button variant="secondary" type="button" onClick={onCancel}>
                    Cancelar
                </Button>
            </div>
        </Form>
    );
}

export default EditarCalificaciones;