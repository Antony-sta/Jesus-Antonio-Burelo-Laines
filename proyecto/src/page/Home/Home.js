import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"; 
import { Link } from 'react-router-dom';

export function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validación de credenciales
    if (username === 'admin' && password === '1234') {
      setError('');
      navigate("/inicio"); // Redirige a la página de inicio tras iniciar sesión
    } else {
      setError('Credenciales incorrectas');
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
  <Link to="/Recuperar">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
