const Discord = require('discord.js');

module.exports = {
    name: 'about',
    description: 'About command',
    execute(message, args) {
        const pongEmbed = new Discord.MessageEmbed()
            .setColor('0x25F500')
            .setTitle('About')
            .setDescription(`Bot by matteodev#1109 and lupiet11#2904`)
            .addFields(
                { name: "CPU", value: `0%`, inline: false},
            )
        message.channel.send(pongEmbed);
    },
};