var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
	Nombre : {type : String},
	Apellido : {type : String},
	Telefono : {type : String},
	Direccion : {type :String}
});

module.exports = mongoose.model('Empleado',EmpleadoSchema);