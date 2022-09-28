
const { app, BrowserWindow } = require('electron');

app.on('ready', () =>{
    console.log('Aplicação iniciada');
    let mainWindow = new BrowserWindow({
        with: 600,
        height: 400,
        icon: `${__dirname}/app/src/icon.png`
    });

    mainWindow.loadURL(`${__dirname}/app/index.html`);

});

app.on('window-all-closed', () =>{
    app.quit();
});