const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("https://www.youtube.com/watch?v=SaKQoSOCehw
")
setInterval(function() {
channel.send(`https://cdn.discordapp.com/attachments/522724605429809183/524586500403232769/Screenshot_20181204-200012.jpg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
