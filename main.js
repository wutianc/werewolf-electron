const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({x:0,y:0,fullscreen: false,fram:false})
  mainWindow.loadURL('file://'+__dirname+"/login.html");
<<<<<<< HEAD
  //123调试工具
  //mainWindow.webContents.openDevTools();
=======
  //调试工具
  mainWindow.webContents.openDevTools();
>>>>>>> e12e618c4377db04443fa9498a860f204ed83b5b

  mainWindow.on('closed', function () {
    mainWindow = null
  })
};
app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('open-url', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    create2Window()
  }
})
