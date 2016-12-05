// JavaScript Document

var isOLD=(navigator.appVersion.indexOf("MSIE 6")!=-1  || navigator.appVersion.indexOf("MSIE 7")!=-1  || navigator.appVersion.indexOf("MSIE 8")!=-1)?true:false;
var isIE6=(navigator.appVersion.indexOf("MSIE 6")!=-1)?true:false;
function handheld() {
	var isMobile = /android|blackberry|webos|windows phone|iphone|ipod|ipad/.test(navigator.userAgent.toLowerCase());
	if (isMobile) {
		return true;
	}
	return false;
}


var ishandheld=(!handheld())?false:true;
/*模拟垂直滚动条
栏目识别字串
手机是否强制使用 1为强制使用*/

/*.scrollbar{position:absolute;right:10px;top:30px;bottom:30px;width:5px;background:#CCC;font-size:0;line-height:0;overflow:hidden;} //滚动条可自定义整体高度
.scrollbar .scrollbar_tt,.scrollbar .scrollbar_bb{ height:5px; background:#000; overflow:hidden;} 
.scrollbar .scrollbar_m{ height:0; overflow:hidden; background:#999; position:relative;} //滑块高度设为0为自动高度，具体数值为固定高度*/

var t_i=-1;
var pjs=[];
function scrollbar(t_n,t_t){
	t_t=(t_t!=undefined)?t_t:0;
	if (ishandheld && t_t==0) {
		t_n.css("overflow","auto");
	} else {
		t_n.each(function(){
			t_i++;
			pjs[t_i]=new Array();
			pjs[t_i][0]="scrollbar";
			if ($(this).attr("id")==undefined) {$(this).attr("id","pjs_"+t_i);}
			pjs[t_i][1]=$(this).attr("id");/*栏目ID*/
			/*pjs[t_i][2]; 延时动作存储 */
			pjs[t_i][3]=0;/*拖动状态，1为正在拖动*/
			pjs[t_i][4]=0;/*拖动初始鼠标值*/
			pjs[t_i][5]=0;/*拖动初始滚动值*/
			$(this).attr("data-scrollbar",t_i).css({"position":"relative","overflow":"visible"}).wrapInner("<div class=\"scroll_content\" style=\"position:relative;overflow:hidden;\">").wrapInner("<div class=\"scroll_container\" style=\"position:relative;height:100%;*width:100%;overflow:hidden;overflow-y:scroll;\">").wrapInner("<div style=\"position:relative;height:100%;overflow:hidden;\">").append("<div class=\"scrollbar\"><div class=\"scrollbar_tt\"></div><div class=\"scrollbar_mm\"><div class=\"scrollbar_m\"></div></div><div class=\"scrollbar_bb\"></div></div>");
			$(this).find(".scrollbar").css({"-moz-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","-khtml-user-select":"none","user-select":"none"}).bind("selectstart drag", function(){
				return false;
			});
			if (ishandheld) {$(this).find(".scroll_container").css("padding-right","24px");}
			$(this).find(".scroll_container").css("margin-right",($(this).find(".scroll_content").outerWidth(true)-$(this).find(".scroll_container").outerWidth()-1));
			if (isOLD){$(this).find(".scroll_container").css("padding-right",($(this).find(".scroll_container").innerWidth()-$(this).find(".scroll_content").outerWidth(true)));}
			//document.title=$(this).find(".scroll_content").outerWidth(true)+" , " +$(this).find(".scroll_container").innerWidth();

			if ($(this).height()< $(this).find(".scroll_content").height()) {
				$(this).find(".scrollbar").show();
				$(this).find(".scrollbar_mm").height($(this).find(".scrollbar").height()-$(this).find(".scrollbar_tt").innerHeight()-$(this).find(".scrollbar_bb").innerHeight());
				if ($(this).find(".scrollbar_m").height()==0) {
					$(this).find(".scrollbar_m").height(parseInt($(this).find(".scrollbar_mm").height()*$(this).height()/$(this).find(".scroll_content").height()));
					$(this).find(".scrollbar_m").css({"min-height":$(this).find(".scrollbar_mm").width(),"top":parseInt(($(this).find(".scrollbar_mm").height()-$(this).find(".scrollbar_m").height())*$(this).find(".scroll_container").scrollTop()/($(this).find(".scroll_content").height()-$(this).height()))});
				} else {
					/*$(this).find(".scrollbar_m").height($(this).find(".scrollbar_mm").width());*/
				}
			} else {
				$(this).find(".scrollbar").hide();
			}
			$(this).find(".scrollbar_bb").mousedown(function(){
				$(this).parents("[data-scrollbar]").find(".scroll_container").scrollTop($(this).parents("[data-scrollbar]").find(".scroll_container").scrollTop()+40);
				pjs[$(this).parents("[data-scrollbar]").attr("data-scrollbar")][2] = setInterval("scrollbar_go("+$(this).parents("[data-scrollbar]").attr("data-scrollbar")+",40)",200);
			}).bind("mouseup mouseout",function(){
				clearInterval(pjs[$(this).parent().parent().attr("data-scrollbar")][2]);
			});
			$(this).find(".scrollbar_tt").mousedown(function(){
				$(this).parents("[data-scrollbar]").find(".scroll_container").scrollTop($(this).parents("[data-scrollbar]").find(".scroll_container").scrollTop()-40);
				pjs[$(this).parents("[data-scrollbar]").attr("data-scrollbar")][2] = setInterval("scrollbar_go("+$(this).parents("[data-scrollbar]").attr("data-scrollbar")+",-40)",200);
			}).bind("mouseup mouseout",function(){
				clearInterval(pjs[$(this).parent().parent().attr("data-scrollbar")][2]);
			});
			if (ishandheld) {
				$(this).find(".scrollbar_mm").on("touchstart",function(e){
					$("body").css("overflow","hidden");
					i=$(this).parents("[data-scrollbar]").attr("data-scrollbar");
					$(this).parents("[data-scrollbar]").find(".scroll_content").css({"-moz-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","-khtml-user-select":"none","user-select":"none"});
					pjs[i][3]=1;
					pjs[i][4]=e.originalEvent.targetTouches[0].clientY;
					pjs[i][5]=$(this).parents("[data-scrollbar]").find(".scroll_container").scrollTop();
					$("body").on("touchmove.scrollbar",scrollbar_touchmove);
					$("body").on("touchend.scrollbar",scrollbar_touchend);
				});
			} else {
				$(this).find(".scrollbar_mm").mousedown(function(e){
					$(this).css("cursor","context-menu");
					i=$(this).parents("[data-scrollbar]").attr("data-scrollbar");
					$(this).parents("[data-scrollbar]").find(".scroll_content").css({"-moz-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","-khtml-user-select":"none","user-select":"none"}).bind("selectstart.scrollbar drag.scrollbar", function(){
						return false;
					});
					pjs[i][3]=1;
					pjs[i][4]=e.pageY;
					pjs[i][5]=$(this).parents("[data-scrollbar]").find(".scroll_container").scrollTop();
					$("body").bind("mousemove.scrollbar",scrollbar_mousemove);
					$("body").bind("mouseup.scrollbar",scrollbar_mouseup);
					$("body").bind("mouseleave.scrollbar",scrollbar_mouseup);
					$("iframe").bind("mouseenter.scrollbar",scrollbar_mouseup);
				});
			}
			$(this).find(".scroll_container").bind('DOMNodeInserted', function() { 
				scrollbar_reset($(this).parents("[data-scrollbar]"));
			}).scroll(function(){
				var _this=$(this).parents("[data-scrollbar]");
				_this.find(".scrollbar_m").css("top",parseInt((_this.find(".scrollbar_mm").height()-_this.find(".scrollbar_m").height())*$(this).scrollTop()/(_this.find(".scroll_content").height()-_this.height())));
			});
			$(this).find("img").each(function(){
				$(this).load(function(){
					scrollbar_reset($(this).parents("[data-scrollbar]"));
				});
			});
		});
		
		$(window).resize(function(){
			t_n.each(function(){
				scrollbar_reset($(this));
			});
		});
	}
}
function scrollbar_reset(_this) {
	_this.find(".scroll_container").css("margin-right",(_this.find(".scroll_content").width()-_this.find(".scroll_container").innerWidth()));
	if (_this.height()< _this.find(".scroll_content").height()) {
		_this.find(".scrollbar").show();
		_this.find(".scrollbar_mm").height(_this.find(".scrollbar").innerHeight()-_this.find(".scrollbar_tt").height()-_this.find(".scrollbar_bb").innerHeight());
		if (_this.find(".scrollbar_m").removeAttr("style").height()==0) {
			_this.find(".scrollbar_m").height(parseInt(_this.find(".scrollbar_mm").height()*_this.height()/_this.find(".scroll_content").height()));
			_this.find(".scrollbar_m").css({"min-height":_this.find(".scrollbar_mm").width(),"top":parseInt((_this.find(".scrollbar_mm").height()-_this.find(".scrollbar_m").height())*_this.find(".scroll_container").scrollTop()/(_this.find(".scroll_content").height()-_this.height()))});
		} else {
			/*_this.find(".scrollbar_m").height(_this.find(".scrollbar_mm").width());*/
		}
	} else {
		_this.find(".scrollbar").hide();
	}
}

