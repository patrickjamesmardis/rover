const { app, BrowserWindow, TouchBar, ipcMain } = require('electron');
const { TouchBarButton } = TouchBar;
const path = require('path');
const fs = require('fs');

let mainWindow;

// ipcMain.handle('get', (event, arg) => {
//     
// });


// function touchbarClick(emoji) {
//     let dirname = config.gits[config.emojis.indexOf(emoji)];
//     mainWindow.webContents.send('touchbar', dirname);
// }

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    // const buttons = [];
    // const touchBar = new TouchBar({
    //     items: buttons
    // });
    // mainWindow.setTouchBar(touchBar);
}

app.on('ready', createMainWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (mainWindow === null) createMainWindow();
});