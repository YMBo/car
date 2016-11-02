
$(function(){
	loadImage(['./images/bg.jpg','./images/sun.png','./images/earth.png'], animation);
	var timer=null;
	var boxHeight=parseFloat($('#box').css('paddingTop'))
	$('#box').css({
		'bottom':-boxHeight+'px'
	})
	$('#bg').css('width',$(window).width()+'px')
	$('#bg .moveBg').css({
		'left':parseInt($('body').css('width'))/2-parseInt($('#bg .moveBg').css('width'))/2+'px'
	})
	$(window).resize(function() {
		$('#bg').css('width',$(window).width()+'px');
	  $('#bg .moveBg').css({
	  		'left':parseInt($('body').css('width'))/2-parseInt($('#bg .moveBg').css('width'))/2+'px'
	  	})
	});
	function animation(){
		$('#bg p').css({
			'animation':'show 5s',
			'-moz-animation':'show 5s',
			'-webkit-animation':'show 5s',
			'-o-animation':'show 5s',
			'animation-fill-mode': 'forwards'
		}).delay(5000).fadeOut();
		$('#box').delay(1200).animate({
			'bottom':'0'
		},2000,function(){
			$('#box .sun').fadeIn(1800,function(){
				$(this).css({
					'animation':'sun 2s infinite alternate',
					'-moz-animation':'sun 2s infinite alternate',
					'-webkit-animation':'sun 2s infinite alternate',
					'-o-animation':'sun 2s infinite alternate',
				})
				$('.moveBg div').fadeTo(800,1)
			});
			if( !timer){
				timer=setTimeout(function(){
					clearTimeout(timer);
					timer=null;
					//判断pc移动
					if(navigator.userAgent.match(/Android/i) || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1){					
						//移动端
						moveMobile();
					}else{
						mouse()
					}
				},1800)
			}	

		})
	}
	function loadImage(url, callback) {
		var num=0;
		var img=[];
		function imageload(){
		        num++
		        if (num==url.length){
		            callback();
		        }
		 }
		 for(var i=0;i<url.length;i++){
		 	img[i] = new Image();
		 	img[i].src = url[i];
		 	img[i].onload = function () { //图片下载完毕时异步调用callback函数。
		 	        imageload();
		 	};
		 }
		 
	};
	//PC端移动
	function mouse(){
		var move=0,
			c=10,
			l=parseInt($('#bg .moveBg').css('left')),
			imgWidth=$('.m_six').width(),
			m_sixR,cx_sevenR,m_eightR,m_ryR;
			//倍数
			c=(parseInt($('body').css('width'))/3)/-parseInt($('#bg .moveBg').css('left'));
			$(window).resize(function(){
				l=parseInt($('#bg .moveBg').css('left'));
				c=(parseInt($('body').css('width'))/3)/-parseInt($('#bg .moveBg').css('left'));
				imgWidth=$('.m_six').width();
			})
			c=c.toFixed(3);
			//半径
		$(document).mousemove(function(e){
			//距离
			m_six={x:$('.m_six').offset().left,y:$('.m_six').offset().top,ox:$('.m_six').offset().left+imgWidth/2,oy:$('.m_six').offset().top+imgWidth/2};
			cx_seven={x:$('.cx_seven').offset().left,y:$('.cx_seven').offset().top,ox:$('.cx_seven').offset().left+imgWidth/2,oy:$('.cx_seven').offset().top+imgWidth/2};
			m_eight={x:$('.m_eight').offset().left,y:$('.m_eight').offset().top,ox:$('.m_eight').offset().left+imgWidth/2,oy:$('.m_eight').offset().top+imgWidth/2};
			m_ry={x:$('.m_ry').offset().left,y:$('.m_ry').offset().top,ox:$('.m_ry').offset().left+imgWidth/2,oy:$('.m_ry').offset().top+imgWidth/2};
			//鼠标图片边框距离
			m_sixR=(imgWidth/2)-Math.sqrt(Math.pow((m_six.ox-e.pageX),2)+Math.pow((m_six.oy-e.pageY),2));
			cx_sevenR=(imgWidth/2)-Math.sqrt(Math.pow((cx_seven.ox-e.pageX),2)+Math.pow((cx_seven.oy-e.pageY),2));
			m_eightR=(imgWidth/2)-Math.sqrt(Math.pow((m_eight.ox-e.pageX),2)+Math.pow((m_eight.oy-e.pageY),2));
			m_ryR=(imgWidth/2)-Math.sqrt(Math.pow((m_ry.ox-e.pageX),2)+Math.pow((m_ry.oy-e.pageY),2));
			//判断鼠标是否在对应区域内
			if(((e.pageX-m_six.x)>0)&&((e.pageX-m_six.x)<imgWidth)&&((e.pageY-m_six.y)>0)&&((e.pageY-m_six.y)<imgWidth)){
				//亮星星 x
				//在圈里
				if(m_sixR>0){
					$('.m_six .num1').css('opacity',(Math.ceil((m_sixR/(imgWidth/2))*10)/10).toFixed(1));
					if((Math.ceil((m_sixR/(imgWidth/2))*10)/10).toFixed(1)>=0.9){
						$('.m_six .num2').fadeIn();
					}else if((Math.ceil((m_sixR/(imgWidth/2))*10)/10).toFixed(1)<=0.3){
						$('.m_six .num2').fadeOut();
					}
				}
			}else if($('.m_six .num2').css('display') !== 'none'){
					$('.m_six .num2').fadeOut();
			}else if($('.m_six .num1').css('opacity') !== 0){
					$('.m_six .num1').css('opacity','0');
			} 

			if(((e.pageX-cx_seven.x)>0)&&((e.pageX-cx_seven.x)<imgWidth)&&((e.pageY-cx_seven.y)>0)&&((e.pageY-cx_seven.y)<imgWidth)){
				if(cx_sevenR>0){
					$('.cx_seven .num1').css('opacity',(Math.ceil((cx_sevenR/(imgWidth/2))*10)/10).toFixed(1));
					if((Math.ceil((cx_sevenR/(imgWidth/2))*10)/10).toFixed(1)>=0.9){
						$('.cx_seven .num2').fadeIn();
					}else if((Math.ceil((cx_sevenR/(imgWidth/2))*10)/10).toFixed(1)<=0.3){
						$('.cx_seven .num2').fadeOut();
					}
				}
			}else if($('.cx_seven .num2').css('display') !== 'none'){
					$('.cx_seven .num2').fadeOut();
			}else if($('.cx_seven .num1').css('opacity') !== 0){
					$('.cx_seven .num1').css('opacity','0');
			} 

			if(((e.pageX-m_eight.x)>0)&&((e.pageX-m_eight.x)<imgWidth)&&((e.pageY-m_eight.y)>0)&&((e.pageY-m_eight.y)<imgWidth)){
				if(m_eightR>0){
					$('.m_eight .num1').css('opacity',(Math.ceil((m_eightR/(imgWidth/2))*10)/10).toFixed(1));
					if((Math.ceil((m_eightR/(imgWidth/2))*10)/10).toFixed(1)>=0.9){
						$('.m_eight .num2').fadeIn();
					}else if((Math.ceil((m_eightR/(imgWidth/2))*10)/10).toFixed(1)<=0.3){
						$('.m_eight .num2').fadeOut();
					}
				}
			}else if($('.m_eight .num2').css('display') !== 'none'){
					$('.m_eight .num2').fadeOut();
			} 

			if(((e.pageX-m_ry.x)>0)&&((e.pageX-m_ry.x)<imgWidth)&&((e.pageY-m_ry.y)>0)&&((e.pageY-m_ry.y)<imgWidth)){
				if(m_ryR>0){
					$('.m_ry .num1').css('opacity',(Math.ceil((m_ryR/(imgWidth/2))*10)/10).toFixed(1));
					if((Math.ceil((m_ryR/(imgWidth/2))*10)/10).toFixed(1)>=0.9){
						$('.m_ry .num2').fadeIn();
					}else if((Math.ceil((m_ryR/(imgWidth/2))*10)/10).toFixed(1)<=0.3){
						$('.m_ry .num2').fadeOut();
					}
				}
			}else if($('.m_ry .num2').css('display') !== 'none'){
					$('.m_ry .num2').fadeOut();
			}
			move=parseInt(((parseInt($('body').css('width'))/2-e.pageX)/c)+l);
			if(move <= (parseInt($('body').css('width'))/2-parseInt($('#bg .moveBg').css('width'))/2)*2){
				move=(parseInt($('body').css('width'))/2-parseInt($('#bg .moveBg').css('width'))/2)*2;
			}else if( move >=0){
				move=0;
			}
			$('#bg .moveBg').css({
				'left':move+'px'
			})
		})
	}
	//移动端移动
	function moveMobile(){
		//中线
		var a,b,c,d,ml;
		//中线
		var moveBgL=$(window).width()/2;
		var imgz=$('.m_six').width()/2
		var step=imgz*2/3;
		if (window.DeviceMotionEvent) {
		        window.addEventListener('devicemotion', deviceMotionHandler, false);
		    } else {
		        alert('您的设备不支持');
		    }
		    function deviceMotionHandler(eventData) {
		        ml=Math.abs(parseInt($('#bg .moveBg').css('left')));
		        a=$('.m_six').offset().left+imgz;
		        b=$('.cx_seven').offset().left+imgz;
		        c=$('.m_eight').offset().left+imgz;
		        ry=$('.m_ry').offset().left+imgz;
		        var acceleration = eventData.accelerationIncludingGravity,
		            d,direction;
		        if($(window).height() >= $(window).width()){
		        	direction='x';
		        }else{
		        	direction='y';
		        }
		        d =acceleration[direction]*7;
		        var left=parseInt($('#bg .moveBg').css('left'))+d;
		       if(d){
		       	//碰撞检测
		       	if(left <= (parseInt($('body').css('width'))/2-parseInt($('#bg .moveBg').css('width'))/2)*2){
		       		left=(parseInt($('body').css('width'))/2-parseInt($('#bg .moveBg').css('width'))/2)*2;
		       	}else if( left >=0){
		       		left=0;
		       	}
		       	$('#bg .moveBg').css({
		       		'left':left+'px'
		       	})
		       	//显示车型
		       	if((Math.abs(moveBgL-b)<step)&&$('#bg .cx_seven').find('.num2').css('display')=='none'){
		       		$('.moveBg').find('.num2').stop(true).fadeOut();
		       		$('#bg .cx_seven').find('.num2').stop(true).fadeIn();
		       	}else if((Math.abs(moveBgL-a)<step)&&$('#bg .m_six').find('.num2').css('display')=='none'){
		       		$('.moveBg').find('.num2').stop(true).fadeOut();
		       		$('#bg .m_six').find('.num2').stop(true).fadeIn();
		       	}else if((Math.abs(moveBgL-c)<step)&&$('#bg .m_eight').find('.num2').css('display')=='none'){
		       		$('.moveBg').find('.num2').stop(true).fadeOut();
		       		$('#bg .m_eight').find('.num2').stop(true).fadeIn();
		       	}else if((Math.abs(moveBgL-ry)<step)&&$('#bg .m_ry').find('.num2').css('display')=='none'){
		       		$('.moveBg').find('.num2').stop(true).fadeOut();
		       		$('#bg .m_ry').find('.num2').stop(true).fadeIn();
		       	}
		       }else{
		       	return;
		       }
		    }
	} 
})