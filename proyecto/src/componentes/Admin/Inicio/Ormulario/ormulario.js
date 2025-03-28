import { useState } from 'react';


const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    pais: '',
    aceptoTerminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Formulario de Registro</h2>
      
      <div style={styles.formGroup}>
        <label htmlFor="nombre" style={styles.label}>Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="pais" style={styles.label}>País:</label>
        <select
          id="pais"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Selecciona un país</option>
          <option value="mx">México</option>
          <option value="co">Colombia</option>
          <option value="ar">Argentina</option>
          <option value="es">España</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="aceptoTerminos"
            checked={formData.aceptoTerminos}
            onChange={handleChange}
            style={styles.checkbox}
          />
          Acepto los términos y condiciones
        </label>
      </div>

      <button type="submit" style={styles.button}>Registrarse</button>
    </form>
  );
};

// Estilos básicos
const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    marginRight: '8px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Formulario;