var mongoose = require("mongoose");
var Schema = mongoose.Schema; 
/*Schema es el atributo que retorna un objeto. 
Es un constructor que sirve para poder generar nuestros esquemas*/
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
