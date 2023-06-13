const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var empleadosSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
}, {versionKey: false});

module.exports = mongoose.model('empleados', empleadosSchema);


