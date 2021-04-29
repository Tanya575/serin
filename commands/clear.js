module.exports = {
    name: 'clear',
    aliases: [],
    permissions: [],
    description: "clear command",
    async execute(client, message, args) {
        if(!args[0]) return message.reply("enter the amount of messages");
        if(isNaN(args[0])) return;

        if(args[0] > 100) return message.reply("you can only delete from 1 - 100 messages");
        if(args[0] < 1) return;

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}
