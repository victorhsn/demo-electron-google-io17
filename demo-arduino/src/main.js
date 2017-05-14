var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

let windowBrowser = null;

app.on('ready', () => {

    windowBrowser = new BrowserWindow({
        width: 500,
        height: 400
    });

    windowBrowser.loadURL(`file://${__dirname}/index.html`);
    
})