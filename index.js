var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('./public/html.js');
var dbmanage = require('./config/dbmanage.js');

var express = require('express');
var app = express();

var tmp = '';
var title = '';
var contents = '';

app.use(express.static('public'));

app.get('/', function(request,response){
	var a1;
	var a2;
	var a3;
	var a4;
	var a5;
			
	dbmanage.total_cfm()
		.then(function(result){
			if(result == -1)
				a2="에러";
        		else
                		a2 = result+"명";
			console.log("a2:"+a2);
			return dbmanage.today_cfm();
		})
		.then(function(result){
			if(result == -1)
				a1="에러";
			else
				a1=result+"명";
			console.log("a1:"+a1);
			return dbmanage.region_cfm();
		})
		.then(function(result){
			if(result == -1)
				a3="에러"
			else
				a3=result;


			return dbmanage.list_cfm();
		})
		.then(function(result){
			if(result == -1)
                                a4="에러"
                        else
                                a4=result;
			return dbmanage.tab_list();

		})
		.then(function(result){
                        if(result == -1)
                                a5="에러"
                        else
                                a5=result;
                        tmp = template.status(a1,a2,a3,a4,a5);
                        title = "실시간 현황";
                        contents = template.whole(title,tmp);
                        response.send(contents);

                })

});

app.get('/issue', function(request,response){
	var body;
	 dbmanage.issue_table()
                .then(function(result){
                        if(result == -1)
                                body="에러";
                        else
                                body=result;
                        tmp = template.issue(body);
       			title = "실시간 이슈";
        		contents = template.whole(title,tmp);
        		response.send(contents);
                })

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

app.listen(80,function(){
  console.log("port 3000 ok");
});
