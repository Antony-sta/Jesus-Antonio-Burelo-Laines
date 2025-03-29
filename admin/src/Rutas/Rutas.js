import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Page'
import { Layaut } from '../Layaut'
import {Formulario} from "../Formulario"

export function Rutas() {
    const Layauts = (Layaut, Page) => (
        <Layaut>
            <Page />
        </Layaut>
    )
    return (
        <Routes>
            <Route path='/' element={Layauts(Layaut, Home)} />
            <Route path='/formularioEstudiante' element={Layauts(Layaut,Formulario)} />
        </Routes>
    )
}

export default Rutas