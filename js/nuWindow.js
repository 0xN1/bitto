function nuWindow(myURL){
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;

  var win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(myURL);

  win.webContents.on('did-finish-load', ()=>{
    win.show();
    win.focus();
  });
}
