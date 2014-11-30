var mongoose = require('mongoose'),
Schema = mongoose.Schema;

//Creando Esquema de migración
var EmpleadoSchema = new Schema({
	Nombre : {type : String},
	Apellido : {type : String},
	Telefono : {type : String},
	Direccion : {type :String}
});

//Exportando el modelo
module.exports = mongoose.model('Empleado',EmpleadoSchema);