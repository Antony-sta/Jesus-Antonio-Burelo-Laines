import * as Yup from "yup";

export function initialValues(producto) {
    return {
        nombre: producto?.nombre || "",
        nocontrol: producto?.nocontrol || "",
        materia1: producto?.materia1 || "",
        materia2: producto?.materia2 || "",
        materia3: producto?.materia3 || "",
        materia4: producto?.materia4 || "",
        materia5: producto?.materia5 || "",
    };
}

export function validationSchema() {
    return Yup.object({
        nombre: Yup.string(),
        nocontrol: Yup.string(),
        materia1: Yup.number(),
        materia2: Yup.number(),
        materia3: Yup.number(),
        materia4: Yup.number(),
        materia5: Yup.number(),
    });
}