const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
let otherWindow;

app.on('ready', () => {

   mainWindow = new BrowserWindow({
        width: 400,
        height:500,
        title: 'Google IO/Extended Cuiabá 2017',
        backgroundColor: '#DAF7A6',
        center: true,
        //resizable: false
        //movable: false,

    })

    mainWindow.on('closed', () => {
        console.log("The window was closed");
        mainWindow = null;
    });

});
