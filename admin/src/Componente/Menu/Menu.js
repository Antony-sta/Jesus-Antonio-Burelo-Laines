import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

 export function Menu() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" >Barra de Herramientas</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/" >Usuarios</Link>
                    <Link className="nav-link" to="/formularioEstudiante" >Formulario Alumno</Link>
                    <Link className="nav-link" to="/formsproductos" >Formulario Profesor</Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Menu