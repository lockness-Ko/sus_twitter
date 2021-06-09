const Eris = require("eris");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var ii = "";
bot = new Eris("ODE0NzY3NzQ1NzE5MzM2OTkx.YGfwOA.dDtMpUoz3aE3woN09ICu_k6CkEY");
bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.connect();

bot.on("messageCreate", (msg) => {
    if (!msg.content.includes("trolling")&&!msg.author.bot&&msg.author.username!="Amugus") {
        ii = msg.channel.id;
        console.log("{@" + msg.author.username + "} in ["+msg.channel.guild.name+":"+msg.channel.name+"]: " + msg.content)
    }
    // if(msg.content.startsWith("!obscure-prefix-lol")) {
    //     bot.createMessage(msg.channel.id, msg.author.username+" wants me to say "+msg.content.split("obscure-prefix-lol ")[1]);
    // }
});

function t() {
    readline.question('> ', name => {
        bot.createMessage(ii, name);
        setTimeout(t,100)
    });
}
t()