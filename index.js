var express = require("express");
var multer = require('multer');
var upload = multer();
var path = require("path");
var PORT = process.env.PORT || 3000; //3306
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

let json = JSON.stringify(request.body.abilities);

app.post('/action', upload.array(), function(request, response){
    console.log(request);
    console.log(request.body); 
    console.log(request.body.name);
    return response.redirect("/form");
},
connection.execute(
    "INSERT INTO sql7329391(login,email,birth,sex,fang,abilities,fieldBiograph,checkek) VALUES (?,?,?,?,?,?,?,?)",
    [json],
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
    }
)    
);

const connection = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7329391",
    database: "sql7329391",
    password: "XI56xZclCm"
  });
   connection.connect(function(err){
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else{
        console.log("Подключение к серверу MySQL успешно установлено");
      }
   });
  

server.listen(PORT, function() {
});