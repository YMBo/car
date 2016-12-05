//字体

$(function(){
	(function(){
		var buttonIndex=1;
		var developFlag=true;
		loadImage(['./images/head.png','./images/logo.png','./images/sky.png'], function(){
			go();
		});
		function go(){
			if(navigator.userAgent.match(/Android/i) || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1){
					if($(window).width()<$(window).height()) {
						$('#cover').css('display','block');
					}else{
						setTimeout(develop,500);
					}
					function hengshuping(){
					if(window.orientation==180||window.orientation==0){
						$('#cover').css('display','block');
					}
					if(window.orientation==90||window.orientation==-90){
						$('#cover').css('display','none');
							setTimeout(develop,500);
						}
					}
					window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
			}else{
				setTimeout(develop,500);
			}
		}
		
		
		var posit=[];
		posit[0]={
			px:'100%',
			py:'-100%',
			flag:false
		}
		posit[1]={
			px:'-100%',
			py:'-100%',
			flag:false
		}
		posit[2]={
			px:'-100%',
			py:'-100%',
			flag:false
		}
		posit[3]={
			px:'-100%',
			py:'-100%',
			flag:false
		}
		posit[4]={
			px:'-100%',
			py:'0',
			flag:false
		}
		posit[5]={
			px:'-100%',
			py:'100%',
			flag:false
		}
		posit[6]={
			px:'-100%',
			py:'100%',
			flag:false
		}
		posit[7]={
			px:'100%',
			py:'100%',
			flag:false
		}
		posit[8]={
			px:'100%',
			py:'100%',
			flag:false
		}
		posit[9]={
			px:'100%',
			py:'-100%',
			flag:false
		}
		posit[10]={
			px:'100%',
			py:'-100%',
			flag:false
		}
		posit[11]={
			px:'-100%',
			py:'-100%',
			flag:false
		}
		posit[12]={
			px:'-100%',
			py:'-100%',
			flag:false
		}
		posit[13]={
			px:'-100%',
			py:'100%',
			flag:false
		}
		posit[14]={
			px:'-100%',
			py:'100%',
			flag:false
		}
		posit[15]={
			px:'100%',
			py:'100%',
			flag:false
		}
		posit[16]={
			px:'100%',
			py:'-100%',
			flag:false
		}
		posit[17]={
			flag:false
		}
		function develop(){
			$('.sky .sstar').css('display','none');
			developFlag=false;
			$('.sky').fadeIn();
			$('.skybg').css({
				'transform':'scale(1)',
				'-web-transform':'scale(1)',
				'-o-transform':'scale(1)',
			});
			setTimeout(function(){
				$('.sky .sstar').fadeIn(700,startStar);
			},1000)			
			//定位
			//线定位
			$('.linet .moveBg').each(function(i){
				$(this).css({
					'left':posit[i].px,
					'top':posit[i].py
				})
			})
			$('.sky').css('left',($('.content_body').width()/2)-($('.sky').width()/2)+'px');
			$('.sky').css('top',($('.content_body').height()/2)-(parseInt($('.sky').css('paddingBottom'))/2)+25+'px');
			$('.sky ul').css('top',(parseInt($('.content_body .sky').css('paddingBottom'))/2)-(parseInt($('.sky ul').css('height'))/2)+'px');
			$(window).resize(function(){
				$('.sky').css('left',($('.content_body').width()/2)-($('.sky').width()/2)+'px');
				$('.sky').css('top',($('.content_body').height()/2)-(parseInt($('.sky').css('paddingBottom'))/2)+'px');
				$('.sky ul').css('top',(parseInt($('.content_body .sky').css('paddingBottom'))/2)-(parseInt($('.sky ul').css('height'))/2)+'px');
			})
			var attr='';
			var ssFlag=true;
			$('.sky ul').delegate(".sstar","mouseenter",function(){
				if($(this).parent('li').children('span.word').css('display')=='none'){
					attr=$(this).attr('style');
					$(this).removeAttr('style');
					$(this).parent('li').children('span.word').fadeIn();	
				}else{
					ssFlag=false;
				}
			})
			$('.sky ul').delegate(".sstar","mouseleave",function(){
				if(posit[$(this).parent('li').index()].flag){return;}
					if(ssFlag){
						$(this).attr('style',attr);
						$(this).parent('li').children('span.word').fadeOut();
					}else{
						ssFlag=true;
					}	
			})
			setTimeout(function(){
				biu();
			},2000)
			//星星闪闪亮
			function startStar(){
				var sstar=$('.sky span.sstar');
				var list=[];
				var t=0;
				for(var i=0;i<sstar.length;i++){
					list.push(sstar.eq(i));
				}
				star(list)
				function star(arg){
					for(var i=0;i<arg.length;i++){
						t=parseInt(Math.random()*3);
						arg[i].css({
						'animation':'star '+t+'s infinite alternate',
						'-moz-animation':'star '+t+'s infinite alternate',
						'-webkit-animation':'star '+t+'s infinite alternate',
						'-o-animation':'star '+t+'s alternate',
						})
					}
				}
			}
			//射线
			function biu(){
				var  index=$('.sky ul li').length-1;
				var i=0;
					(function itera(i){
						if(i>=index){
							posit[index].flag=true;
							$('.sky ul li').eq(index).children('span.sstar').removeAttr('style');
							$('.sky ul li').eq(index).children('span.word').fadeIn();	
							return;
						}else{
							$('.sky ul li').eq(i).children('span.sstar').removeAttr('style');
							$('.sky ul li').eq(i).children('span.word').fadeIn();	
							posit[i].flag=true;
							$('.sky ul li').eq(i).find('.moveBg').animate({
								'top':0,
								'left':0
							},200,'linear',function(){
								itera(++i);
							});
						}
					})(i);
				}
			}
	})()
	function loadImage(url, callback) {
		var num=0;
		var img=[];
		function imageload(){
		        num++;
		        if (num==url.length){
		            callback();
		        }
		 }
		 for(var i=0;i<url.length;i++){
		 	img[i] = new Image();
		 	img[i].src = url[i];
		 	//图片下载完毕时异步调用callback函数。
		 	if(img[i].complete){                  //ie
		 		imageload();
		 	}else{
			 	img[i].onload = function () { 
			 	        imageload();
			 	};
		 	}
		 }
		 
	};
		
});