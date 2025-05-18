import { ENV } from "../utilis";
import Axios from "axios"

export class Forms {
    baseApi = ENV.BASE_API
    async createProducto(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]); // Incluye todos los campos, incluyendo "imagep"
            });
            const response = await Axios.post(
                `${this.baseApi}${ENV.API_ROUTE.CREATEPRODUCTO}`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Producto creado correctamente:", response.data);
            return response.data; // Devuelve los datos del producto creado
        } catch (error) {
            console.error("Error al crear el producto:", error.message);
            throw new Error("No se pudo crear el producto. Intenta nuevamente.");
        }
    }

    async getDatos() {
        try {
            // Realizar la solicitud a la API
            const response = await Axios.get(`${ENV.BASE_API}${ENV.API_ROUTE.GETDATOS}`);
            return response.data; // Devolver los datos obtenidos
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }

    async delDatos (id){
        try{
            const response = await Axios.delete(`${this.baseApi}${ENV.API_ROUTE.DELETEDATOS}/${id}`)
            return response.data
        }catch (error){
            console.error("No se elimina");
            
        }
    }

    async patchDatos(id, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });
            console.log("Datos enviados al servidor:", formData); // Depuración
            const response = await Axios.patch(
                `${this.baseApi}${ENV.API_ROUTE.PATCHEDITAR}/${id}`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Respuesta del servidor:", response.data); // Depuración
            return response.data;
        } catch (error) {
            console.error(`Error al actualizar el producto con ID ${id}:`, error.message);
        }
    }
}