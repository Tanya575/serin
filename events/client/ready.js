module.exports = (Discord, client) =>{
    console.log('Tanya is online!');


    client.user.setActivity('put here the bot Activity', { type: 'and here the type like playing' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
}