window.$ = window.jQuery = require('jquery');

var openHeight=window.screen.height;

//拓展屏全局变量

var definition={
	startAngle:0,	//开始角度
	endAngle:180,	//结束角度
	speed:2  		//速度
}; 	//ani 翻转初始值定义

$(function(){
	openEvent.inistyle();
	openEvent.listens();
});

//定义拓展屏方法
var openEvent={
	//拓展屏样式调整
	inistyle:function(){
		$('.player').css({
			"height":(openHeight*0.4)+"px"
		});
		$('img').css({
			height:(openHeight*0.4)+"px",
			width:100+"%"
		})
	},
	//
	ani:function(data){
		if(data.startAngle==data.endAngle){
			return;
		};
		$('.player').css({
			"transform":"rotateY("+data.startAngle+"deg)"
		});
		data.startAngle=data.startAngle+data.speed;
		if(data.startAngle<=data.endAngle){
			setTimeout(function(){openEvent.ani(definition)},1)
		}
	},
	listens:function(){
		$('.player').click(function(){
			openEvent.ani(definition);
		});
	},
}
