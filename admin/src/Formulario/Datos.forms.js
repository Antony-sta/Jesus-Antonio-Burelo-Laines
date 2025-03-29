import * as YUP from "yup";

export function initialValues() {
    return {
        nombre: "",
        nocontrol: "",
        calle: "",
        correo: "",
        sexo: "",
        barrio: "",
        telefono: "",
        edad: "",
        año: "",
        mes: "",
        dia: "",
        imagep: "",
    };
}

export function validationSchema() {
    return YUP.object({
        nombre: YUP.string(),
        nocontrol: YUP.string(),
        calle: YUP.string(),
        correo: YUP.string(),
        sexo: YUP.string(),
        barrio: YUP.string(),
        telefono: YUP.number(),
        edad: YUP.number(),
        año: YUP.number(),
        mes: YUP.string(),
        dia: YUP.number(),
        imagep: YUP.string(),
    });
}