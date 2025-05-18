import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../../../../page/Home/Home.css";

export function Maestro() {
  const [username, setUsername] = useState('maestro1'); // Usuario fijo
  const [password, setPassword] = useState('12345');    // Contraseña fija
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Cambia la URL si tu endpoint es diferente
      const response = await axios.post("http://localhost:5000/login-maestro", {
        user: username,
        password,
      });
      setError('');
      navigate("/inicio-maestro");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg || "Error al iniciar sesión");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="home-page">
      <img src="/Tech.png" alt="Imagen de esquina" className="corner-image" />
      <div className="login-container">
        <div className="logo">
          <img src="/EDUCACION.png" alt="Logo SIE Educativo" />
        </div>
        <h2>Acceso Maestros</h2>
        <h2>(Califi Tech)</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
        <div className="forgot-password">
          <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
        </div>
        <button className="btn btn-secondary" style={{marginTop: "10px"}} onClick={() => navigate("/")}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default Maestro;


