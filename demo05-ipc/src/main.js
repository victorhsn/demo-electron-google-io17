const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

let windowBrowser;

electron.shell.openExternal('http://github.com');

app.on('ready', () => {

    windowBrowser = new BrowserWindow({
        width: 650,
        height: 300
    })

    windowBrowser.loadURL(`file://${__dirname}/index.html`);

    windowBrowser.on('closed', () => {
        console.log('The window was closed');
    });
})

ipc.on('send-message', (event, arg) => {
    console.log(arg);
})

ipc.on('messagetorenderer', (event, arg) => {
  event.sender.send('messagefrommain', '<h1>Google Lover</h1>')
})
