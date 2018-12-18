const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("522724605429809183")
setInterval(function() {
channel.send(`@everyone Fuck Server And Hayder I am Not ViiRo We Love ViiRo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
