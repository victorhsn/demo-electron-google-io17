const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let windowBrowser;

app.on('ready', () => {

    windowBrowser = new BrowserWindow({
        width: 500,
        height: 500
    })

    windowBrowser.loadURL(`file://${__dirname}/index.html`);

})