import { app, BrowserWindow, ipcMain ,Menu,Tray } from 'electron';

const path = require('path');
//托盘对象
var appTray = null;
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    frame: false // 去掉浏览器头
  })

  mainWindow.loadURL(winURL)
  
  setsystemTray(mainWindow);
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
function setsystemTray(Win){
  //系统托盘右键菜单
  var trayMenuTemplate = [
    {
        label: '设置',
        click: function () {} //打开相应页面
    },
    {
        label: '帮助',
        click: function () {}
    },
    {
        label: '关于',
        click: function () {}
    },
    {
        label: '退出',
        click: function () {
            //ipc.send('close-main-window');
             app.quit();
        }
    }
];

//系统托盘图标目录
// trayIcon = path.join(__dirname, 'tray');

// appTray = new Tray(path.join(trayIcon, 'icon.ico'));
const url = path.join(__dirname, '../../static/tray/icon.ico')
appTray = new Tray(url);

//图标的上下文菜单
const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);

//设置此托盘图标的悬停提示内容
appTray.setToolTip('微信');

//设置此图标的上下文菜单
appTray.setContextMenu(contextMenu);
appTray.on('double-click', () => {
  Win.show()
  Win.focus()
})
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on("setWindowTop",()=>{
   //设置窗口置顶
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
ipcMain.on('window-all-closed', () => {
  app.quit()
})
// 小化
ipcMain.on('hide-window', () => {
  mainWindow.minimize()
})
// 最大化
ipcMain.on('show-window', () => {
  mainWindow.maximize()
})
// 还原
ipcMain.on('orignal-window', () => {
  mainWindow.unmaximize()
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
ipcMain.on('message', function(event, arg) {
  console.log(arg);  // prints "ping"
  event.sender.send("backmessage","this is backmessage")
})