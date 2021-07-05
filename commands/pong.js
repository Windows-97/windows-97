const Discord = require('discord.js');

module.exports = {
    name: 'pong',
    description: 'Pong command',
    execute(message, args) {
        const pongEmbed = new Discord.MessageEmbed()
            .setColor('0x25F500')
            .setTitle('Ping?')
            .setDescription(`Thats not how it works...`)
        message.channel.send(pongEmbed);
    },
};