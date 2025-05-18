import React, { useState } from 'react';
import { Card, Container, Button, Modal, Form, Tab, Tabs, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Inicio.css';

export function Inicio() {
  // Estado para los datos personales
  const [datos, setDatos] = useState({
    nombre: "Sofía Ramírez",
    matricula: "A01234567",
    grupo: "TI-601",
    direccion: "Av. Universidad 123, Col. Centro, Monterrey, NL",
    telefono: "81 1234 5678",
    correo: "sofia.ramirez@ejemplo.com",
    fechaNacimiento: "2002-04-15",
    genero: "Femenino",
    nacionalidad: "Mexicana",
    curp: "RARF020415MNLMSA09",
    nss: "12345678901",
    tipoSangre: "O+",
    tutor: "María López",
    telefonoTutor: "81 8765 4321",
    estadoCivil: "Soltera",
    carrera: "Ingeniería en Tecnologías de la Información",
    semestre: "6°",
    promedio: "93.5",
    foto: "https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740"
  });

  const [visible, setVisible] = useState(true);

  // Estado para documentos
  const [documentos, setDocumentos] = useState([]);
  const [showAddDoc, setShowAddDoc] = useState(false);
  const [showDeleteDoc, setShowDeleteDoc] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState([]);

  // Modal para agregar información personal
  const [showAdd, setShowAdd] = useState(false);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  // Modal para eliminar información personal
  const [showDelete, setShowDelete] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  // Tabs
  const [tabKey, setTabKey] = useState('informacion');

  // --- Funciones para información personal ---
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => {
    setShowAdd(false);
    setNewKey('');
    setNewValue('');
  };

  const handleShowDelete = () => setShowDelete(true);
  const handleCloseDelete = () => {
    setShowDelete(false);
    setSelectedKeys([]);
  };

  const handleAddInfo = (e) => {
    e.preventDefault();
    if (newKey.trim() && newValue.trim()) {
      setDatos(prev => ({
        ...prev,
        [newKey]: newValue
      }));
      handleCloseAdd();
    }
  };

  const handleDeleteInfo = () => {
    const nuevosDatos = { ...datos };
    selectedKeys.forEach(key => {
      delete nuevosDatos[key];
    });
    setDatos(nuevosDatos);
    handleCloseDelete();
  };

  const handleSelectKey = (key) => {
    setSelectedKeys(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  // --- Funciones para documentos ---
  const handleShowAddDoc = () => setShowAddDoc(true);
  const handleCloseAddDoc = () => setShowAddDoc(false);

  const handleShowDeleteDoc = () => setShowDeleteDoc(true);
  const handleCloseDeleteDoc = () => {
    setShowDeleteDoc(false);
    setSelectedDocs([]);
  };

  const handleAddDoc = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.elements.archivos.files);
    if (files.length > 0) {
      const nuevosDocs = files.map(file => ({
        nombre: file.name,
        tipo: file.type,
        archivo: URL.createObjectURL(file)
      }));
      setDocumentos(prev => [...prev, ...nuevosDocs]);
      handleCloseAddDoc();
    }
  };

  const handleSelectDoc = (nombre) => {
    setSelectedDocs(prev =>
      prev.includes(nombre)
        ? prev.filter(n => n !== nombre)
        : [...prev, nombre]
    );
  };

  const handleDeleteDoc = () => {
    setDocumentos(prev => prev.filter(doc => !selectedDocs.includes(doc.nombre)));
    handleCloseDeleteDoc();
  };

  return (
    <div className="inicio-container">
      <Container className="formulario-sie mt-4">
        <Tabs
          id="tabs-sie"
          activeKey={tabKey}
          onSelect={(k) => setTabKey(k)}
          className="mb-4"
          justify
        >
          {/* Pestaña Información */}
          <Tab eventKey="informacion" title="Información">
            <Card className="shadow-lg mb-4">
              <Card.Header className="bg-primary text-white text-center">
                <h4>Información del Alumno</h4>
              </Card.Header>
              <Card.Body>
                {visible && (
                  <div className="sie-info-flex">
                    <div className="foto-halo-fuego">
                      <img
                        src={datos.foto}
                        alt="Foto de Sofía Ramírez"
                        className="foto-sofia"
                      />
                    </div>
                    <div className="sie-info-datos">
                      {Object.entries(datos).map(([key, value]) =>
                        key !== "foto" ? (
                          <div style={{ marginBottom: 18 }} key={key}>
                            <strong style={{ textTransform: "capitalize" }}>
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                            </strong>
                            <div style={{ marginTop: 4 }}>{value}</div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                )}
                {/* Botones abajo */}
                <div style={{ display: 'flex', gap: 16, marginTop: 32, justifyContent: 'center' }}>
                  <Button variant="success" onClick={handleShowAdd}>Agregar</Button>
                  <Button variant="danger" onClick={handleShowDelete}>Eliminar</Button>
                  <Button variant="secondary" onClick={() => setVisible(!visible)}>
                    {visible ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Tab>

          {/* Pestaña Documentos */}
          <Tab eventKey="documentos" title="Documentos">
            <Card className="shadow-lg mb-4">
              <Card.Header className="bg-primary text-white text-center">
                <h4>Documentos del Alumno</h4>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  {documentos.length === 0 && (
                    <div className="text-center text-muted mb-3">No hay documentos agregados.</div>
                  )}
                  {documentos.map(doc => (
                    <ListGroup.Item key={doc.nombre} className="d-flex align-items-center justify-content-between">
                      <div>
                        <span style={{ fontWeight: 500 }}>{doc.nombre}</span>
                        <span style={{ fontSize: 13, color: "#888", marginLeft: 8 }}>
                          ({doc.tipo})
                        </span>
                      </div>
                      <a
                        href={doc.archivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                        style={{ marginLeft: 10 }}
                      >
                        Ver
                      </a>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {/* Botones abajo */}
                <div style={{ display: 'flex', gap: 16, marginTop: 32, justifyContent: 'center' }}>
                  <Button variant="success" onClick={handleShowAddDoc}>Agregar</Button>
                  <Button variant="danger" onClick={handleShowDeleteDoc} disabled={documentos.length === 0}>Eliminar</Button>
                  <Button variant="secondary" onClick={() => setVisible(!visible)}>
                    {visible ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>

      {/* Modal Agregar Información */}
      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Información</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddInfo}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Campo (ejemplo: redesSociales, beca, etc.)</Form.Label>
              <Form.Control
                type="text"
                value={newKey}
                onChange={e => setNewKey(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                value={newValue}
                onChange={e => setNewValue(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>Cancelar</Button>
            <Button variant="success" type="submit">Agregar</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal Eliminar Información */}
      <Modal show={showDelete} onHide={handleCloseDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {Object.keys(datos)
              .filter(key => key !== "foto")
              .map(key => (
                <Form.Check
                  key={key}
                  type="checkbox"
                  label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  checked={selectedKeys.includes(key)}
                  onChange={() => handleSelectKey(key)}
                  className="mb-2"
                />
              ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>Cancelar</Button>
          <Button variant="danger" onClick={handleDeleteInfo} disabled={selectedKeys.length === 0}>
            Eliminar Seleccionados
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Agregar Documento */}
      <Modal show={showAddDoc} onHide={handleCloseAddDoc} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Documentos</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddDoc}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Selecciona archivos PDF o Word</Form.Label>
              <Form.Control
                type="file"
                name="archivos"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                multiple
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddDoc}>Cancelar</Button>
            <Button variant="success" type="submit">Agregar</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal Eliminar Documento */}
      <Modal show={showDeleteDoc} onHide={handleCloseDeleteDoc} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Documentos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {documentos.map(doc => (
              <Form.Check
                key={doc.nombre}
                type="checkbox"
                label={doc.nombre}
                checked={selectedDocs.includes(doc.nombre)}
                onChange={() => handleSelectDoc(doc.nombre)}
                className="mb-2"
              />
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteDoc}>Cancelar</Button>
          <Button variant="danger" onClick={handleDeleteDoc} disabled={selectedDocs.length === 0}>
            Eliminar Seleccionados
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Inicio;