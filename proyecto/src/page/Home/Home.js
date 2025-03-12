// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"; // Asegúrate de importar tu archivo de estilos

export function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validación de credenciales
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciales incorrectas');
      setIsAuthenticated(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="home-page">
      {!isAuthenticated ? (
        <div className="login-container">
          <div className="logo">
            <img src="/logo.png" alt="Logo SIE Educativo" />
          </div>
          <h2>Acceso al SIE</h2>
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
            <a href="/recuperar">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      ) : (
        <div className="home-container">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">¡Bienvenido al Sistema, {username}!</h1>
              <p>Contenido principal de la aplicación</p>
              <button onClick={handleLogout} className="btn btn-danger">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
