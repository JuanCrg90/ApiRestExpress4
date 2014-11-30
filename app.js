//Cargando dependencias
var express = require('express'),     
bodyParser  = require('body-parser'),
methodOverride = require('method-override'),
mongo = require('mongodb'),
mongoose = require('mongoose');



//Creando una instancia de express
var app = express();

//Conexion a la base de datos
mongoose.connect('mongodb://localhost/ApiDemo',function(err,res){
	if(err) throw err;
	console.log('Conexión a base de datos exitosa');
}); 

//Cargando modelos
var empleado = require('./models/empleado')(app, mongoose);


/*Cargando  Middleware 
https://www.npmjs.org/package/body-parser
https://www.npmjs.org/package/method-override
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Creando variable para el manejo de las rutas
var router = express.Router();

//Creando respuesta para cuando se llame a la raiz de la API
router.get('/',function(req,res){
	res.send("<h1>Hello world </h1>");
});

//Cargando el router a la instancia de express
app.use(router);

//Exportando el módulo
module.exports = app;
