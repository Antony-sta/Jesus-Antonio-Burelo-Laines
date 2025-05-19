import React from 'react';
import { useFormik } from 'formik';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { initialValues, validationSchema } from './Datos.forms';

export function EditarDatos({ producto, onSubmit, onCancel, isEditing }) {
  const formik = useFormik({
    initialValues: {
      ...initialValues(),
      ...Object.fromEntries(
        Object.entries(producto || {}).map(([k, v]) => [k, v ?? ""])
      ),
    },
    validationSchema: validationSchema(),
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
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            required
            type="text"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            isInvalid={formik.touched.nombre && !!formik.errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>No. Control</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="No. Control"
            name="nocontrol"
            value={formik.values.nocontrol}
            onChange={formik.handleChange}
            isInvalid={formik.touched.nocontrol && !!formik.errors.nocontrol}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nocontrol}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Teléfono</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              required
              type="number"
              placeholder="Teléfono"
              name="telefono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              isInvalid={formik.touched.telefono && !!formik.errors.telefono}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.telefono}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Edad"
            name="edad"
            value={formik.values.edad}
            onChange={formik.handleChange}
            isInvalid={formik.touched.edad && !!formik.errors.edad}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.edad}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="imagep"
            onChange={(event) => {
              const file = event.currentTarget.files[0];
              formik.setFieldValue("imagep", file);
            }}
            isInvalid={!!formik.errors.imagep}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.imagep}
          </Form.Control.Feedback>
          {producto?.imagep && (
            <Form.Text className="text-muted">
              ID: <strong>{producto.imagep}</strong>
            </Form.Text>
          )}
        </Form.Group>
      </Row>
      <div className="d-flex justify-content-end gap-2 mt-3">
        <Button type="submit" disabled={formik.isSubmitting}>
          {isEditing ? 'Actualizar' : 'Crear'}
        </Button>
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
}

export default EditarDatos;