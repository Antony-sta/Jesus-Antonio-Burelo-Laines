import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Recuperar.js";

export function Recuperar() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRecuperar = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.");
    } else {
      setMessage("Por favor, ingresa un correo válido.");
    }
  };

  return (
    <div className="recuperar-page">
      <div className="recuperar-container">
        <h2>Recuperar Contraseña</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleRecuperar}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Instrucciones
          </button>
        </form>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default Recuperar;