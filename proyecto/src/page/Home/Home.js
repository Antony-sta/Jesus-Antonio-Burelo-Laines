import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";
import { Link } from 'react-router-dom';


export function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false); // Nuevo estado para mostrar login
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
        console.log("Respuesta completa:", response.data);
        console.log("Usuario recibido:", response.data.user);

      // Guarda el usuario en localStorage
      localStorage.setItem("usuarioId", response.data.user.id);
      console.log("ID guardado:", response.data.user.id);
      // Inicio de sesión exitoso
      setError('');
      navigate("/inicio");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg || "Error al iniciar sesión");
      } else {
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
<<<<<<< HEAD

        {/* Ventana de perfil */}
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
=======
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
>>>>>>> f2f2e44453b307bdd6626102d1b53dc34048e8c0
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
