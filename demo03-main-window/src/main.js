const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', () => {

   mainWindow = new BrowserWindow({
        width: 400,
        height:500
    })

    mainWindow.on('closed', () => {

        console.log("The window was closed");
        mainWindow = null;
    });
});
