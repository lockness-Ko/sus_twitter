const Eris = require("eris");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });ODE0NzY3NzQ1NzE5MzM2OTkx.YDisCQ.vsXL8j-yBa5aKdHNGeP1ygESLZY

var bot = new Eris("ODE0NzY3NzQ1NzE5MzM2OTkx.YDisCQ.vsXL8j-yBa5aKdHNGeP1ygESLZY");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", (msg) => {
    // if(msg.content.startsWith("!obscure-prefix-lol")) {
    //     bot.createMessage(msg.channel.id, msg.author.username+" wants me to say "+msg.content.split("obscure-prefix-lol ")[1]);
    // }
});

bot.connect(); // Get the bot to connect to Discord
bot.createMessage(process.argv[2],process.argv[3]).then(function(){process.exit();});