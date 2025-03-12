import { Home } from "../page";
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
    </Routes>
  );
}

export default Rutas;