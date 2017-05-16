const electron = require('electron');
const path = require('path');
const app = electron.app;
const Tray = electron.Tray;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let windowGdg;

app.on('ready', () => {

    const tray = new Tray(path.join('src','gdg-icon-16.png'));

    const context = Menu.buildFromTemplate([
        {
            label: 'Google I/O',
            click: () => {

                windowGdg = new BrowserWindow({
                    width: 400,
                    height: 500
                })
            }
        }
    ])

    tray.setContextMenu(context);
})