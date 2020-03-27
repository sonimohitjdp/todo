const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname+'/date.js')
//date is our custom module

const app = express();

//To use ejs
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
//Our other files are put into 'public' folder which is made available by express
//eg. css, js, images

let items = []
let workItems = []

//Home-Route GET method
app.get("/",function(req,res){
  //'list' is the name of our ejs file
  //Value to be substituted are provided from here
  res.render("list",{
    listTitle: date.getDate(),  //date -> Our External Module, getDate() -> Name of our function
    taskItem: items
  });

})

//Home-Route POST method
app.post("/",function(req,res){
  const taskEntered = req.body.taskEntered;
  const konsiList = req.body.button;
  if (konsiList == "Work")
  {
    workItems.push(taskEntered);
    res.redirect("/work");
  }
  else
  {
    items.push(taskEntered);
    res.redirect("/");
  }
})

//----GET & POST for "WORK" list
app.get("/work",function(req,res){
  res.render("list",{
    listTitle: "Work",
    taskItem: workItems
  })
})

app.post("/work",function(req){
  console.log(req.body);
})

app.get("/about",function(req,res){
  res.render("about")
})

//Change the port when running on heroku
app.listen(3000, function(){
  console.log("Server is running on port 3000")
})
