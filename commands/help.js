const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: "help",
    description: 'Help command',
    execute(message, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('0x25F500')
            .setTitle('Help')
            .setDescription(`Welcome to Windows 97! Windows 97 is a multi-purpose discord bot! The prefix is ${prefix}`)
            .addFields(
                { name: ":police_car: Moderation Commands :police_car:", value: "*Work in Progress*", inline: false },
                { name: ":tools: Utility Commands :tools:", value: "`ping` - Latency between Discord and the host\n`help` - This command\n`about` - Information about the bot\n`serverinfo` - Information about the current server", inline: false },
                { name: ":clown: Fun Commands :clown:", value: "`pong` - Uhhh\n`amogus` - Amogus", inline: false}
            )
        message.channel.send(helpEmbed)
    },
};