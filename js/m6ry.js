//字体

$(function(){
	(function(){
		var buttonIndex=1;
		var developFlag=true;
		loadImage(['./images/head.png','./images/logo.png','./images/footbutton.png','./images/footbutton2.png','./images/footbutton3.png','./images/m6rycar.png','./images/m6rycover.png','./images/m6rycar2.png','./images/m6rycar3.png'], function(){
			go();
		});
		function go(){
			if(navigator.userAgent.match(/Android/i) || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1){
				if($(window).width()<$(window).height()){
					$('#cover').css('display','block');
				}else{
					setTimeout(develop,500);
				}
				//判断手机横竖屏状态：
				function hengshuping(){
				if(window.orientation==180||window.orientation==0){
					$('#cover').css('display','block');
				}
				if(window.orientation==90||window.orientation==-90){
					$('#cover').css('display','none');
					if(buttonIndex==1){
						//重置车型亮点
						carHighLightsResize();
						//车主故事重置
						ownerStoryResize();
						//发展历程重置
						developResize();
						//动画
						develop();
					}else if(buttonIndex == 2){
						//发展历程重置
						developResize();
						//车主故事重置
						ownerStoryResize();
						carHighLightsResize();
						carHighLights();
					}else if(buttonIndex == 3){
						//发展历程重置
						developResize();
						carHighLightsResize();
						ownerStoryResize();
						//动画
						ownerStory();
					}
					}
				}
				window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
			}else{
				setTimeout(develop,500);
			}
		}
		//发展历程按钮
		$('.develop').click(function(){
			//图片已是对应图片
			if(!(/footbutton\.png/gi).test($('.foot').css('background'))&&buttonIndex!=1){
				$('.foot').css({
					"background":"url('./images/footbutton.png') center no-repeat",
					"background-size":'cover'

				})
				//重置车型亮点
				carHighLightsResize();
				//车主故事重置
				ownerStoryResize();
				//发展历程重置
				developResize();
				//动画
				develop();
				buttonIndex=1;
			}
		})
		//车型亮点按钮
		$('.lights').click(function(){
			//图片已是对应图片
			if(!(/footbutton2\.png/gi).test($('.foot').css('background'))&&buttonIndex!=2){
				$('.foot').css({
					"background":"url('./images/footbutton2.png') center no-repeat",
					"background-size":'cover'
				})
				//发展历程重置
				developResize();
				//车主故事重置
				ownerStoryResize();
				carHighLights();
				buttonIndex=2;
			}
		});
		//车主故事
		$('.history').click(function(){
			//图片已是对应图片
			if(!(/footbutton3\.png/gi).test($('.foot').css('background'))&&buttonIndex!=3){
				$('.foot').css({
					"background":"url('./images/footbutton3.png') center no-repeat",
					"background-size":'cover'
				})
				//发展历程重置
				developResize();
				carHighLightsResize();
				//动画
				ownerStory();
				buttonIndex=3;
			}
		})
		//车型亮点以及车主故事定位数组
		//背景位置信息记录

		var postwo=[];
		//车型亮点
		var pos=[];
				pos[0]={
					biuPx:'100%',
					biuPy:0
				}
				pos[1]={
					biuPx:'100%',
					biuPy:'100%'
				}
				pos[2]={
					biuPx:'100%',
					biuPy:'100%'
				}
				pos[3]={
					biuPx:'-100%',
					biuPy:'100%'
				}
				pos[4]={
					biuPx:'-100%',
					biuPy:'-100%'
				}
				pos[5]={
					biuPx:'100%',
					biuPy:'-100%'
				};
				//背景位置信息记录
				postwo[0]={
					biuPx:'100%',
					biuPy:0
				}
				postwo[1]={
					biuPx:'100%',
					biuPy:'-100%'
				}
				postwo[2]={
					biuPx:'100%',
					biuPy:'100%'
				}
				postwo[3]={
					biuPx:'-100%',
					biuPy:'100%'
				}
				postwo[4]={
					biuPx:'-100%',
					biuPy:'100%'
				}
				postwo[5]={
					biuPx:'-100%',
					biuPy:'100%'
				}
				postwo[6]={
					biuPx:'-100%',
					biuPy:'-100%'
				}
				postwo[7]={
					biuPx:'-100%',
					biuPy:'-100%'
				}
				postwo[8]={
					biuPx:'-100%',
					biuPy:'-100%'
				}
		//发展历程重置
		function developResize(){
			$('.m6ry').fadeOut();
			$('.m6rybg').css({
				'transform':'scale(0)',
				'-web-transform':'scale(0)',
				'-o-transform':'scale(0)',
			});
			$('.line').stop(true).css('width','0');
			$('.m6ry .word').stop().css('display','none');
			$('.m6ry ul').unbind();
			$('.m6ry .sstar').css('display','none');
		}
		//发展历程
		function develop(){
			$('.m6ry .sstar').css('display','none');
			developFlag=false;
			$('.m6ry').fadeIn();
			$('.m6rybg').css({
				'transform':'scale(1)',
				'-web-transform':'scale(1)',
				'-o-transform':'scale(1)',
			});
			setTimeout(function(){
				$('.m6ry .sstar').fadeIn(700,startStar);
			},1000)			
			//定位
			$('.m6ry').css('left',($('.content_body').width()/2)-($('.m6ry').width()/2)+'px');
			$('.m6ry').css('top',($('.content_body').height()/2)-(parseInt($('.m6ry').css('paddingBottom'))/2)+7+'px');
			$('.m6ry ul').css('top',(parseInt($('.content_body .m6ry').css('paddingBottom'))/2)-(parseInt($('.m6ry ul').css('height'))/2)+'px');
			$(window).resize(function(){
				$('.m6ry').css('left',($('.content_body').width()/2)-($('.m6ry').width()/2)+'px');
				$('.m6ry').css('top',($('.content_body').height()/2)-(parseInt($('.m6ry').css('paddingBottom'))/2)+7+'px');
				$('.m6ry ul').css('top',(parseInt($('.content_body .m6ry').css('paddingBottom'))/2)-(parseInt($('.m6ry ul').css('height'))/2)+'px');
			})
			var attr='';
			var ssFlag=true;
			$('.m6ry ul').delegate("li","mouseenter",function(){
				if($(this).children('span.word').css('display')=='none'){
					attr=$(this).children('span.sstar').attr('style');
					$(this).children('span.sstar').removeAttr('style');
					$(this).children('span.word').fadeIn();	
				}else{
					ssFlag=false;
				}
			})
			$('.m6ry ul').delegate("li","mouseleave",function(){
					if(ssFlag){
						$(this).children('span.sstar').attr('style',attr);
						$(this).children('span.word').fadeOut();
					}else{
						ssFlag=true;
					}	
			})
			setTimeout(function(){
				biu();
			},1500)
			//星星闪闪亮
			function startStar(){
				var sstar=$('.m6ry span.sstar');
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
				var objList=[];
				var line=$('.line');
				line.animate({
					'width':'100%'
				},{
				      duration:3500,
				      easing:'linear',
				      step: function(){
				        	var that = this;
				       	$('.m6ry span.sstar').each(function(index,ele) {
				           		if(parseInt(line.css('width'))>=5+parseInt($(ele).css('left'))){
				           			$(ele).removeAttr('style');
				           			$(ele).next().fadeIn();
				           		}
				        	});
				        },
				        complete: function() {
				      		$('.m6ry ul').unbind();
				      		developFlag=true;
				        }
				})
			}
		}
		//车型亮点重置
		function carHighLightsResize(){
			$('.carLights').stop(true,true).fadeOut();
			$('.m6ry2').stop(true).css({
				'transform':'scale(0)',
				'-web-transform':'scale(0)',
				'-o-transform':'scale(0)',
			});
			$('.carLights li').unbind();
			$('.carLights .popupBox  div.setPopup .close').unbind();
			$('.carLights li').children('.sstar').unbind();
			$('.carLights span.sstar').css('display','none');
			$('.carLights li').children('span.wordt').unbind();
			$('.carLights li .wordt').css('display','none');
			$('.carLights li').each(function(i){
				$(this).children('.linet').find('.moveBg').fadeTo(100,0).css({
					'top':pos[i].biuPy,
					'left':pos[i].biuPx
				})
			});
			for(var o=0;o<$('.popupBox div').length;o++){
				$('.popupBox div.setPopup').eq(o).fadeOut().css({
					'transform': 'scale(1,1)',
					'-webkit-transform': 'scale(1,1)'
				});
			}
		}
		//车型亮点
		function carHighLights(){
			$('.carLights span.sstar').css('display','none');
			$('.carLights').fadeIn();
			$('.m6ry2').css({
				'transform':'scale(1)',
				'-webkit-transform':'scale(1)',
				'-o-transform':'scale(1)'
			});
			setTimeout(function(){
				startStar();
			},1000);
			setPosition();
			//星星闪闪亮
			function startStar(){
				var sstar=$('.carLights span.sstar');
				var list=[];
				var t=0;
				for(var i=0;i<sstar.length;i++){
					list.push(sstar.eq(i));
				}
				$('.carLights span.sstar').stop(true).fadeIn(500,function(){star(list)})
				function star(arg){
					for(var i=0;i<arg.length;i++){
						t=parseInt(Math.random()*2+1);
						arg[i].css({
						'animation':'star '+t+'s infinite alternate',
						'-moz-animation':'star '+t+'s infinite alternate',
						'-webkit-animation':'star '+t+'s infinite alternate',
						'-o-animation':'star '+t+'s alternate',
						})
					}
				}

			}
			//定位
			function setPosition(){
				$('.ohistory li').each(function(i){
					$(this).children('.linet3').find('.moveBg3').fadeTo(100,0).css({
						'top':postwo[i].biuPy,
						'left':postwo[i].biuPx
					})
				});
				function set(){
					//定位
					$('.carLights').css({
						'top':($('.content_body').height()/2)-(parseInt($('.carLights').css('paddingBottom'))/2)+7+'px',
						'left':($('.content_body').width()/2)-($('.carLights').width()/2)+'px'
					});
					//弹出框
					$('.carLights .popup').css({
						'left':($('.carLights').width()/2)-($('.carLights .popup').width()/2)+'px',
						'top':parseInt($('.carLights').css('paddingBottom'))/2-20-parseInt($('.carLights .popup').css('paddingBottom'))/2+'px'
					})
					$('.carLights .popup .littleButton').css('left',($('.carLights .popup').width()/2)-($('.carLights .popup .littleButton').width()/2)+'px');					
					//文字定位
					$('.carLights .wordt').eq(0).css({
						'top':parseInt($('.carLights .linet').eq(0).css('top'))+'px',
						'left' :(parseInt($('.carLights .linet').eq(0).css('left'))-parseInt($('.carLights .wordt').eq(0).innerWidth()))+'px'
				 	});
			 		$('.carLights .wordt').eq(1).css({
			 			'top':(parseInt($('.carLights .linet').eq(1).css('top'))-parseInt($('.carLights .wordt').eq(1).innerHeight()))+'px',
			 			'left':(parseInt($('.carLights .linet').eq(1).css('left'))-parseInt($('.carLights .wordt').eq(1).innerWidth())/2)+'px'
			 	 	});
			 	 	$('.carLights .wordt').eq(2).css({
						'top':(parseInt($('.carLights .linet').eq(2).css('top'))-parseInt($('.carLights .wordt').eq(2).innerHeight()))+'px',
						'left':(parseInt($('.carLights .linet').eq(2).css('left'))-parseInt($('.carLights .wordt').eq(2).innerWidth()))+'px'
				 	});
			 		$('.carLights .wordt').eq(3).css({
			 			'top':parseInt($('.carLights .linet').eq(3).css('top'))-parseInt($('.carLights .linet').eq(3).innerHeight())/2+'px',
			 			'left':(parseInt($('.carLights .linet').eq(3).css('left'))+parseInt($('.carLights .linet').eq(3).innerWidth()))+'px'
			 	 	});
			 	 	$('.carLights .wordt').eq(4).css({
						'top':(parseInt($('.carLights .linet').eq(4).css('top'))+parseInt($('.carLights .linet').eq(4).innerHeight()))+'px',
						'left':(parseInt($('.carLights .linet').eq(4).css('left'))+parseInt($('.carLights .linet').eq(4).innerWidth())/2)+'px'
				 	});
			 		$('.carLights .wordt').eq(5).css({
			 			'top':(parseInt($('.carLights .linet').eq(5).css('top'))+parseInt($('.carLights .linet').eq(5).innerHeight()))+'px',
			 			'left':(parseInt($('.carLights .linet').eq(5).css('left'))-parseInt($('.carLights .wordt').eq(5).innerWidth())/2)+'px'
			 	 	});
				}
				set();
				$(window).resize(function(){
					set();	
				});
				
			}
			//hover
			var attr=[];
			var timers=[];
			//hover
			$('.carLights li').each(function(i){
				timers[i]=null;
				$(this).children('span.wordt').mouseenter(durOn);
				$(this).mouseleave(off);
			});
			
			//弹出详情页
			var index=0;   //存储当前值
			$('.carLights li').each(function(i){
				$('.carLights li').eq(i).children('.sstar').mouseenter(function(){
					on($(this).parent('li'));
				})
			})
			$('.carLights li').each(function(i){
				$('.carLights li').eq(i).click(function(){
					if($(this).children('.wordt').css('display')== 'none'){
						return;
					}else{
						for(var o=0;o<$('.popupBox div').length;o++){
							if($('.popupBox div.setPopup').eq(o).attr('data-index') == $(this).children('.wordt').attr('data-index')){
								$('.carLights .popupBox div.setPopup').eq(o).fadeIn().css({
									'transform': 'scale(1,1)',
									'-webkit-transform': 'scale(1,1)'
								});
								//导航遮盖
								$('#bg .content').css('z-index','35');
								if($('.popupBox div.setPopup').eq(o).find('h4').length==0){
									$('.popupBox div.setPopup').eq(o).prepend('<h4>'+($(this).children('.wordt').children('p').text())+'</h4>');
								}
								index=o;
								if(navigator.userAgent.match(/Android/i) || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1){
									off.call($('.carLights li'))
								}
								if($('.popupBox div.setPopup').eq(o).find('.scroll_container').length==0){
									/*滚动条*/
									scrollbar($('.popupBox div.setPopup').eq(o).children('.detailed'),1)
								}
							}else{
								$('.popupBox div.setPopup').eq(o).fadeOut();
							}
						}
					}
				})
			});
			//关闭详情页
			$('.carLights .popupBox  div.setPopup .close').click(function(){
				$(this).parent('.carLights .popupBox div.setPopup').fadeOut(200).css({
					'transform': 'scale(0.5,0.5)',
					'-webkit-transform': 'scale(0.5,0.5)'
				});
				//导航遮盖
				$('#bg .content').css('z-index','36');
			})
			//on的过度函数
			function durOn(){
				var they=$(this).parent('li');
				on(they)
			}
			//hover
			function on(that){
				//存星星
				if(timers[that.index()]){
					clearTimeout(timers[that.index()]);
					timers[that.index()]=null;
					return;
				}
				if(!attr[that.index()]){
					attr[that.index()]=that.children('.sstar').attr('style');
				};

				that.children('.sstar').removeAttr('style').css('opacity',1);
				//射线
				that.stop(true,true).find('.moveBg').animate({
					'opacity':1,
					'left':0,
					'top':0
				},130,function(){
					that.find('.wordt').fadeIn(200);
				});
			}
			var m=0;
			function off(){
				//星星亮
				var that=$(this);
				var n=that.index();
				if(timers[n]){return;}
				timers[n]=setTimeout(function(){
					that.children('.sstar').attr('style',attr[n]);
					//射线文字消失
					that.find('.moveBg').stop(true,true).fadeTo(150,0,function(){
						that.find('.moveBg').css({
							'left':pos[n].biuPx,
							'top':pos[n].biuPy
						});
					});
					that.find('.wordt').stop(true,true).fadeOut(50,function(){
						clearTimeout(timers[n]);
						timers[n]=null;
					});
				},500);
			}
		}
		
		//车主故事重置
		function ownerStoryResize(){
			$('.ohistory span.sstar3').css('display','none');
			$('.m6ry3').stop(true).css({
				'transform':'scale(0)',
				'-web-transform':'scale(0)',
				'-o-transform':'scale(0)',
			});
			$('.ohistory').stop(true,true).fadeOut();
			$('.m6ry3').stop(true).css({
				'transform':'scale(0)',
				'-web-transform':'scale(0)',
				'-o-transform':'scale(0)',
			});
			$('.ohistory li .wordt3').css('display','none');
			$('.ohistory li').children('.sstar3').unbind();
			$(this).children('span.wordt3').unbind();
			$('.ohistory .popupBox2  div.setPopup .close').unbind();
			$('.ohistory li').unbind();
			$('.ohistory li').children('span.wordt3').unbind();
			$('.ohistory li').each(function(i){
				$(this).children('.linet3').find('.moveBg3').fadeTo(100,0).css({
					'top':postwo[i].biuPy,
					'left':postwo[i].biuPx
				})
			});
			for(var o=0;o<$('.popupBox2 div').length;o++){
				$('.popupBox2 div.setPopup').eq(o).fadeOut().css({
					'transform': 'scale(1,1)',
					'-webkit-transform': 'scale(1,1)'
				});
			}
		}
		//车主故事
		function  ownerStory(){
			$('.ohistory span.sstar3').css('display','none');
			$('.ohistory').fadeIn();
			$('.m6ry3').css({
				'transform':'scale(1)',
				'-webkit-transform':'scale(1)',
				'-o-transform':'scale(1)'
			});
			setPosition();
			setTimeout(function(){
				startStar();
			},1000);
			//星星闪闪亮
			function startStar(){
				var sstar=$('.ohistory span.sstar3');
				var list=[];
				var t=0;
				for(var i=0;i<sstar.length;i++){
					list.push(sstar.eq(i));
				}
				sstar.stop().fadeIn(500,function(){star(list)})
				function star(arg){
					for(var i=0;i<arg.length;i++){
						t=parseInt(Math.random()*2+1);
						arg[i].css({
						'animation':'star '+t+'s infinite alternate',
						'-moz-animation':'star '+t+'s infinite alternate',
						'-webkit-animation':'star '+t+'s infinite alternate',
						'-o-animation':'star '+t+'s alternate',
						})
					}
				}

			}
			function setPosition(){
				$('.ohistory li').each(function(i){
					$(this).children('.linet3').find('.moveBg3').fadeTo(100,0).css({
						'top':postwo[i].biuPy,
						'left':postwo[i].biuPx
					})
				});
				set();
				function set(){
					//定位
					$('.ohistory').css({
						'left':($('.content_body').width()/2)-($('.ohistory').width()/2)+'px',
						'top':($('.content_body').height()/2)-(parseInt($('.ohistory').css('paddingBottom'))/2)+7+'px'

					});
					//弹出框
					//弹出框
					$('.ohistory .popup').css({
						'left':($('.ohistory').width()/2)-($('.ohistory .popup').width()/2)+'px',
						'top':parseInt($('.ohistory').css('paddingBottom'))/2-20-parseInt($('.ohistory .popup').css('paddingBottom'))/2+'px'
					})
					$('.ohistory .popup .littleButton').css('left',($('.ohistory .popup').width()/2)-($('.ohistory .popup .littleButton').width()/2)+'px');	
									
					//文字定位
					$('.ohistory .wordt3').eq(0).css({
						'top':parseInt($('.ohistory .linet3').eq(0).css('top'))+'px',
						'left' :(parseInt($('.ohistory .linet3').eq(0).css('left'))-parseInt($('.ohistory .wordt3').eq(0).innerWidth()))+'px'
				 	});
			 		$('.ohistory .wordt3').eq(1).css({
			 			'top':(parseInt($('.ohistory .linet3').eq(1).css('top'))+parseInt($('.ohistory .linet3').eq(1).innerHeight()))+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(1).css('left'))-parseInt($('.ohistory .wordt3').eq(1).innerWidth())/2)+'px'
			 	 	});
			 	 	$('.ohistory .wordt3').eq(2).css({
						'top':(parseInt($('.ohistory .linet3').eq(2).css('top'))-parseInt($('.ohistory .wordt3').eq(2).innerHeight()))+'px',
						'left':(parseInt($('.ohistory .linet3').eq(2).css('left'))-parseInt($('.ohistory .wordt3').eq(2).innerWidth()))+'px'
				 	});
			 		$('.ohistory .wordt3').eq(3).css({
			 			'top':parseInt($('.ohistory .linet3').eq(3).css('top'))-parseInt($('.ohistory .linet3').eq(3).innerHeight())/2+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(3).css('left'))+parseInt($('.ohistory .linet3').eq(3).innerWidth()))+'px'
			 	 	});
			 	 	$('.ohistory .wordt3').eq(4).css({
						'top':(parseInt($('.ohistory .linet3').eq(4).css('top'))-parseInt($('.ohistory .wordt3').eq(4).innerHeight()))+'px',
						'left':(parseInt($('.ohistory .linet3').eq(4).css('left'))+parseInt($('.ohistory .linet3').eq(4).innerWidth())/2)+'px'
				 	});
			 		$('.ohistory .wordt3').eq(5).css({
			 			'top':(parseInt($('.ohistory .linet3').eq(5).css('top'))-parseInt($('.ohistory .wordt3').eq(5).innerHeight()))+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(5).css('left')))+'px'
			 	 	});
			 	 	$('.ohistory .wordt3').eq(6).css({
			 			'top':(parseInt($('.ohistory .linet3').eq(6).css('top'))+parseInt($('.ohistory .linet3').eq(6).innerHeight()))+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(6).css('left'))+parseInt($('.ohistory .linet3').eq(6).innerWidth()))+'px'
			 	 	});
			 	 	$('.ohistory .wordt3').eq(7).css({
			 			'top':(parseInt($('.ohistory .linet3').eq(7).css('top'))+parseInt($('.ohistory .linet3').eq(7).innerHeight()))+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(7).css('left'))+parseInt($('.ohistory .linet3').eq(7).innerWidth()))+'px'
			 	 	});
			 	 	$('.ohistory .wordt3').eq(8).css({
			 			'top':(parseInt($('.ohistory .linet3').eq(8).css('top'))+parseInt($('.ohistory .linet3').eq(8).innerHeight()))+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(8).css('left'))+parseInt($('.ohistory .linet3').eq(8).innerWidth()))+'px'
			 	 	});
			 	 	$('.ohistory .wordt3').eq(9).css({
			 			'top':(parseInt($('.ohistory .linet3').eq(9).css('top'))+parseInt($('.ohistory .linet3').eq(9).innerHeight()))+'px',
			 			'left':(parseInt($('.ohistory .linet3').eq(9).css('left'))+parseInt($('.ohistory .linet3').eq(9).innerWidth()))+'px'
			 	 	});
				}
				$(window).resize(function(){
					set();
				})
				
			}
			//hover
			var attr2=[];
			var timers2=[];
			//hover
			$('.ohistory li').each(function(i){
				timers2[i]=null;
				$(this).children('span.wordt3').mouseenter(durOn);
				$(this).mouseleave(off);
			});
			
			//弹出详情页
			var index2=0;   //存储当前值
			//放上去
			$('.ohistory li').each(function(i){
				$('.ohistory li').eq(i).children('.sstar3').mouseenter(function(){
					on($(this).parent('li'));
				})
			});
			$('.ohistory li').each(function(i){
				$('.ohistory li').eq(i).click(function(){
					if($(this).children('.wordt3').css('display')== 'none'){
						return;
					}else{
						for(var n=0;n<$('.popupBox2 div').length;n++){
							if($('.popupBox2 div.setPopup').eq(n).attr('data-index') == $(this).children('.wordt3').attr('data-index')){
								$('.popupBox2 div.setPopup').eq(n).fadeIn().css({
									'transform': 'scale(1,1)',
									'-webkit-transform': 'scale(1,1)'
								});
								//导航遮盖
								$('#bg .content').css('z-index','35');
								if($('.popupBox2 div.setPopup').eq(n).find('h4').length==0){
									$('.popupBox2 div.setPopup').eq(n).prepend('<h4>'+($(this).children('.wordt3').children('p').text())+'</h4>');
								}
								index2=n;
								if(navigator.userAgent.match(/Android/i) || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1){
									off.call($('.ohistory li'))
								}
								//滚动条定位
								if($('.ohistory .popupBox2 div.setPopup').eq(n).find('.scroll_container').length==0){
									/*滚动条*/
									scrollbar($('.ohistory .popupBox2 div.setPopup').eq(n).children('.detailed'),1)
								}
							}else{
								$('.ohistory .popupBox2 div.setPopup').eq(n).fadeOut();
							}
						}
					}
				})
			});
			
			//关闭详情页
			$('.ohistory .popupBox2  div.setPopup .close').click(function(){
				$(this).parent('.ohistory .popupBox2 div.setPopup').fadeOut(200).css({
					'transform': 'scale(0.5,0.5)',
					'-webkit-transform': 'scale(0.5,0.5)'
				});
				//导航遮盖
				$('#bg .content').css('z-index','36');
			})
			//on的过度函数
			function durOn(){
				var the=$(this).parent('li');
				on(the)
			}
			//hover
			function on(that){
				//存星星
				if(timers2[that.index()]){
					clearTimeout(timers2[that.index()]);
					timers2[that.index()]=null;
					return;
				}
				if(!attr2[that.index()]){
					attr2[that.index()]=that.children('.sstar3').attr('style');
				};
				that.children('.sstar3').removeAttr('style').css('opacity',1);
				//射线
				that.stop(true,true).find('.moveBg3').animate({
					'opacity':1,
					'left':0,
					'top':0
				},130,function(){
					that.find('.wordt3').fadeIn(200);
				});
			}
			var m=0;
			function off(){
				//星星亮
				var that=$(this);
				var n=that.index();
				if(timers2[n]){return;}
				timers2[n]=setTimeout(function(){
					that.children('.sstar3').attr('style',attr2[n]);
					//射线文字消失
					that.find('.moveBg3').stop(true,true).fadeTo(150,0,function(){
						that.find('.moveBg3').css({
							'left':postwo[n].biuPx,
							'top':postwo[n].biuPy
						});
					});
					that.find('.wordt3').stop(true,true).fadeOut(60,function(){
						clearTimeout(timers2[n]);
						timers2[n]=null;
					});
				},500);
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