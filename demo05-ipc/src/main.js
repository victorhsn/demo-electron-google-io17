const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

let windowBrowser;

let message = ['<o/','=D','Xablau!','I am main!','Manda Nudes!'];

app.on('ready', () => {

    windowBrowser = new BrowserWindow({
        width: 650,
        height: 300,
        title: 'Google I/O Extended Cuiabá 2017',
        backgroundColor: '#5499C7'
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
 
 let msg;

  message.forEach(function(el) {
      msg = message[Math.floor(Math.random() * message.length)];
  });

  event.sender.send('messagefrommain',msg);

})
