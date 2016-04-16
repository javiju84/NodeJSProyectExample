var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
	email:String,
	password:String
};

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model("User",user_schema);

/*montamos los middlewares*/
/*para montar un middlewares hay que pasarlo como parámetro al método "use" 
sobre el objeto "app" que se crea cuando ejecutamos la función "express()"
archivos estáticos o  static: imagenes, css , javascript. (no presenta compilación
por parte del servidor, y por ello se llaman estático y van en una carpeta)
por defecto se utiliza la carpeta 'public' pero puede generan tantas carpetas 
necesitas para crear/guadar archivos estáticos.*/
app.use("/public",express.static('public'));  
app.use(express.static('assets'));  

app.use(bodyParser.json());// para peticiones application/json
app.use(bodyParser.urlencoded({extended: true})); 
/*true o el false define el olgaritmo con que se va hacer el parsing la libreria,
si el 'false' no se puede hacer parsing de array o parámetro que se envian de una 
peticón get o post que no sean JSON*/
/*"body-parser" buscar los archivos dentro de los datos y extraerlos
  que vienen en una petición JSON*/

app.set("view engine", "jade");

//Verbos Http => GET /POST /PUT / PATCH / DELETE
//REST

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	User.find(function(err,doc){  /*pasamos una condicion de busqueda http://is.gd/jtZBgc  min.11*/
		console.log(doc);
		res.render("login");
	});
});

/*creamos la ruta login.jade*/
/*post porque está definido en el login.jade "form(action="/users",method="POST")"*/
app.post("/users", function(req,res){
	var user = new User({email: req.body.email, password: req.body.password});

	user.save(function(){
		res.send("Guardamos tus datos")
	});	
	
});
app.listen(8080);