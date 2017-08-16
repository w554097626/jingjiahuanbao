$(function(){
		   
	//二级导航
	var timermenu
	$(".nav").children("li").hover(function(){
			 clearTimeout(timermenu);
			var menu = $(this).index();
			$(this).addClass("cur").siblings("li").removeClass("cur");
			$(".subnav").show();
			$(".subnav").children(".subcon").eq(menu).show().siblings(".subcon").hide();
	},function(){
			timermenu = setTimeout(function(){
					$(".menu").children("li").removeClass("cur");
					$(".subnav").hide();
					$(".subnav").hide();	
					},200)
	})	
	
	$(".subnav").hover(function(){
			 clearTimeout(timermenu);
	},function(){
			timermenu = setTimeout(function(){
					$(".menu").children("li").removeClass("cur");
					$(".subnav").hide();
					$(".subnav").hide();	
					},200)
	})		
	
	
	
	
	//投资者关系
	$(".touzicon ul.ula").each(function(){
								$(this).children("li:last").css("border","none");		
										});
	$(".touzicon .tnav").children("a").hover(function(){
				var tnav = $(this).index();
				$(this).addClass("cur").siblings("a").removeClass("cur")
				$(".touzicon .coninfo").hide();
				$(this).parent(".tnav").parent(".con").children(".coninfo").eq(tnav).show();
		},function(){
											
		})
	
	//公司荣誉
	$(".honorcon .yearcon ul").children("li").each(function(){
															
			if($(this).children(".pl").height()>$(this).children(".pr").height())	{
				$(this).children(".pr").height($(this).children(".pl").height());
				}													
			else{ 
				$(this).children(".pl").height($(this).children(".pr").height());
			}
	});
	
	
		   
		   
});