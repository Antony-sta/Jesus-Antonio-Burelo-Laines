const mongoose = require("mongoose");

const Productos=mongoose.Schema({
    nombre:String,
    nocontrol:String,
    calle:String,
    correo:String,
    sexo:String,
    barrio:String,
    telefono:Number,
    edad:Number,
    año:Number,
    mes:String,
    dia:Number,
    imagep:String,
    createdAT:{type:Date,default:Date.now()}
})

module.exports=mongoose.model("Producto",Productos);