const Discord = require('discord.js'); 
require('dotenv').config();
const client = new Discord.Client({ partials: [ "MESSAGE", "CHANNEL", "REACTION" ]});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(h => {
    require(`./handlers/${h}`)(client, Discord);
})
 
// you can do this if you installed the package or you can just use ("bot token here")
client.login(process.env.DISCORD_TOKEN);
