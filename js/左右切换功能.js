//后一张
			function nextFun(){
				index++;
				if(index>5){index=0};
				indextwo=index-1;
				if(indextwo<0){indextwo=5};
				$('.popupBox div.setPopup').eq(indextwo).stop(true,true).fadeOut().css({
					'transform': 'scale(0.5,0.5)',
					'-webkit-transform': 'scale(0.5,0.5)'
				});
				$('.popupBox div.setPopup').eq(index).stop(true,true).fadeIn().css({
					'transform': 'scale(1,1)',
					'-webkit-transform': 'scale(1,1)'
				});
				if($('.popupBox div.setPopup').eq(index).find('.scroll_container').length==0){
					/*滚动条*/
					scrollbar($('.popupBox div.setPopup').eq(index).children('.detailed'),0)
				}
				$('.carLights .littleButton span').eq(indextwo).children('img').attr('src','images/littleButtonOff.png');
				$('.carLights .littleButton span').eq(index).children('img').attr('src','images/littleButtonOn.png');};
			//前一张
			//function prveFun(){
				index--;
				if(index<0){index=5}
				indextwo=index+1;
				if(indextwo>5){indextwo=0};
				$('.carLights .popupBox div.setPopup').eq(indextwo).stop(true,true).fadeOut().css({
					'transform': 'scale(0.5,0.5)',
					'-webkit-transform': 'scale(0.5,0.5)'
				});
				$('.carLights .popupBox div.setPopup').eq(index).stop(true,true).fadeIn().css({
					'transform': 'scale(1,1)',
					'-webkit-transform': 'scale(1,1)'
				});
				if($('.popupBox div.setPopup').eq(index).find('.scroll_container').length==0){
					/*滚动条*/
					scrollbar($('.popupBox div.setPopup').eq(index).children('.detailed'),0)
				}
				$('.carLights .littleButton span').eq(indextwo).children('img').attr('src','images/littleButtonOff.png');
				$('.carLights .littleButton span').eq(index).children('img').attr('src','images/littleButtonOn.png');
			//};











			$('.carLights .littleButton span').eq(o).siblings().children('img').attr('src','images/littleButtonOff.png')
			$('.carLights .littleButton span').eq(o).children('img').attr('src','images/littleButtonOn.png');

			//左右切换
			//$('.carLights .popup .next').click(nextFun);
			//$('.carLights .popup .prve').click(prveFun);

				$('.ohistory .littleButton span').eq(o).children('img').attr('src','images/littleButtonOff.png');

				for(var i=0;i<$('.popupBox div').length;i++){
					$('.carLights .littleButton span').eq(i).children('img').attr('src','images/littleButtonOff.png');
				}
				$('.carLights .popup .littleButton').css('display','none');
				$('.carLights .popup .bigButton').css('display','none');
								
								$('.carLights .popup .littleButton').fadeIn();
								$('.carLights .popup .bigButton').fadeIn();
					//左右箭头
					$('.carLights .popup .prve').css('left',-$('.carLights .popup .bigButton').width()+'px');
					$('.carLights .popup .next').css('right',-$('.carLights .popup .bigButton').width()+'px');
					$('.carLights .popup .bigButton').css('top',parseInt($('.carLights .popup').css('padding-bottom'))/2-($('.carLights .popup .bigButton').height()/2)+'px');
			$('.carLights .popup .next').unbind();
			$('.carLights .popup .prve').unbind();
			$('.carLights .popup .littleButton').fadeOut();
			$('.carLights .popup .bigButton').fadeOut();
				$('.carLights .littleButton span').eq(o).children('img').attr('src','images/littleButtonOff.png');
			$('.ohistory .popup .next').unbind();
			$('.ohistory .popup .prve').unbind();
			$('.ohistory .popup .littleButton').fadeOut();
			$('.ohistory .popup .bigButton').fadeOut();
			//左右箭头
					$('.ohistory .popup .prve').css('left',-$('.ohistory .popup .bigButton').width()+'px');
					$('.ohistory .popup .next').css('right',-$('.ohistory .popup .bigButton').width()+'px');
					$('.ohistory .popup .bigButton').css('top',parseInt($('.ohistory .popup').css('padding-bottom'))/2-($('.ohistory .popup .bigButton').height()/2)+'px');
					$('.ohistory .popup .littleButton').css('left',($('.ohistory .popup').width()/2)-($('.ohistory .popup .littleButton').width()/2)+'px');	
					//左右箭头
					$('.ohistory .popup .prve').css('left',-$('.ohistory .popup .bigButton').width()+'px');
					$('.ohistory .popup .next').css('right',-$('.ohistory .popup .bigButton').width()+'px');
					$('.ohistory .popup .bigButton').css('top',parseInt($('.ohistory .popup').css('padding-bottom'))/2-($('.ohistory .popup .bigButton').height()/2)+'px');

								$('.ohistory .popup .littleButton').fadeIn();
								$('.ohistory .popup .bigButton').fadeIn();
								$('.ohistory .littleButton span').eq(n).siblings().children('img').attr('src','images/littleButtonOff.png');
								$('.ohistory .littleButton span').eq(n).children('img').attr('src','images/littleButtonOn.png');
			//左右切换
			$('.ohistory .popup .next').click(nextFun);
			$('.ohistory .popup .prve').click(prveFun);//后一张
			function nextFun(){
				index2++;
				if(index2>14){index2=0};
				indextwo2=index2-1;
				if(indextwo2<0){indextwo2=14};
				$('.ohistory .popupBox2 div.setPopup').eq(indextwo2).stop(true,true).fadeOut().css({
					'transform': 'scale(0.5,0.5)',
					'-webkit-transform': 'scale(0.5,0.5)'
				});
				$('.ohistory .popupBox2 div.setPopup').eq(index2).stop(true,true).fadeIn().css({
					'transform': 'scale(1,1)',
					'-webkit-transform': 'scale(1,1)'
				});
				if($('.ohistory .popupBox2 div.setPopup').eq(index2).find('.scroll_container').length==0){
					/*滚动条*/
					scrollbar($('.ohistory .popupBox2 div.setPopup').eq(index2).children('.detailed'),0)
				}
				$('.ohistory .littleButton span').eq(indextwo2).children('img').attr('src','images/littleButtonOff.png');
				$('.ohistory .littleButton span').eq(index2).children('img').attr('src','images/littleButtonOn.png');
			};
			//前一张
			function prveFun(){
				index2--;
				if(index2<0){index2=14}
				indextwo2=index2+1;
				if(indextwo2>14){indextwo2=0};
				$('.ohistory .popupBox2 div.setPopup').eq(indextwo2).stop(true,true).fadeOut().css({
					'transform': 'scale(0.5,0.5)',
					'-webkit-transform': 'scale(0.5,0.5)'
				});
				$('.ohistory .popupBox2 div.setPopup').eq(index2).stop(true,true).fadeIn().css({
					'transform': 'scale(1,1)',
					'-webkit-transform': 'scale(1,1)'
				});
				if($('.ohistory .popupBox2 div.setPopup').eq(index2).find('.scroll_container').length==0){
					/*滚动条*/
					scrollbar($('.popupBox2 div.setPopup').eq(index2).children('.detailed'),0)
				}
				$('.ohistory .littleButton span').eq(indextwo2).children('img').attr('src','images/littleButtonOff.png');
				$('.ohistory .littleButton span').eq(index2).children('img').attr('src','images/littleButtonOn.png');
			}
				$('.ohistory .popup .littleButton').css('display','none');
				$('.ohistory .popup .bigButton').css('display','none');
				for(var i=0;i<$('.ohistory .popupBox2 div').length;i++){
					$('.ohistory .littleButton span').eq(i).children('img').attr('src','images/littleButtonOff.png');
				}
				<!-- 左右切换 -->
					<!-- <a javascript:void(0) class="prve bigButton">
						<img src="images/prve.png">
					</a>
					<a javascript:void(0) class="next bigButton">
						<img src="images/next.png">
					</a> -->
					<!-- 小按钮 -->
					<div class="littleButton">
						<span data-index="1">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="2">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="3">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="4">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="5">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="6">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="7">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="8">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="9">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="10">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="11">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="12">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="13">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="14">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
						<span data-index="15">
							<img src="images/littleButtonOff.png" width="5%">
						</span>
					</div>
					<!-- 左右切换
					<a javascript:void(0) class="prve bigButton">
						<img src="images/prve.png">
					</a>
					<a javascript:void(0) class="next bigButton">
						<img src="images/next.png">
					</a> -->
					<!-- 小按钮 -->
					<!-- <div class="littleButton">
						<span data-index="1">
							<img src="images/littleButtonOff.png" width="13%">
						</span>
						<span data-index="2">
							<img src="images/littleButtonOff.png" width="13%">
						</span>
						<span data-index="3">
							<img src="images/littleButtonOff.png" width="13%">
						</span>
						<span data-index="4">
							<img src="images/littleButtonOff.png" width="13%">
						</span>
						<span data-index="5">
							<img src="images/littleButtonOff.png" width="13%">
						</span>
						<span data-index="6">
							<img src="images/littleButtonOff.png" width="13%">
						</span>
					</div> -->







					$('.m6 .sstar').css('display','none');
					setTimeout(function(){
				$('.m6 .sstar').fadeIn(700,startStar);
			},1000)	