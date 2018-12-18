const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("https://www.youtube.com/watch?v=SaKQoSOCehw
")
setInterval(function() {
channel.send(`ViiRo The Best Because He Is The Best For Ever We Love ViiRo ViiRo The Best Because He Is The Best For Ever We Love ViiRo ViiRo The Best Because He Is The Best For Ever We Love ViiRo ViiRo The Best Because He Is The Best For Ever We Love ViiRo ViiRo The Best Because He Is The Best For Ever We Love ViiRo ViiRo The Best Because He Is The Best For Ever We Love ViiRo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
