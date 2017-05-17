const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let windowGdg;

app.on('ready', () => {

    new BrowserWindow();

    const name = electron.app.getName();

    const template = [
        {
            label: name,
            submenu: [{
                    label: 'Google I/O',
                    click: () => {

                        windowGdg = new BrowserWindow({
                            width: 500,
                            height: 600
                        })

                        windowGdg.loadURL(`file://${__dirname}/index.html`)

                    }
                },

                {
                    type: 'separator'
                },

                {
                    label: 'Quit',
                    click: () => {
                        app.quit();
                    },
                    accelerator: 'Cmd+Q'
                },

                {
                    label: 'Menu 03',
                    submenu: [
                        {
                            label: 'Menu03-1'
                        },
                        {
                            label: 'Menu03-2'
                        },
                        {
                            label: 'Menu03-3'
                        }
                    ]
                }

            ]
        }]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
})