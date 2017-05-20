const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;



let window;

app.on('ready', () => {

    window = new BrowserWindow({
        width: 500,
        height: 400,
    })

    window.loadURL(`file://${__dirname}/index.html`);

})