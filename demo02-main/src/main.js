const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {

    //console.log("Vualá");

    new BrowserWindow({
        width: 400,
        height: 500
    })

})