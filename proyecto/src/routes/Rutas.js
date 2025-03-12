import { Home } from "../page";
import { Menu } from "../componentes/Menu";
import { Inicio } from "../componentes";
import { Comen } from "../componentes";
import { Cali } from "../componentes";
import { Layout } from "../layouts";
import { Route, Routes } from "react-router-dom";
import React from 'react';

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
      <Route path='/' element={Layouts(Layout, Home)} />
      <Route path='/menu' element={Layouts(Layout, Menu)} />
      <Route path='/inicio' element={Layouts(Layout, Inicio)} />
      <Route path="/calificaciones" element={Layouts(Layout, Cali)} />
    </Routes>
  );
}

export default Rutas;