
const { app, BrowserWindow } = require('electron');

const prod = process.env.NODE_ENV === 'production';

function createWindow(){
    const win = new BrowserWindow({
        minWidth: 1280,
        minHeight: 720,
        show: false,
        icon: __dirname + '/icon.png',
        webPreferences: {
            devTools: !prod,
        }
    });
    win.maximize();
    win.loadURL('https://office.coexcus.org')
        .then(() => {
            win.show();
        });
}

app.on('window-all-closed', () => app.quit());

app.whenReady().then(()=>{
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});