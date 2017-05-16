const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let windowBrowser;
let windowAbout;

app.on('ready', () => {

    new BrowserWindow();

    const name = electron.app.getName();

    const template = [
        {
            label: name,
            submenu: [
                {
                    label: 'Google I/O',
                    click: () => {

                        windowAbout = new BrowserWindow({
                            width: 500,
                            height: 600
                        })

                        windowAbout.loadURL(`file://${__dirname}/index.html`)

                    }
                },

                {
                    type: 'separator'
                },

                {
                    label: 'Quit',
                    click: () => {

                        app.quit();
                    }
                }

            ]
        }]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})