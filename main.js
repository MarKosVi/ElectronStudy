
const { app, BrowserWindow, ipcMain } = require('electron');

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

let sobreWindow = null; 
ipcMain.on('abrir-janela-sobre', () =>{
        if(!sobreWindow){
            sobreWindow = new BrowserWindow({
                with: 100,
                height: 300,
                alwaysOnTop: true,
                frame: false
            });
            sobreWindow.on('closed', () =>{
                sobreWindow = false;
            })
        };

        sobreWindow.loadURL(`${__dirname}/app/sobre.html`)
});


ipcMain.on('fechar-janela-sobre', () =>{
        sobreWindow.close();
});