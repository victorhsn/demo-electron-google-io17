const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {

    new BrowserWindow({
        width: 400,
        height: 500,
        title: 'Google I/O Extended Cuiabá 2017',
        backgroundColor: '#FFC300'
    })

})
