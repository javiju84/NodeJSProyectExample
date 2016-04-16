var mongoose = require("mongoose");
var Schema = mongoose.Schema; //esquema => 'Schema'
/*Schema es el atributo que retorna un objeto. 
Es un constructor que sirve para poder generar nuestros esquemas*/

//Conexion MongoDB
mongoose.connect("mongodb://localhost/fotos");

var user_schema = new Schema({
	name: String,
	username: String,
	password: String,
	age: Number,
	email: String,
	date_of_birth: Date
});
/*
Tipos de datos que podemos definir para un documentos
=>String
=>Number
=>Date
=>Buffer
=>Boolean
=>Mixed
=>Objectid
=>Array
*/

var User = mongoose.model("User",user_schema);/*model es el constructor que genera los modelos 
												y User es el nombre del modelo*/

module.exports.User = User;