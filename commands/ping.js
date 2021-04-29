module.exports = {
    name: 'ping',
    aliases: [],
    permissions: ['set permissions or put it null for everyone'],
    description: "ping command",
    execute(client, message, args){
        message.channel.send(`pong. \nLatency is ${Date.now() - message.createdTimestamp}ms \nAPI Letency is ${Math.round(client.ws.ping)}ms`);
    }
}
