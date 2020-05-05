var express = require('express');
var todoController =require('./controllers/todoController.js')
var app=express();

//Set up Templating Engine
app.set('view engine','ejs');

//static Files
app.use(express.static('./public'));

//fireControllers
todoController(app);

app.listen(3000);
console.log("You are listening to port 3000");