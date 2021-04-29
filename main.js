const Discord = require('discord.js');
require('dotenv').config(); // you need to install this package npm i dotenv
const client = new Discord.Client({ partials: [ "MESSAGE", "CHANNEL", "REACTION" ]});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(process.env.DISCORD_TOKEN);
