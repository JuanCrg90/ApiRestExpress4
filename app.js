//Cargando dependencias
var express = require('express'),     
bodyParser  = require('body-parser'),
methodOverride = require('method-override'),
mongo = require('mongodb'),
mongoose = require('mongoose'),
empleadoContoller= require('./controllers/empleados');



//Creando una instancia de express
var app = express();

//Conexion a la base de datos
mongoose.connect('mongodb://localhost/ApiDemo',function(err,res){
	if(err) throw err;
	console.log('Conexión a base de datos exitosa');
}); 



/*Cargando  Middleware 
https://www.npmjs.org/package/body-parser
https://www.npmjs.org/package/method-override
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Cargando modelos
var empleado = require('./models/empleado')(app, mongoose);


//Creando variables para el manejo de las rutas
var router = express.Router();
var empleados = express.Router();




//Creando respuesta para cuando se llame a la raiz de la API
router.get('/',function(req,res){
	res.send("<h1>Hello world </h1>");
});

//Respuestas al CRUD de la API
empleados.route('/empleados')
.get(empleadoContoller.findAllEmpleados) //READ
.post(empleadoContoller.addEmpleado);  //CREATE



empleados.route('/empleados/:id')
.get(empleadoContoller.findById) //Read
.put(empleadoContoller.updateEmpleado) //Update
.delete(empleadoContoller.deleteEmpleado); //Delete




//Cargando los routers a la instancia de express
app.use(router);
app.use('/api',empleados);


//Exportando el módulo
module.exports = app;
