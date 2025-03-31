import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";
import { Link } from 'react-router-dom';

export function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud al backend usando axios
      const response = await axios.post("http://localhost:5000/login", {
        user: username,
        password,
      });

      // Inicio de sesión exitoso
      setError('');
      //alert(`Bienvenido, ${response.data.user.user}`);
      navigate("/inicio"); // Redirige a la página de inicio tras iniciar sesión
    } catch (error) {
      // Manejo de errores
      if (error.response) {
        // Error del servidor (código de estado fuera del rango 2xx)
        setError(error.response.data.msg || "Error al iniciar sesión");
      } else {
        // Error de red u otro problema
        console.error("Error al conectar con el servidor:", error);
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="home-page">
      {/* Imagen en la esquina */}
      <img src="/Tech.png" alt="Imagen de esquina" className="corner-image" />

      <div className="login-container">
        <div className="logo">
          <img src="/EDUCACION.png" alt="Logo SIE Educativo" />
        </div>
        <h2>Acceso al SIE</h2>
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
      </div>
    </div>
  );
}

export default Home;
