var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

let windowBrowser = null;

app.on('ready', () => {

    windowBrowser = new BrowserWindow({
        width: 640,
        height: 800,
        title: 'Google I/O Extended Cuiabá 2017'
    });

    windowBrowser.loadURL(`file://${__dirname}/index.html`);
    
});