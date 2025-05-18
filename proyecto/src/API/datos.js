import axios from 'axios';
import { env } from '../utilidad'; // Importar las constantes

export class Datos {
    async getDatos() {
        try {
            // Realizar la solicitud a la API
            const response = await axios.get(`${env.BASE_API}${env.API_ROUTE.GETDATOS}`);
            return response.data; // Devolver los datos obtenidos
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }
}