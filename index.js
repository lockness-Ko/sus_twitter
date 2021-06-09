const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')
const path = require('path')
const Eris = require("eris");
const {
  send
} = require('process');
var sender;
var messages = "";

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(messages); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

bot = new Eris("ODI3NzU0NDIwMjMwMDI5Mzcy.YGfouA.2q3-i27vygMDI0EItJJpI7ktHl8");
bot.on("ready", () => { // When the bot is ready
  console.log("Ready!"); // Log "Ready!"
  process.stdout.write("Ready!");
});
bot.connect();
bot.on("messageCreate", (msg) => {
  if (!msg.content.includes("trolling") && !msg.author.bot) {
    ii = msg.channel.id;
    message = "{@" + msg.author.username + "} in [" + msg.channel.guild.name + ":" + msg.channel.name + ":" + msg.channel.id+ "]: " + msg.content;
    messages += message + "<br>";
  }
});

function createWindow() {
  mwin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  mwin.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on("send", function (event, arg) {
  sender = event.sender;
  bot.createMessage(arg[1], arg[0]);
});

ipcMain.on("change", function (event, arg) {
  sender = event.sender;
  bot = new Eris(arg);
  // console.log("q");
});