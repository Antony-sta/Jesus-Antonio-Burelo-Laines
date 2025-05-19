import React from 'react'

export function Cali() {
  // Recupera el usuario guardado en localStorage
  const usuarioId = localStorage.getItem("usuarioId");
  const [usuario, setUsuario] = React.useState(null);

  React.useEffect(() => {
    // Puedes guardar el usuario completo en localStorage para evitar otra petición,
    // pero si solo tienes el ID, aquí deberías hacer una petición para obtener los datos completos.
    // Por simplicidad, aquí se asume que tienes el usuario completo guardado.
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioCompleto") || "null");
    setUsuario(usuarioGuardado);
  }, []);

  if (!usuario) {
    return <div>No hay datos del usuario.</div>;
  }

  return (
    <div>
      <h2>Imagen del usuario</h2>
      <img
        src={
          usuario.imagep
            ? `http://localhost:5000/${usuario.imagep}`
            : "https://via.placeholder.com/100"
        }
        alt="Imagen del usuario"
        width="100"
        height="100"
        style={{
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default Cali