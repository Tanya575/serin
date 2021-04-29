module.exports = {
    name: 'avatar',
    aliases: [],
    permissions: [],
    description: 'avatar command',
    
    execute(client, message, args) {

        if (!message.mentions.users.size) {
            return message.channel.send(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const user_avatar = message.mentions.users.map(user => {
            return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(user_avatar);
    }
}
