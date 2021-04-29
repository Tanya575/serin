module.exports = {
    name: 'ban',
    aliases: [],
    permissions: [],
    description: "ban command",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const Target = message.guild.members.cache.get(member.id);
            Target.ban();
            message.channel.send('user has been banned');
        }else{
            message.channel.send('make sure to mention a user after the command');
        }
    }
}
