const Eris = require("eris");
const request = require("request");
var SpellChecker = require('simple-spellchecker');

function fixSentence(sentence,msg) {
    SpellChecker.getDictionary("en-US", function(err, dictionary) {
        if(!err) {
            wordlist = sentence.split(' ');
            for (let i = 0; i < wordlist.length; i++) {
                var misspelled = ! dictionary.spellCheck(wordlist[i]);
                if(misspelled) {
                    var suggestions = dictionary.getSuggestions(wordlist[i]);
                    wordlist[i]=suggestions[0];
                }
            }
            bot.createMessage(msg.channel.id, `<@${msg.author.id}> `+wordlist.join(" "));
        }else{console.log("YOU BROKE THE RULES!!!!!!");}
    });
}

bot = new Eris("ODQ2MjA4MjIyMjI1ODkxMzI5.YKsL1Q.qR0d9hY_U4vp9P4DHx2E30OeF3M");

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.connect();

bot.on("messageCreate", (msg) => {
    if(msg.author.id!="843622061863469097"&&msg.content.includes("#tweet")){request.get("http://localhost:8000/"+(msg.content.split("#tweet ")[1]||""),(e,r,b)=>{
        msg.addReaction("🤱");
        // fixSentence(b,msg);
        bot.createMessage(msg.channel.id, `<@${msg.author.id}> `+b);
    })};//843622061863469097
});

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })