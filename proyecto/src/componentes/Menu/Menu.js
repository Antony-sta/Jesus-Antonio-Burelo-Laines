import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css' // Importa el archivo CSS

export function Menu() {
    return (
        <div className="header">
            <h1 className="title">Educación</h1>
            <div className="subHeader">
                <Link to="/inicio" className="link">Inicio</Link>
                <Link to="/calificaciones" className="link">Calificaciones</Link>
                <Link to="/comen" className="link">Comentarios</Link>
            </div>
        </div>
    )
}

export default Menu