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
}