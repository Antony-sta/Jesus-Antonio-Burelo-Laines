import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";
import { Link } from 'react-router-dom';

export function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = (role) => {
    if (role === "estudiante") {
      setShowLogin(true);
    } else if (role === "maestro") {
      navigate("/maestro-login");
    } else if (role === "directivo") {
      navigate("/login-directivo");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        user: username,
        password,
      });
      localStorage.setItem("usuarioId", response.data.user.id);
      setError('');
      navigate("/inicio");
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
      {/* Imagen en la esquina */}
      <img src="/Tech.png" alt="Imagen de esquina" className="corner-image" />

      <div className="login-container">
        <div className="logo">
          <img src="/EDUCACION.png" alt="Logo SIE Educativo" />
        </div>
        <h2>Acceso al SIE</h2>
        <h2>(Califi Tech)</h2>

        {/* Selección de perfil */}
        {!showLogin && (
          <div className="profile-window">
            <p>Selecciona tu perfil:</p>
            <button className="btn btn-primary" onClick={() => handleProfileClick("estudiante")}>
              Estudiante
            </button>
            <Link to="/maestro-login" className="btn btn-primary">Maestros</Link>
            <button className="btn btn-primary" onClick={() => handleProfileClick("directivo")}>
              Directivo
            </button>
          </div>
        )}

        {/* Formulario de login para estudiante */}
        {showLogin && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
