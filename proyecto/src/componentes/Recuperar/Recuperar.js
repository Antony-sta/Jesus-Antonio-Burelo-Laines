import React, { useState } from 'react';

export function Recuperar() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor ingresa tu correo electrónico');
      return;
    }
    setError('');
    setMessage('Se ha enviado un enlace de recuperación a tu correo');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Recuperar Contraseña</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ fontSize: '14px', marginBottom: '5px', display: 'block' }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="Ingresa tu correo registrado"
            />
          </div>

          {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '-10px', marginBottom: '10px' }}>{error}</p>}
          {message && <p style={{ color: 'green', fontSize: '14px', marginTop: '-10px', marginBottom: '10px' }}>{message}</p>}

          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            Enviar Enlace de Recuperación
          </button>
        </form>

        <a href="/" style={{ display: 'block', marginTop: '15px', textAlign: 'center', color: '#007bff', textDecoration: 'none' }}>
          Volver al Inicio de Sesión
        </a>
      </div>
    </div>
  );
}

export default Recuperar;