var template = {
	 contact:function(){
                var contents = `
                 <!--==========================
                      Services Section
                    ============================-->
                    <section id="services" class="section-bg status">
                      </br></br>
                      <div id= "status" class="container pt-5">
                        <header class="section-header">
                          <h4 class="ro2">문의하기</h2>
                        </header>
                        <p>사이트를 이용하면서 생긴 버그, 개선점 등을 알려주시면 저희가 검토 후 빠르게 반영하도록 노력하겠습니다.<br/> 그외 어떠한  피드백이라도 좋습니다. 피드백을 남겨주신다면  저희가 확인 후 답장해 드리도록 하겠습니다.</p>

                        </div>
			<div id= "status" class="container pt-5">
                        <header class="section-header">
                          <h4 class="ro2">후원하기</h2>
                        </header>
                        <p>저희는 대학생으로 이루어진 팀으로써 이번 신종코로나바이러스에대해 조금이라도 다른분들께 도움이 되고자 사이트를 제작하고 있습니다.<br/>  서버, 도메인 등의 유지비용을 모두 사비로 충당하고 있으며 좋은뜻으로 시작한 사이트이기 때문에 영리적인 행동은 취하지 않기로 했습니다.<br/> 따라서 저희는  앞으로도 꾸준히 사이트를 업데이트하고 유지 할 수 있도록 후원금을 받고자 합니다.<br/> 후원금은 앞서 말한 사이트 유지비용에 사용되며 만약 필요 이상의 후원금이 모금된다면 유지비용을 제한 나머지 금액은 모두 기부를 한 후 사이트 혹은 안티코로나  sns 계정에 업로드 하여 인증하도록 하겠습니다.</p>

                        </div>
                    </section><!-- #services -->
                    `;
                return contents;
        },

	blog:function(){
		var contents = `
		 <!--==========================
		      Services Section
		    ============================-->
		    <section id="services" class="section-bg">
		      </br></br>
		      <div id= "blog" class="container pt-5">
		        <header class="section-header">
		          <h4 class="ro2">블로그</h2>
		        </header>
		        <p>준비중 입니다.</p>
		        
			</div>
		    </section><!-- #services -->
		    `;
		return contents;
	},
	status:function(a1,a2,region,list,tab_list){

		var contents = `
		 <!--==========================
		      Services Section
		    ============================-->
		    <section id="services" class="section-bg ">
		      <br/><br/><br/>
			<div class="container"> 
				<div class="row">
					<div class="col-md-12 col-lg-6 pt-2 ro2" style="font-size:20px">오늘 확진자 수 ${a1}</div>
					<div class="col-md-12 col-lg-6 pt-2 ro2" style="font-size:20px">총 확진자 수 ${a2}</div>

				</div>
				<div class="row my-3 pt-5"> 
					<div class="col"> 
						<h4 class="ro2">날짜별 확진자 추이</h4> 
					</div> 
				</div>
			 <div class="row my-2"> 
				<div class="col"> 
					<div class="card"> 
						<div class="col-md-12 col-lg-12"> <canvas id="myChart"></canvas> 
						</div> 
					</div> 
				</div> 
			</div> 
		       </div>

			  <div id= "status" class="container pt-5">
                        <header class="section-header">
                          <h4 class="ro2">확진자별 세부사항</h2>
				<div class="dropdown">
    					<button class="btn btn-default dropdown-toggle" id="mystatus" value="title" type="button" data-toggle="dropdown" aria-expanded="true">
   						 선택
   					 <span class="caret"></span>
   					 </button>
   					
					 <ul id="mytype" class="dropdown-menu" role="menu" aria-labelledby="searchType">
					<li role="presentation" class="">
        				<a class="ml-2 " role="menuitem" tabindex="-1" style="font-size:20px;" value="total">전체보기</a>
                                         </li>
					${tab_list}
    				</ul>
				</div>
                        </header>
                        <div class="row mt-2">
				
                                ${list}
                         </div><!--row-->

                        </div>

		      <div id= "status" class="container pt-5">
		        <header class="section-header ro2">
		          <h4 class="ro2">지역별 확진자</h2>
		        </header>
		        <div class="row">
				${region}
		         </div><!--row-->

			</div>
		    </section><!-- #services -->
			<script>
				 var ctx = document.getElementById('myChart').getContext('2d'); 
				var chart = new Chart(ctx, { // 챠트 종류를 선택 
					type: 'line', // 챠트를 그릴 데이타 
					data: { 
						labels: ['01/20', '01/24', '01/26', '01/27', '01/30', '01/31', '02/01','02/02'], 
						datasets: [{ 
							label: '확진자', 
							backgroundColor: 'transparent', 
							borderColor: 'red', 
							data: [1, 2, 3, 4, 7, 11, 12,15] 
							}] 
						}, 
			// 옵션 
				options: {
					reponsive:false,
					legend:{
						display:false
					},
					title:{
					display:true,
					text:'확진자 추이'
					}	
				} 
				}); 
			</script>

		    `;
		return contents;
	},
	issue:function(body){
		var contents = `
			 <section id="services" class="section-bg">
		      </br></br>
		      <div id= "issue" class="container pt-5">
		        <header class="section-header ro2">
		          <h4 class="ro2">실시간 뉴스</h2>
		        </header>
		        <div class="row">
		          <div class="col-md-12 col-lg-12 ">
		            <div class="box">
		               <table class="table table-hover">
		                  <tbody>
					${body}
		                  </tbody>
		                </table>
		                <hr/>
		            </div>
		          </div> <!--list end-->
		        

		        </div>
		          <header class="ro2 section-header">
		          <h4 class="ro2">연관 영상</h2>
		        </header>
			<div class="row">
				<div class="col-sm-12 col-lg-6 embed-responsive embed-responsive-16by9">
		        		<iframe class="embed-responsive-item pt-2 pl-1 pr-1" src="https://www.youtube.com/embed/dEr4yFayenc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div class="col-sm-12 col-lg-6 embed-responsive embed-responsive-16by9">
		        		<iframe class = "embed-responsive-item pt-2 pl-1 pr-1" src="https://www.youtube.com/embed/cp5mLb5ZtD0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
		      </div>
			<header class="section-header pt-5 ro2">
                          <h4 class="ro2">신종코로나바이러스 연관 검색 단어</h2>
                        </header>

			<div class="row">
				<div class="col-lg-12">
    				<p><img src="./cloud.png" style="max-width:100%; height:auto;" alt="신종코로나바이러스 워드클라우드" ></p>
				</div>
			</div>

		    </section><!-- #services -->
		`;
		return contents;
	},
	whole:function(title, body){
		var contents = `
		<!DOCTYPE html>
		<html lang="ko">
		<head>
		  <meta charset="utf-8">
		  <title>안티코로나- ${title}</title>
		  <meta content="width=device-width, initial-scale=1.0" name="viewport">
		  <meta content="코로나바이러스, 우한폐렴, 바이러스, 독감, 신종코로나, 마스크" name="keywords">
		  <meta content="신종코로나바이러스, 우한폐렴에 대한 실시간 이슈, 뉴스, 확진자에 대한 정보를 제공하는 사이트입니다." name="description">

		<meta property="og:title" content="안티코로나 - 신종 코로나바이러스 국내 현황, 이슈 정리">
		<meta property="og:description" content="국내 신종 코로나바이러스에 대한 이슈와 확진자에 대한 정보를 제공합니다.">
		<meta property="og:image" contents="./img/123.png">
			
		  <!-- Favicons -->
		  <link href="img/favicon.png" rel="icon">
		  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

		  <!-- Google Fonts -->
		  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700" rel="stylesheet">

		  <!-- Bootstrap CSS File -->
		  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

		  <!-- Libraries CSS Files -->
		  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
		  <link href="lib/animate/animate.min.css" rel="stylesheet">
		  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
		  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
		  <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

		  <!-- Main Stylesheet File -->
		  <link href="./css/style.css" rel="stylesheet">
		
			<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
		
		  <!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-157535798-1"></script>
		<script>
 		 window.dataLayer = window.dataLayer || [];
  		function gtag(){dataLayer.push(arguments);}
 		 gtag('js', new Date());

 		 gtag('config', 'UA-157535798-1');
</script>
		</head>

		<body>
		  <!--==========================
		  Header
		  ============================-->
		  <header id="header" >

		    <div id="topbar">
		      <div class="container">
		        <div class="social-links">
		          <a href="#" class="twitter"><i class="fa fa-youtube"></i></a>
		          <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
		        </div>
		      </div>
		    </div>

		    <div class="container">

		      <div class="logo float-left">
		        <!-- Uncomment below if you prefer to use an image logo -->
		        <h1 class="text-light ro2"><a href="/" class="scrollto"><span>안티코로나</span></a></h1>
		        <!-- <a href="#header" class="scrollto"><img src="./img/logo.png" alt="" class="img-fluid"></a> -->
		      </div>

		      <nav class="main-nav float-right d-none d-lg-block ro2">
		        <ul>
		          <li id="home_page" class=""><a href="/">실시간 현황</a></li>
		          <li id="issue_page" class=""><a href="/issue">실시간 이슈</a></li>
		          <li id="blog_page" class=""><a href="/blog">블로그</a></li>
			<li id="contact_page" class=""><a href="/contact">문의 및 후원</a></li>
		        
		        </ul>
		      </nav><!-- .main-nav -->
		      
		    </div>
		  </header><!-- #header -->

		  <main id="main" >
			${body}
		  </main>

		  <!--==========================
		    Footer
		  ============================-->
		  <footer id="footer" class="section-bg">

		    <div class="container">
		      <div class="copyright">
		        &copy; Copyright <strong>Rapid</strong>. All Rights Reserved
		      </div>
		      <div class="credits">
		        <!--
		          All the links in the footer should remain intact.
		          You can delete the links only if you purchased the pro version.
		          Licensing information: https://bootstrapmade.com/license/
		          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
		        -->
		        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
		      </div>
		    </div>
		  </footer><!-- #footer -->

		  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		  <!-- Uncomment below i you want to use a preloader -->
		  <!-- <div id="preloader"></div> -->

		  <!-- JavaScript Libraries -->
		  <script src="lib/jquery/jquery.min.js"></script>
		  <script src="lib/jquery/jquery-migrate.min.js"></script>
		  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
		  <script src="lib/easing/easing.min.js"></script>
		  <script src="lib/mobile-nav/mobile-nav.js"></script>
		  <script src="lib/wow/wow.min.js"></script>
		  <script src="lib/waypoints/waypoints.min.js"></script>
		  <script src="lib/counterup/counterup.min.js"></script>
		  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
		  <script src="lib/isotope/isotope.pkgd.min.js"></script>
		  <script src="lib/lightbox/js/lightbox.min.js"></script>
		  
		  <!-- Contact Form JavaScript File -->
		  <script src="contactform/contactform.js"></script>

		  <!-- Template Main Javascript File -->
		  <script src="js/main.js"></script>

		</body>
		</html>
		`;
		return contents;
	},

	html:function(type){
		var tmp = '';
		var title = '';
		var contents = '';

		if(type === "status"){
			tmp = this.status(today_confirmator,total_confirmator,region_list);
                        title = "실시간 현황";
                        contents = this.whole(title,tmp);
		}
		else if(type === "issue"){
			tmp = this.issue(body);
			title = "실시간 이슈";
			contents = this.whole(title,tmp);
		}
		else if(type === "blog"){
			tmp = this.blog();
			title = "블로그";
			contents = this.whole(title,tmp);
		}
		else if(type === "contact"){
			tmp = this.contact();
			title = "문의 및 후원하기";
			contents = this.whole(title,tmp);

		}
		else if(type === "join"){

		}
		else{

		}
		return contents;
	}
}

module.exports = template;
