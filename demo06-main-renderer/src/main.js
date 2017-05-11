const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

const countdown = require('./count');

let windowBrowser;

app.on('ready', () => {

    windowBrowser = new BrowserWindow({
        width: 400,
        height: 500
    });

    windowBrowser.loadURL(`file://${__dirname}/index.html`);

    app.on('closed', () => {
        console.log('The window was closed');
    })
});

ipc.on('countdown-start', () => {
    countdown(count => {
        windowBrowser.webContents.send('countdown', count);
    });
})