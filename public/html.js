var fs = require('fs');
var template = {
	blog:function(){
		var contents = `
		 <!--==========================
		      Services Section
		    ============================-->
		    <section id="services" class="section-bg status">
		      </br></br>
		      <div id= "status" class="container pt-5">
		        <header class="section-header">
		          <h4>블로그</h2>
		        </header>
		        <p>준비중 입니다.</p>
		        
			</div>
		    </section><!-- #services -->
		    `;
		return contents;
	},
	status:function(){
		var contents = `
		 <!--==========================
		      Services Section
		    ============================-->
		    <section id="services" class="section-bg status">
		      </br></br>
		      <div id= "status" class="container pt-5">
		        <header class="section-header">
		          <h4>국가지정 입원치료병상 지역별 확진자</h2>
		        </header>
		        <div class="row">
		           <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
		            <div class="box">
		              <h4 class="title">서울</h4>
		              <p class="title">중앙대학교병원 : 0명</br>한일병원 : 1명</br></br>총 확진자 : 3명</p>
		            </div>
		          </div>
		         </div><!--row-->
			</div>
		    </section><!-- #services -->
		    `;
		return contents;
	},
	issue:function(){
		var contents = `
			 <section id="services" class="section-bg status">
		      </br></br>
		      <div id= "issue" class="container pt-5">
		        <header class="section-header">
		          <h4>실시간 뉴스</h2>
		        </header>
		        <div class="row">
		          <div class="col-md-12 col-lg-12 wow bounceInUp" data-wow-duration="1.4s">
		            <div class="box">
		               <table class="table table-hover">
		                  <tbody>
		                    <tr>
		                      <td>코로나 바이러스 치료제 발견</td>
		                      <td>대한뉴스</td>
		                      <td>2020/01/29 07:01</td>
		                    </tr>
		                  </tbody>
		                </table>
		                <hr/>
		                <nav aria-label="Page navigation example">
		  			<ul class="pagination justify-content-center">
		    				<li class="page-item disabled">
		      					<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
		    				</li>
		    				<li class="page-item"><a class="page-link" href="#">1</a></li>
		    				<li class="page-item"><a class="page-link" href="#">2</a></li>
		    				<li class="page-item"><a class="page-link" href="#">3</a></li>
		    				<li class="page-item">
		      					<a class="page-link" href="#">Next</a>
		    				</li>
		  			</ul>
				</nav>
		            </div>
		          </div> <!--list end-->
		        

		        </div>
		          <header class="section-header">
		          <h4>실시간 영상</h2>
		        </header>
		        <iframe  width="530" height="315" src="https://www.youtube.com/embed/1SlbLpjklig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		        <iframe  width="530" height="315" src="https://www.youtube.com/embed/2Mh4Ur-6JNU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
		  <meta content="신종코로나바이러스, 우한폐렴에 대한 실시간 이슈, 뉴스, 확진자에 대한 정보를 제공하는 사이트입니다. 또한 국내 한국의 지역별 지정병원에 대해서도 표시하고 있습니다." name="description">

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
		        <h1 class="text-light"><a href="/" class="scrollto"><span>안티코로나</span></a></h1>
		        <!-- <a href="#header" class="scrollto"><img src="./img/logo.png" alt="" class="img-fluid"></a> -->
		      </div>

		      <nav class="main-nav float-right d-none d-lg-block">
		        <ul>
		          <li class="active"><a href="/">실시간 현황</a></li>
		          <li><a href="/issue">실시간 이슈</a></li>
		          <li><a href="/blog">블로그</a></li>
		        
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
			tmp = this.status();
			title = "실시간 현황";
			contents = this.whole(title,tmp);
		}
		else if(type === "issue"){
			tmp = this.issue();
			title = "실시간 이슈";
			contents = this.whole(title,tmp);
		}
		else if(type === "blog"){
			tmp = this.blog();
			title = "블로그";
			contents = this.whole(title,tmp);
		}
		else if(type === "login"){

		}
		else if(type === "join"){

		}
		else{

		}
		return contents;
	}
}

module.exports = template;