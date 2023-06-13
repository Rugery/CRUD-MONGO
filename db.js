const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/empleados";

const db = mongoose
    .connect(url,{})
    .then(()=> console.log("Conexion Correcta"))
    .catch((e) => console.log("Error de conexion "+ e));

module.exports = db;
