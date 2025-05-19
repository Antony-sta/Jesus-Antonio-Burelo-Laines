import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Page'
import { Layaut } from '../Layaut'
import { Formulario } from "../Formulario"
import { Estudiantes } from '../Usuarios'
import Archivos from '../Formulario/Archivos'

export function Rutas() {
    const Layauts = (Layaut, Page) => (
        <Layaut>
            <Page />
        </Layaut>
    )
    return (
        <Routes>
            <Route path='/' element={Layauts(Layaut, Home)} />
            <Route path='/formularioEstudiante' element={Layauts(Layaut, Formulario)} />
            <Route path='/estudiantes' element={Layauts(Layaut, Estudiantes)} />
            <Route path="/formsproductos" element={<Archivos />} />
        </Routes>
    )
}

export default Rutas