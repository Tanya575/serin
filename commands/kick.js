module.exports = {
    name: 'kick',
    aliases: ['k', 'طرد'],
    permissions: ["ADMINISTRATOR", "KICK_MEMBERS"],
    description: "this command kicks a member!",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("user has been kicked");
        }else{
            message.channel.send('<:idk:822217580567592991> I can t find this member');
        }
    }
}