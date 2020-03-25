var express = require("express");
var multer = require('multer');
var upload = multer();
var path = require("path");
var PORT = process.env.PORT || 3000;
var app = express();
const mysql = require("mysql2");

var http = require('http');
var server = http.Server(app);

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
 
app.use("/form", function(request, response){
     
    return response.render("form");
});
app.get("/", function(request, response){
    return response.send("Главная страница");
});

app.post('/action', upload.array(), function(request, response){
    console.log(request);
    console.log(request.body); 
    console.log(request.body.name);
    return response.redirect("/form");
});

/*const connection = mysql.createConnection({
    host: "localhost",
    user: "skiferion@gmail.com",
    database: "amazingComrade",
    password: "T/F;j6cA;ivr3Kc"
  });
   connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
      }
   });*/
  

server.listen(PORT, function() {
});