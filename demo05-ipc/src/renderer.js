const electron = require('electron');
const ipc = electron.ipcRenderer;

document.getElementById('sendmain').addEventListener('click', () => {
    ipc.send('send-message', 'Google IO Extended Xablau!!!');  
});

document.getElementById('sendrenderer').addEventListener('click', () => {
  ipc.send('messagetorenderer');
});

ipc.on('messagefrommain', (event, arg) => {

  document.getElementById('googlelover').innerHTML = arg;
  
})

