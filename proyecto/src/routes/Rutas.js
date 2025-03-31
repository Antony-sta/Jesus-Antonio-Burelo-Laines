import { Home } from "../page";
import { Comen } from "../componentes/Comen/Comen"; // Ruta correcta
import { Cali, Inicio } from "../componentes";
import { Recuperar } from "../componentes";
import { Layout } from "../layouts";

import { Route, Routes } from "react-router-dom";
import React from 'react';
import Formulario from "../componentes/Admin/Inicio/Ormulario/ormulario";

export function Rutas() {
  const Layouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path='/' element={Layouts(Home)} />
      <Route path='/inicio' element={Layouts(Layout, Inicio)} />
      <Route path="/calificaciones" element={Layouts(Layout, Cali)} />
      <Route path="/recuperar" element={Layouts(Recuperar)} />
      <Route path="/Comen" element={Layouts(Layout, Comen)} />
      <Route path="/ormu" element={Layouts(Layout, Formulario)} />
      <Route path="/comentarios" element={<Comen />} />
    </Routes>
  );
}

export default Rutas;