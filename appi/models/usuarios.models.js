const mongoose = require("mongoose")

const usuarios = mongoose.Schema({
    user:String,
    password:String
    
},{_id:true})

module.exports=mongoose.model("Usuarios",usuarios);