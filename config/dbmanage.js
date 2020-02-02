var mysql_dbc = require('./database')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
var Promise = require('promise');
var moment = require('moment');


var dbmanage= {
	total_cfm:function(){ 
		return new Promise(resolve=>{
			connection.query('SELECT * FROM confirmator', function (error, rows, fields) {
            		if (!error) {
				//console.log(rows.length);
               			resolve(rows.length);
           		} else {
               			console.log('query error : ' + error);
				resolve(-1);
             		}
        		})
		})
	},
	today_cfm:function(){
		return new Promise(resolve=>{
			var today = moment().format("YYYY-MM-DD");
			var sql = 'SELECT * FROM confirmator where c_date = \''+today+'\'';
			connection.query(sql, function (error, rows, fields) {
                        if (!error) {
				//console.log(sql);
				//console.log("today:"+today);
                                //console.log(rows.length);
                                resolve(rows.length);
                        } else {
                                console.log('query error : ' + error);
                                resolve(-1);
                        }
                        })	
		})
	},
	region_cfm:function(){
		return new Promise(resolve=>{
			var sql = 'SELECT c_region, COUNT(c_id) AS cnt FROM confirmator GROUP BY c_region ORDER BY cnt DESC';
			var json_array = new Array();
			var contents=``;

			connection.query(sql, function (error, rows, fields) {
                        if (!error) {
                                for(var i=0; i<rows.length;i++){
                                 	console.log(rows[i].c_region+", "+rows[i].cnt);
					contents +=`<div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                            			<div class="box">
                        	      			<h4 class="title">${rows[i].c_region}</h4>
                	              			<p class="con" style="font-size:18px"> 총 확진자 : ${rows[i].cnt}명</p>
        	                    		</div>
	                          	</div>`

				}
				//console.log('contests: '+contents);
				resolve(contents);
				
                        } else {
                                console.log('query error : ' + error);
                                resolve(-1);
                        }
                        })
		})
	},
	issue_table:function(){
                return new Promise(resolve=>{
                        connection.query('SELECT title, date, originallink,link, description FROM news_api ORDER BY RAND() LIMIT 10', function (error, rows, fields) {
			var contents=``;
			 if (!error) {
                                for(var i=0; i<rows.length;i++){
                                        console.log(rows[i].c_region+", "+rows[i].cnt);
                                        contents +=`
						<tr>
	                                      <td><a href="${rows[i].link}" target="_blank">${rows[i].date}<a></td>
                	                      <td>${rows[i].description}</td>
                        	            </tr>
					`

                                }
                                //console.log('contests: '+contents);
                                resolve(contents);

                        } else {
                                console.log('query error : ' + error);
                                resolve(-1);
                        }

			 })
                })
        },
	list_cfm:function(){
                return new Promise(resolve=>{
                        connection.query('SELECT * FROM confirmator ORDER BY c_no asc', function (error, rows, fields) {
                        var contents=``;
                         if (!error) {
				var asd;
				var date;
                                for(var i=0; i<rows.length;i++){
					date = rows[i].c_date.substring(5,10)
					if(rows[i].c_nationality == "korea")
						abc="한국";
					else if(rows[i].c_nationality == "china")
						abc="중국";
					else
						abc="미확인";	
					contents +=`<div class="total_cfm col-md-6 col-lg-3  bounceInUp list_${rows[i].c_no}" style="display:none;" data-wow-duration="1.4s">
                                                <div class="box">
                                                        <h2 class="title">${rows[i].c_no}번째 확진자</h2>
							<hr/>
							<p class="con"> 지역 : ${rows[i].c_region}</p>
                                                        <p class="con"> 입원병원 : ${rows[i].c_hospital}</p>
							<p class="con"> 확진 날짜 : ${date}</p>
							<p class="con"> 나이 : ${rows[i].c_age}</p>
							<p class="con"> 성별 : ${rows[i].c_gender}</p>
							<p class="con"> 국적 : ${abc}</p>
							
                                                </div>
                                        </div>`

                                }
                               // console.log('contests: '+contents);
                                resolve(contents);

                        } else {
                                console.log('query error : ' + error);
                                resolve(-1);
                        }

                         })
                })
        },
	tab_list:function(){
		return new Promise(resolve=>{
                        connection.query('SELECT c_no FROM confirmator ORDER BY c_no asc', function (error, rows, fields) {
                        var contents=``;
                         if (!error) {
                                var asd;
                                var date;
                                for(var i=0; i<rows.length;i++){

				contents+=`<li role="presentation" class="">
                                        <a class="ml-2" role="menuitem" tabindex="-1" style="font-size:20px;" value="${rows[i].c_no}">${rows[i].c_no}번째 확진자</a>
                                         </li>`

                                }
                                //console.log('contests: '+contents);
                                resolve(contents);

                        } else {
                                console.log('query error : ' + error);
                                resolve(-1);
                        }

                         })
                })

	}

}
//connection.end();

module.exports = dbmanage;
