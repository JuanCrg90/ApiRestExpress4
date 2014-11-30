var mongoose = require('mongoose'),
Empleado = require('../models/empleado')

/*GET Devuelve todos los empleados 
almacenados en la base de datos*/
exports.findAllEmpleados = function(req,res){
	Empleado.find(function(err,empleados){

		if(err) res.send(500, err.message);

		console.log('GET /Empleados')
		res.status(200).jsonp(empleados);


	});
};

/*GET - Retorna un empleado especifico en base a su id*/
exports.findById = function(req, res) {
	Empleado.findById(req.params.id, function(err, empleado) {
		if(err) return res.send(500, err.message);

		console.log('GET /empleado/' + req.params.id);
		res.status(200).jsonp(empleado);
	});
};

/*Post Inserta un nuevo empleado en la base de datos*/
exports.addEmpleado = function(req,res){
	console.log('POST');
	console.log(req.body);

	var empleado = new Empleado({
		Nombre : req.param('Nombre'),
		Apellido : req.param('Apellido'),
		Telefono : req.param('Telefono'),
		Direccion : req.param('Direccion')
	});

	empleado.save(function(err, empleado) {
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(empleado);
	});
};

/* PUT Actualiza un empleado ya existente*/
exports.updateEmpleado = function(req,res){
	Empleado.findById(req.params.id,function(err,empleado){
		empleado.Nombre = req.body.Nombre;
		empleado.Apellido = req.body.Apellido;
		empleado.Telefono = req.body.Telefono;
		empleado.Direccion = req.body.Direccion;

		empleado.save(function(err){
			if(err) return res.send(500,err.message);
			res.status(200).jsonp(empleado);
		});
	});
};

/* DELETE Elimina un empleado con id especifico */
exports.deleteEmpleado = function(req,res){
	Empleado.findById(req.params.id,function(err,empleado){
		empleado.remove(function(err){
			if(err) return res.send(500,err.message);
			res.status(200);
		});
	});

}

