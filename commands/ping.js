const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping command',
    execute(message, args) {
        const pingEmbed = new Discord.MessageEmbed()
            .setColor('0x25F500')
            .setTitle('Pong! :ping_pong:')
            .setDescription(`${message.client.ws.ping}ms`)
        message.channel.send(pingEmbed);
    },
};