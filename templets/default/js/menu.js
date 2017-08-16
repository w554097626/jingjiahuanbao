// JavaScript Document

$(document).ready(function(){
	
/*瀵艰埅灞曞紑鏁堟灉*/	


$("#car_tag .nav_05").hover(
	function(){$(".nav_news").slideDown(300)},
	
	function(){$(".nav_news").stop().slideUp(100)}

)
/*$(".nav_news .list_text").hover(	
    function(){$(this).css("background-color","#ddd");},
	
	function(){$(this).css("background-color","#e6e6e6");}
)*/
	
/*宸︿晶鍒嗕韩灞曞紑JS*/

$(".work_menu_share a").click(
function(){
$(".work_menu").animate({right:"200px"},100)


}

);

$(".work_menu").hover(
function(){
//$(".work_menu").stop().animate({right:"200px"});
},
function(){
$(".work_menu").animate({right:"0px"},100)
}

);	

var isIE=!!window.ActiveXObject; 
var isIE6=isIE&&!window.XMLHttpRequest; 
if (isIE6){ $(".work_menu").hide(); }
/*over*/
	

/*妗堜緥缂撳姩鐗规晥*/

//$("#aaaaaa img").lazyload({ 

//threshold: 100,
//effect: "fadeIn",
//skip_invisible : false,
//placeholder : "../images/grey.gif" });
/*over*/

	

/*绂荤嚎鐣欒█寮瑰嚭妗嗕綅缃�*/
var brgHight = ($(window).height() - $(".openimg").height())/2+document.documentElement.scrollTop;
var brgWidth = ($(window).width() - $(".openimg").width())/2;
$(".openimg").css("left",brgWidth);
$(".openimg").css("top",brgHight);

/*over*/



/*鍒濆鍖�*/


	$("#main .case .zhuanyefenlei").slideUp();
	$(".list ul").hide();
	$("#main .jrdd_zi .list ul").hide();

	$(".s_right_list p").hide();

	/*鏈嶅姟椤甸潰鍙充晶灞曞紑JS*/
	$(".s_right_list").toggle(
		function(){
			$(this).find("p").slideDown();
			$(this).find("h5").addClass("s_right_h5");

			},
				function(){
			$(this).find("p").stop().slideUp();
			$(this).find("h5").removeClass("s_right_h5");
			}

	);

	/*鏈嶅姟椤甸潰鍙充晶灞曞紑JS缁撴潫*/


	/*鏈嶅姟椤甸潰宸︿晶灞曞紑JS寮€濮�*/
	$(".list h4").click(
		function(){
			$(".list ul").stop().slideUp();
			$(".list h4").removeClass("jianhao");
			$(this).parent().find("ul").slideDown();
			$(this).addClass("jianhao");
			}

	);
	$(".post_left").hover(
	   function(){},
		function(){
			$(".list ul").stop().slideUp();
			$(this).find("ul").stop().slideUp();
			$(".list h4").removeClass("jianhao");
			}
	);
	
	
	$(".list h4").hover(
		function(){
			$(this).css("background-color","#fff");

			},
				function(){
			$(this).css("background-color","#fff");

			}

	);
	/*鏈嶅姟椤甸潰宸︿晶灞曞紑JS缁撴潫*/


	/*鏈嶅姟椤甸潰宸︿晶灞曞紑JS缁撴潫*/
	$("#main .jrdd_zi .list h4").click(
		function(){
			$("#main .jrdd_zi .list ul").stop().slideUp();
			$("#main .jrdd_zi .list h4").removeClass("jianhao");
			$(this).parent().find("ul").slideDown();
			$(this).addClass("jianhao");

			}

	);
	
	$("#main .jrdd_zi .post_right").hover(
		function(){},
		function(){
			$("#main .jrdd_zi .list ul").stop().slideUp();
			$(this).parent().find("ul").stop().slideUp();
			$("#main .jrdd_zi .list h4").removeClass("jianhao");
			}
	)
	
	
	
	$("#main .jrdd_zi .list h4").hover(
		function(){
			$(this).css("background-color","#eee");

			},
				function(){
			$(this).css("background-color","#f3f3f5");

			}

	);

	$(".jrdd_zi .post_right ul li a").click(
		function(){
			$(".jrdd_zi .post_right ul li a").removeClass("list_gaoliang");
			$(this).addClass("list_gaoliang");

			}
	);


	/*鏈嶅姟椤甸潰宸︿晶灞曞紑JS缁撴潫*/


	$("#main .case .switch_1").click(
			function(){
			$("#main .case .l_top_list").show();
			$("#main .case .l_bot_list").hide();

			$("#main .case .switch_1").addClass("switch_bg")
			$("#main .case .switch_2").removeClass("switch_bg")

			}


	);
	$("#main .case .switch_2").click(
			function(){

			$("#main .case .l_bot_list").show();
			$("#main .case .l_top_list").hide();

			$("#main .case .switch_2").addClass("switch_bg");
			$("#main .case .switch_1").removeClass("switch_bg");

			});



	$("#header .m_down .d_hover").hover(
					function(){$(this).addClass("top_hover") },
					function(){$(this).removeClass("top_hover") }
				);
	$("#footer .menu div").hover(
					function(){$(this).addClass("top_hover") },
					function(){$(this).removeClass("top_hover") }
				);
	$("#main .menu div").hover(
					function(){
						var font_size = '24';
						var ie=!!window.ActiveXObject;
						var ie6=ie&&!window.XMLHttpRequest;
						if(ie){
							if(ie6){
								font_size = '17';
							}
						}
						$(this).find(".title").stop().animate({fontSize:font_size},100);
						$(this).find(".e_title").stop().animate({fontSize:"12"},100);
						$(this).css("background","url(../images/index_ent_07.png) no-repeat");
						$("#main .menu").find("a").css("color","#aaa");
						$(this).find("a").css("color","#666")
						},
					function(){
						var font_size = '18';
						var ie=!!window.ActiveXObject;
						var ie6=ie&&!window.XMLHttpRequest;
						if(ie){
							if(ie6){
								font_size = '16';
							}
						}
						$("#main .menu").find("a").css("color","#999");
						$(this).find(".title").animate({fontSize:font_size},0);
						$(this).find(".e_title").animate({fontSize:"11"},0);
						$(this).css("background","none");
						}
				);
	$("#nav .mr_nav").hover(
					function(){$(this).css("background","url(../images/nav_hover.png) no-repeat left -94px")},
					function(){$(this).css("background","url(../images/nav.png) no-repeat left -94px")}
				);
	$("#nav .r_nav").hover(
					function(){$(this).css("background","url(../images/nav_hover.png) no-repeat left -141px")},
					function(){$(this).css("background","url(../images/nav.png) no-repeat left -141px")}
				);

	// 瀵艰埅鏉″鐞�,navigation processer\
	function returnNavBoolean(param){
		return window.location.href.indexOf(param)>1?true:false;
	}
	function exceptHome(param){
		$(param).css({'background':'url(../images/nav_li.gif) 0 -2px no-repeat','color':'#222'});
	}
	if (returnNavBoolean('index')){
		$('#navHome').css({'background':'url(../images/nav_bg_hover.png) 0 0 no-repeat','color':'#333'});
	}
	if (returnNavBoolean('about')){
		//exceptHome('#navAbout');
		$('#navAbout').css({'background':'url(../images/nav_bg_hover.png) -89px  0 no-repeat','color':'#333'});
	}
	if (returnNavBoolean('works')){
		//exceptHome('#navWorks');
		$('#navWorks').css({'background':'url(../images/nav_bg_hover.png) -181px 0 no-repeat','color':'#333'});
	}
	if (returnNavBoolean('services')){
		//exceptHome('#navServices');
		$('#navServices').css({'background':'url(../images/nav_bg_hover.png) -263px 0 no-repeat','color':'#333'});
	}
	if (returnNavBoolean('news')){
		//exceptHome('#navNews');
		$('#navNews').css({'background':'url(../images/nav_bg_hover.png) -344px 0 no-repeat','color':'#333'});
	}
	if (returnNavBoolean('join')){
		//exceptHome('#navJoinUs');
		$('#navJoinUs').css({'background':'url(../images/nav_bg_hover.png) -427px 0 no-repeat','color':'#333'});
	}
	if (returnNavBoolean('contact')){
		//exceptHome('#navContact');
		$('#navContact').css({'background':'url(../images/nav_bg_hover.png) -513px 0 no-repeat','color':'#333'});
	}
	
	/*footer涓婅儗鏅€忔槑*/
	
	
	
/*
	var clientHeight = $("body").height();


  $('#mycanvas').attr('height',clientHeight);
  
  if (!+[1,]){

}
else{

	var mycanvas = document.getElementById("mycanvas");
 var context = mycanvas.getContext("2d");
  
  context.strokeStyle='#333';
  context.lineWidth=1;
  context.lineCap='square';
  context.beginPath();
  context.moveTo(0,226);
  context.lineTo(829,0);
  context.stroke();
  context.closePath();
  context.lineWidth=6;
  context.beginPath();
  context.moveTo(0,438);
  context.lineTo(1787,0);
  context.stroke();
  context.closePath();
  context.lineWidth=1;
  context.beginPath();
  context.moveTo(0,868);
  context.lineTo(1048,0);
  context.stroke();
  context.closePath();
  context.lineWidth=1;
  context.beginPath();
  context.moveTo(0,877);
  context.lineTo(1920,93);
  context.stroke();
  context.closePath();
  context.lineWidth=1;
  context.beginPath();
  context.moveTo(0,2172);
  context.lineTo(1920,724);
  context.stroke();
  context.closePath();
  context.lineWidth=6;
  context.beginPath();
  context.moveTo(0,2324);
  context.lineTo(1920,1940);
  context.stroke();
  context.closePath();
  context.lineWidth=1;
  context.beginPath();
  context.moveTo(0,2472);
  context.lineTo(1920,2532);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.moveTo(0,2560);
  context.lineTo(1920,2292);
  context.stroke();
  context.closePath();
}*/

})
	//鍐檆ookies
		function setCookie(name,value)
		{
		var Days = 30;
		var exp = new Date(); 
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		}
		//璇诲彇cookies
		function getCookie(name)
		{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)) return unescape(arr[2]);
		else return null;
		}
		//鍒犻櫎cookies
		function delCookie(name)
		{
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=getCookie(name);
		if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
		}

		//function click(e) {
 //if (document.all) {
  //if (event.button==1||event.button==2||event.button==3) {
   //oncontextmenu='return false';
  //}
 //}
 //if (document.layers) {
  //if (e.which == 3) {
   //oncontextmenu='return false';
  //}
 //}
//}
//if (document.layers) {
 //document.captureEvents(Event.MOUSEDOWN);
//}
//document.onmousedown=click;
//document.oncontextmenu = new Function("return false;")

//var travel=true
//var hotkey=17   /* hotkey鍗充负鐑敭鐨勯敭鍊�,鏄疉SII鐮�,杩欓噷99浠ｈ〃c閿� */
//if (document.layers)
//document.captureEvents(Event.KEYDOWN)
//function gogo(e)
//{ if (document.layers) {
//if (e.which==hotkey&&travel){
 ///*alert("鎿嶄綔閿欒.鎴栬鏄偍鎸夐敊浜嗘寜閿�!");*/  } }
//else if (document.all){
//if (event.keyCode==hotkey&&travel){/* alert("鎿嶄綔閿欒.鎴栬鏄偍鎸夐敊浜嗘寜閿�!"); */}}
//}

//document.onkeydown=gogo;