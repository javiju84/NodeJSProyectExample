var express = require("express");
var bodyParser = require("body-parser");
var app = express();

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
		res.render("login");
});

/*creamos la ruta login.jade*/
/*post porque está definido en el login.jade "form(action="/users",method="POST")"*/
app.post("/users", function(req,res){
	console.log("Email: "+ req.body.email);
	console.log("Contraseña: "+ req.body.password);/*confirmar que los parámetros se están leyendo */
	res.send("Recibimos tus datos")
});
app.listen(8080);