var express = require("express");

var app = express();

app.use(express.static('public'));  

/*para montar un middlewares hay que pasarlo como parámetro al método "use" 
sobre el objeto "app" que se crea cuando ejecutamos la función "express()"
archivos estáticos o  static: imagenes, css , javascript. (no presenta compilación
por parte del servidor, y por ello se llaman estático y van en una carpeta)
por defecto se utiliza la carpeta 'public' pero puede generan tantas carpetas 
necesitas para crear/guadar archivos estáticos.
		 					*/
app.set("view engine", "jade");

//Verbos Http => GET /POST /PUT / PATCH / DELETE
//REST

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	res.render("login");
});


app.listen(8080);