module.exports = {
    name: 'kick',
    aliases: [],
    permissions: [],
    description: "kick command",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const Targer = message.guild.members.cache.get(member.id);
            Targer.kick();
            message.channel.send("user has been kicked");
        }else{
            message.channel.send('make sure to mention a user after the command');
        }
    }
}
