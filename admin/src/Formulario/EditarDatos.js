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
          <Form.Label>Nombre</Form.Label>
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
        <Form.Group as={Col} md="6">
          <Form.Label>No. Control</Form.Label>
          <Form.Control
            required
            type="text"
            name="nocontrol"
            value={formik.values.nocontrol}
            onChange={formik.handleChange}
            isInvalid={formik.touched.nocontrol && !!formik.errors.nocontrol}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nocontrol}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Calle</Form.Label>
          <Form.Control
            type="text"
            name="calle"
            value={formik.values.calle}
            onChange={formik.handleChange}
            isInvalid={formik.touched.calle && !!formik.errors.calle}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.calle}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            name="correo"
            value={formik.values.correo}
            onChange={formik.handleChange}
            isInvalid={formik.touched.correo && !!formik.errors.correo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.correo}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Sexo</Form.Label>
          <Form.Control
            type="text"
            name="sexo"
            value={formik.values.sexo}
            onChange={formik.handleChange}
            isInvalid={formik.touched.sexo && !!formik.errors.sexo}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.sexo}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            type="text"
            name="barrio"
            value={formik.values.barrio}
            onChange={formik.handleChange}
            isInvalid={formik.touched.barrio && !!formik.errors.barrio}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.barrio}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="number"
            name="telefono"
            value={formik.values.telefono}
            onChange={formik.handleChange}
            isInvalid={formik.touched.telefono && !!formik.errors.telefono}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.telefono}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
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
          <Form.Label>Año</Form.Label>
          <Form.Control
            type="number"
            name="año"
            value={formik.values.año || ""}
            onChange={formik.handleChange}
            isInvalid={formik.touched.año && !!formik.errors.año}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.año}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label>Mes</Form.Label>
          <Form.Control
            type="text"
            name="mes"
            value={formik.values.mes}
            onChange={formik.handleChange}
            isInvalid={formik.touched.mes && !!formik.errors.mes}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.mes}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Form.Label>Día</Form.Label>
          <Form.Control
            type="number"
            name="dia"
            value={formik.values.dia || ""}
            onChange={formik.handleChange}
            isInvalid={formik.touched.dia && !!formik.errors.dia}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.dia}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
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