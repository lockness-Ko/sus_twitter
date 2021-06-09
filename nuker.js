const Eris = require("eris");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var botw = [
    "ODI3NzU0NDIwMjMwMDI5Mzcy.YGfouA.2q3-i27vygMDI0EItJJpI7ktHl8",
    "ODE0NzY3NzQ1NzE5MzM2OTkx.YGfwOA.dDtMpUoz3aE3woN09ICu_k6CkEY",
    "ODI3NzY0MDQwMjUxNDczOTYw.YGfySw.KqORnFZKQOg-rYEoRT_J4vLvijc",
    "ODI3NzY2NjEwMTM5MTUyNDQ0.YJ4vmw.n9ECSqBoh8VDmfriY3NCyii7_7w",
    "ODI3NzY2ODIzMDQyNDE2Njcy.YGf1ig.tFpOfGuKVMZV2Y99fkgfVYAJuWw",
    "NzUxNTk0NTU3MDM2MTY3MTg5.YHKNyQ._4SJ9R5rH4t6UP13e6NA_2pv0zg",
    "ODE1MDkxMzc0OTQzODk1NTUy.YHJyfQ.1Pl_LK6mXlso_7-gvk-obg5FPrg"
];

var bots = [];
botw.forEach((z) => {
    bots.push(new Eris(z));
});
// Replace BOT_TOKEN with your bot account's token

bots.forEach((z) => {
    z.on("ready", () => { // When the bot is ready
        console.log("Ready!"); // Log "Ready!"
    });

    z.connect();
});

channels = [
    "573090612442693632",
    "564935925008957445",
    "564933100841336877"
]

msg = "we do a little aasdads trolling  ﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽﷽﷽ ﷽﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽  ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽ https://gfycat.com/flickeringdrearyborzoi"; 

setInterval(function () {
    for (i = 0; i < channels.length; i++) {
        bots.forEach((z) => {
            try {
                z.createMessage(channels[i], msg).catch((e,ex)=>{console.log("Error bruh. Trolls got blockd");});
            } catch (error) {
                
            }
        });
    }
}, 500);