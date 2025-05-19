import React, { useState, useEffect } from 'react';
import { Datos } from '../../API';

const ctrDatos = new Datos();

export function Califica() {
    const [usuario, setUsuario] = useState(null);
    const usuarioId = localStorage.getItem("usuarioId");

    const obtener = async () => {
        try {
            const listaPro = await ctrDatos.getDatos();
            const filtrados = listaPro.filter(dato => String(dato._id) === String(usuarioId));
            setUsuario(filtrados[0] || null);
        } catch (error) {
            console.error("No se logra obtener:", error);
            setUsuario(null);
        }
    };

    useEffect(() => {
        obtener();
        // eslint-disable-next-line
    }, []);

    if (!usuario) {
        return (
            <div>
                <h2>No se encontraron datos para este usuario.</h2>
            </div>
        );
    }

    return (
        <div>
            <h2>Calificacion</h2>
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

export default Califica;