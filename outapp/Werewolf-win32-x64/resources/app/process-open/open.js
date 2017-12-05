window.$=window.jQuery=require("jquery");
const close=document.querySelector("#close");

const path=require("path");
const electron = require("electron");

const BrowserWindow = require("electron").remote.BrowserWindow;

const winW=electron.screen.getPrimaryDisplay().workAreaSize.width;
const winH=electron.screen.getPrimaryDisplay().workAreaSize.height;

let openWin;
$(".expand").click(function(){
	let storeNum=$(this).attr('numdata');
	//alert(storeNum);
	openWin = new BrowserWindow({
	//飞屏
	//x:winW,y:0,
	fullscreen: true,
	frame:false,
	fullscreenable:true})
	  openWin.loadURL('file://'+__dirname+"/index.html");
	  
	  //调试模式
	  //openWin.webContents.openDevTools();
	  
	  openWin.on('closed', function () {
	    win = null
	  })
});

close.onclick=function(){
	openWin.close();
}
