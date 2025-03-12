import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import "./Home.css"; // Puedes reutilizar estilos

export function Recuperar() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de recuperación de contraseña
    setMessage(`Si el correo "${email}" está registrado, recibirás un enlace para restablecer tu contraseña.`);
    setEmail('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg p-4 login-card text-center">
        <Card.Body>
          <Card.Title className="mb-3">🔑 Recuperar Contraseña</Card.Title>
          <Card.Text className="text-muted">Ingresa tu correo para restablecer la contraseña</Card.Text>
          {message && <Alert variant="info">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Enviar Instrucciones
            </Button>
          </Form>
          <div className="mt-3">
            <Button variant="link" onClick={() => navigate("/")}>
              🔙 Volver al inicio de sesión
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Recuperar;
