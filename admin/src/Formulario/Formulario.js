import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";
import { initialValues, validationSchema } from "./Datos.forms";
import { Forms } from "../Api/Forms";

const ctrProducto = new Forms();

export function Formulario() {
    const [listaRegistros, setListaRegistros] = useState([]);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: async (formValue, { resetForm }) => {
            try {
                const response = await ctrProducto.createProducto(formValue);
                const newProducto = response.datos; // Producto creado
                setListaRegistros((prevRegistros) => [...prevRegistros, newProducto]);
                resetForm(); // Limpia el formulario después de un envío exitoso
            } catch (error) {
                console.error("Error al agregar el producto:", error);
            }
        },
    });

    return (
        <div className="p-4">
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.nombre}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.nombre}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>No. Control</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="No. Control"
                            name="nocontrol"
                            value={formik.values.nocontrol}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.nocontrol}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.nocontrol}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Calle</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Calle"
                            name="calle"
                            value={formik.values.calle}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.calle}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.calle}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Correo"
                            name="correo"
                            value={formik.values.correo}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.correo}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.correo}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Sexo"
                            name="sexo"
                            value={formik.values.sexo}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.sexo}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.sexo}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                        <Form.Label>Barrio</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Barrio"
                            name="barrio"
                            value={formik.values.barrio}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.barrio}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.barrio}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom07">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Teléfono"
                            name="telefono"
                            value={formik.values.telefono}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.telefono}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.telefono}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom08">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Edad"
                            name="edad"
                            value={formik.values.edad}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.edad}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.edad}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom09">
                        <Form.Label>Año</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Año"
                            name="año"
                            value={formik.values.año}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.año}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.año}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom10">
                        <Form.Label>Mes</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Mes"
                            name="mes"
                            value={formik.values.mes}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.mes}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.mes}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom11">
                        <Form.Label>Día</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Día"
                            name="dia"
                            value={formik.values.dia}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.dia}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.dia}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationCustom12">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="imagep"
                            onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                if (file) {
                                    formik.setFieldValue("imagep", file);
                                }
                            }}
                            isInvalid={!!formik.errors.imagep}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.imagep}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Enviar</Button>
            </Form>
        </div>
    );
}

export default Formulario;