(function($){
//鏍囩鍒囨崲銆佹粦鍔ㄩ棬
$.fn.tabs=function(o){var defaults={add_class:null,block:0,shijian:'hover',xiaoguo:'qiehua',sudu:300,op:200,auto:null,time:200};var o=$.extend(defaults, o);var t=$(this);var sw=1;var cldh=null;return t.each(function(i){var title=t.children().eq(0).children();var listbox=t.children().eq(1);var nrlist=t.children().eq(1).children();var t_w=t.children().eq(1).width();title.eq(o.block).addClass(o.add_class);function qh(i){title.eq(i).addClass(o.add_class).siblings().removeClass(o.add_class);	nrlist.eq(i).show().siblings().hide();};function dr(i){title.eq(i).addClass(o.add_class).siblings().removeClass(o.add_class);nrlist.eq(i).stop(true,true).fadeIn(o.op).siblings().hide();};function qiehua(i){title.eq(i).addClass(o.add_class).siblings().removeClass(o.add_class);hide.stop().animate({left:-t_w*i},o.sudu)};if(o.xiaoguo== 'huadong'){listbox.css({position:'relative',overflow:'hidden'});var hide=$('<div>');	hide.appendTo(listbox);nrlist.appendTo(hide);nrlist.css({float:'left',width:t_w});hide.css({width:t_w*nrlist.length,position:'absolute'});};if(o.shijian== 'click'){if(o.xiaoguo== 'huadong'){title.click(function(){sw=title.index(this);qiehua(sw)});}if(o.xiaoguo== 'qiehua'){title.click(function(){sw=title.index(this);qh(sw);});};if(o.xiaoguo== 'danru'){title.click(function(){sw=title.index(this);dr(sw);});}}else{if(o.xiaoguo== 'huadong'){title.hover(function(){sw=title.index(this);qiehua(sw);});}if(o.xiaoguo== 'qiehua'){title.hover(function(){sw=title.index(this);qh(sw);});};if(o.xiaoguo== 'danru'){title.hover(function(){sw=title.index(this);dr(sw);});};};if(o.auto){kaishi();t.hover(function(){tingzhi();},function(){kaishi();});};function kaishi(){m=setInterval(function(){if(o.xiaoguo== 'huadong'){qiehua(sw);};if(o.xiaoguo== 'danru'){dr(sw)};if(o.xiaoguo== 'qiehua'){qh(sw);};sw++;if(sw==title.length){sw=0;};}, o.auto+o.time);};function tingzhi(){clearTimeout(m);};});}
,$.fn.uiEnd=function(css,o){
	var defaults = {add_class:null};
	var o=$.extend(defaults,o)
	$(this).each(function(i){
		$(this).children().last().addClass(o.add_Class).css(css);
    });
}
,$.fn.tag = function(c){
	var $t = $(this);
	var $e = $t.children();
	$e.eq(0).children().each(function(i){
		$e.eq(1).children().eq(0).show();
		$e.eq(0).children().eq(0).addClass(c);
		
		//$(this).attr('id','s'+i)
		
		$("#s"+request("type")).addClass(c).siblings().removeClass();
		$(".s"+request("type")).show().siblings().hide();
		
		$(this).click(function(){
			$(this).addClass(c).siblings(this).removeClass(c);
			$t.children().eq(1).children('div:eq('+i+')').show().siblings('div').hide();	
		});
		
	});
	function request(paras){ 
		var url = location.href;  
		var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
		var paraObj = {} ;
	 
		for (i=0; s=paraString[i]; i++){  
			paraObj[s.substring(0,s.indexOf("=")).toLowerCase()] = s.substring(s.indexOf("=")+1,s.length);  
		}  
		var returnValue = paraObj[paras.toLowerCase()];  
			if(typeof(returnValue)=="undefined"){  
			return "";  
		}else{  
		return returnValue; 
	}
}
}
//榧犳爣瑙﹀彂鍔熻兘
,$.fn.chufa = function(o){
	var defaults = {
	   pic_sw:null //鍥剧墖寮€鍏�
	  ,c:null
	  ,tihuan:null//瑕佹浛鎹㈠浘鐗囩殑瀵硅薄
	  ,hover_img:null //榧犳爣绉讳笂鍘荤殑鍥剧墖
	  ,out_img:null//榧犳爣绂诲紑鐨勫浘鐗�
	  ,add_class:null//榧犳爣绉讳笂鍘绘坊鍔犱竴涓猚lass
	  ,donghuaObj:this
	  ,left:null //hover left 鍊�
	  ,top:null //hover top 鍊�
	  ,outLeft:null //out left鍊�
	  ,outTop:null //out top鍊�
	  ,touming:null//hover 閫忔槑搴�
	  ,sudu:300//鍔ㄧ敾閫熷害
	  ,shijian:null
	};
	var o = $.extend(defaults, o);
	var w_l = $(o.donghuaObj).css('left')
	var w_t = $(o.donghuaObj).css('top')

	return $(this).each(function(i){
		
		
		
			
			$(o.donghuaObj).css({opacity:o.touming})
			$(this).hover(function(){
			$(this).addClass(o.add_class)//娣诲姞class
			$(o.tihuan).attr("src",o.hover_img);//鏇挎崲鍥剧墖
			$(o.donghuaObj).eq(i).stop().animate({left:o.left||w_l , top:o.top|| w_t, opacity:1},o.sudu);//瑕佸姩鐨勫璞�
			},function(){
				$(this).removeClass(o.add_class)//娓呴櫎娣诲姞鐨刢lass
				$(o.tihuan).attr("src",o.out_img);//out鍥炬爣
				$(o.donghuaObj).eq(i).stop().animate({left:o.outLeft || w_l,top:o.outTop || w_t});//閫€鍑哄姩鐢�
			}); 
		
		
		
	})
}
//鎻愮ず鏄剧ず闅愯棌
,$.fn.s_h = function(s,t,c){
	$(this).each(function(i){
		$(this).hover(function(){
			$(this).addClass(c);
			$(this).children().fadeIn(s);
		},function(){
			$(this).children().fadeOut(t);
			$(this).removeClass(c);
		});
	});
}

//榧犳爣hover娣″叆娣″嚭
,$.fn.op = function(s,a){
	$(this).each(function(i){
		$(this).hover(function(){
			$(this).fadeTo(s||200,a||0.6);
		},function(){
			$(this).fadeTo(s||200,1)});
	});
}
//鎵嬮鐞�
,$.fn.zk = function(){
	var $t = $(this ).children("h4:nth-child(odd)");
	$t.eq(0).addClass('titleH')
	$t.eq(0).next().show();
	$t.click(function(){
		$(this).next("p").slideToggle(300)
		.siblings("p:visible").slideUp(300);
		$(this).toggleClass("titleH");
		$(this).siblings(".titleH").removeClass("titleH");
	});
}
//鏂扮増涓婁笅宸﹀彸灞€涓�
,$.fn.md=function(){
	t = $(this);
	t.css({position:'relative'});
	function md(){
		var t_e = t.children();
		t_e.css({position:'absolute',left:t.width()/2 - t_e.width()/2});
	}
	window.onload = function(){
		md()
	}
	$(window).resize(function(){
		md()
	});
}
//宸﹀彸涓婁笅灞呬腑
,$.fn.middle = function(){
	var $t = $(this)
	window.onload = function(){
		md()
	}
	$(window).resize(function(){
		md()
	});
	function md(){
		var $wh  = $(window).height();
		var $dw  = $(document).width();
		var $tw  = $t.width()
		var $th  = $t.height()
		$t.css({left:$dw/2-$tw/2,top:$wh/2 - $th/2});
	}
	
}
,$.fn.qiehuan = function(o){
	var defaults = {
		xianshishu:1
	   ,qiehuanshu:1
	   ,left_cut:'left_cut'
	   ,right_cut:'right_cut'
	   ,sudu:300 //鍒囨崲閫熷害
	   ,bofangsudu:3000//鎾斁閫熷害
	   
	}	
	var o = $.extend(defaults, o);
	return $(this).each(function(i){
		var obj  = $(this);
		var erzi = obj.children();
		erzi.children().last().after(erzi.html());
		var list = erzi.children();
		
		obj.css({position:'relative',width:list.width()*o.xianshishu,height:123,overflow:'hidden'});//璁剧疆鍒囨崲鍖哄煙鏍峰紡
		erzi.css({width:list.width()*list.length,position:'absolute',left:0});//鍒楄〃鐖舵牱寮�
		list.css({float:'left'});//鍒楄〃鏍峰紡
		var left = erzi.left;
		yiban = erzi.width()/2
		function z_dong(){
			if(erzi.position().left <= -yiban){
				erzi.css({left:0});
			};
			//alert()
			erzi.stop().animate({left:'-='+ list.width()*o.qiehuanshu},o.shudu);
		};
		function r_dong(){
			if(erzi.position().left <= -yiban){
				erzi.css({left:0});
			};
			//alert()
			erzi.stop().animate({left:'-='+ list.width()*o.qiehuanshu},o.shudu);
		};
		
		$(o.left_cut).click(function(){
			z_dong()
		});
		$(o.right_cut).click(function(){
			r_dong();
		});
		var myTime = setInterval(function(){
	  		 z_dong();
	  	 } , o.bofangsudu);
		 
		
		 list.mouseover(function(){
			 clearInterval(myTime)
			 
		 });
		 list.mouseout(function(){
			var myTime = setInterval(function(){
	  		 z_dong();
	  	 	} , o.bofangsudu)
		 })

	});
	
}
})(jQuery)