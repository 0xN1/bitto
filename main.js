const {app, electron ,BrowserWindow, Menu, clipboard} = require('electron')

// const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 800, frame: false})

  mainWindow.loadURL(`file://${__dirname}/index.html`)



  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()

  var template = [{
        label: "Application",
        submenu: [
            // { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
            { label: "bitto bitto bitto"},
            { type: "separator" },
            { label: 'Reload', accelerator: 'CmdOrCtrl+R', click (item, focusedWindow) {if (focusedWindow) focusedWindow.reload()}},
            { label: "Dev Tools", accelerator: "CommandOrControl+Shift+I", click: () => {mainWindow.webContents.openDevTools()}},
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
        ]}, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]}
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
})


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