function scrollbar_go(t_i,t_t){
	$("#"+pjs[t_i][1]).find(".scroll_container").scrollTop($("#"+pjs[t_i][1]).find(".scroll_container").scrollTop()+t_t);
}
function scrollbar_mousemove(e){
	var i=-1;
	for (var j=0;j<pjs.length;j++) {
		if (pjs[j][0] == "scrollbar" && pjs[j][3]==1) {
			i=j;
		}
	}
	if (i>=0) {
		$("#"+pjs[i][1]).find(".scroll_container").scrollTop(pjs[i][5]+(e.pageY-pjs[i][4])*($("#"+pjs[i][1]).find(".scroll_content").height()-$("#"+pjs[i][1]).height())/($("#"+pjs[i][1]).find(".scrollbar_mm").height()-$("#"+pjs[i][1]).find(".scrollbar_m").height()));
	}
}
function scrollbar_mouseup(e){
	var i=-1;
	for (var j=0;j<pjs.length;j++) {
		if (pjs[j][0] == "scrollbar" && pjs[j][3]==1) {
			i=j;
		}
	}
	if (i>=0) {
		$("#"+pjs[i][1]).find(".scroll_container").scrollTop(pjs[i][5]+(e.pageY-pjs[i][4])*($("#"+pjs[i][1]).find(".scroll_content").height()-$("#"+pjs[i][1]).height())/($("#"+pjs[i][1]).find(".scrollbar_mm").height()-$("#"+pjs[i][1]).find(".scrollbar_m").height()));
		$("#"+pjs[i][1]).find(".scroll_content").attr("style","position:relative;overflow:hidden;").unbind(".scrollbar");
		pjs[i][3]=0;
		$("body").unbind(".scrollbar");
		$("iframe").unbind(".scrollbar");
	}
}
function scrollbar_touchmove(e){
	var i=-1;
	for (var j=0;j<pjs.length;j++) {
		if (pjs[j][0] == "scrollbar" && pjs[j][3]==1) {
			i=j;
		}
	}
	if (i>=0) {
		$("#"+pjs[i][1]).find(".scroll_container").scrollTop(pjs[i][5]+(e.originalEvent.targetTouches[0].clientY-pjs[i][4])*($("#"+pjs[i][1]).find(".scroll_content").height()-$("#"+pjs[i][1]).height())/($("#"+pjs[i][1]).find(".scrollbar_mm").height()-$("#"+pjs[i][1]).find(".scrollbar_m").height()));
	}
}
function scrollbar_touchend(e){
	var i=-1;
	for (var j=0;j<pjs.length;j++) {
		if (pjs[j][0] == "scrollbar" && pjs[j][3]==1) {
			i=j;
		}
	}
	if (i>=0) {
		//e.originalEvent.changedTouches[0].pageY
		$("#"+pjs[i][1]).find(".scroll_container").scrollTop(pjs[i][5]+(e.originalEvent.changedTouches[0].clientY-pjs[i][4])*($("#"+pjs[i][1]).find(".scroll_content").height()-$("#"+pjs[i][1]).height())/($("#"+pjs[i][1]).find(".scrollbar_mm").height()-$("#"+pjs[i][1]).find(".scrollbar_m").height()));
		pjs[i][3]=0;
		$("#"+pjs[i][1]).find(".scroll_content").attr("style","position:relative;overflow:hidden;");
		$("body").off(".scrollbar").css("overflow","auto");
	}
}