import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Inicio from './Inicio'; // Importa la página de inicio
import Recuperar from './Recuperar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} /> 
        <Route path="/recuperar" element={<Recuperar />} />
      </Routes>
    </Router>
  );
}



export default App;