//Cargando dependencias
var express = require('express'),     
bodyParser  = require('body-parser'),
methodOverride = require('method-override'),
mongo = require('mongodb'),
mongoose = require('mongoose');



//Creando una instancia de express
var app = express();


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

app.use(router);

module.exports = app;
