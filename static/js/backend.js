var express = require("express");
var app = express()
var bodyParser = require('body-parser');
var helmet = require('helmet');
var http = require('http');
var fs = require('fs');
const path = require('path');

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

// var html = fs.readFile('UserLogin.html', function (err, html1) {
//     if (err) {
//         throw err; 
//     }       
//     return html1;
// });
// http.createServer(function(request, response) {  
//     response.writeHeader(200, {"Content-Type": "text/html"});  
//     response.write(html);  
//     response.end();  
// }).listen(6767);

app.get('/', function(req,res){
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    res.sendFile(path.join(__dirname,'/templates/UserLogin.html'));
  }).listen(6767);

app.post("/user_login",(req,res)=>{
    var name = req.body.user;
    var pswd = req.body.pswd;
    console.log(name+" "+pswd);
    return res.send("working");
})

// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     // return res.send("Hello World");
// }).listen(6767);

// app.get