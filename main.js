const { app, BrowserWindow } = require('electron')

const {ipcMain} = require('electron');
ipcMain.handle('perform-action', (event, ...args)=>{
    console.log("ipcMain");

})

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    win.loadFile('./src/view/main.html')

    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})