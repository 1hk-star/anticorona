var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('./public/html.js');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request,response){
    contents = template.html("status");
    response.send(contents);
});

app.get('/issue', function(request,response){
    contents = template.html("issue");
    response.send(contents);
});

app.get('/blog', function(request,response){
    contents = template.html("blog");
    response.send(contents);
});

app.get('/contact', function(request,response){
    contents = template.html("contact");
    response.send(contents);
});


app.use(function(request, response, next){
  response.status(404).send("Sorry cant find that!");
});

app.listen(3000,function(){
  console.log("port 3000 ok");
});
