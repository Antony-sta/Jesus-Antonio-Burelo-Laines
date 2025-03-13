import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Login from './components/Login'

export function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/acceso" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sie" element={<Login />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  )
}
export default App