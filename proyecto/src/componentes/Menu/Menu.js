import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

export function Menu() {
  const location = useLocation();

  const isLoginPage =
    location.pathname.toLowerCase().includes('acceso') ||
    location.pathname.toLowerCase().includes('login') ||
    location.pathname.toLowerCase().includes('sie');

  if (isLoginPage) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: '#343a40', // Fondo oscuro
        color: 'white', // Texto blanco
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: '0' }}>Educación</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button as={Link} to="/inicio" variant="link" style={{ color: 'white' }}>
          Inicio
        </Button>
        <DropdownButton
          align="end"
          title="Opciones"
          id="dropdown-menu-align-end"
          variant="link"
          style={{ color: 'white' }}
        >
          <Dropdown.Item as={Link} to="/calificaciones" eventKey="1">
            Calificaciones
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/comentarios" eventKey="2">
            Comentarios
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default Menu;