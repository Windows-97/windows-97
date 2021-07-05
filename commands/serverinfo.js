const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Serverinfo command',
    execute(message, args) {
        const siEmbed = new Discord.MessageEmbed()
            .setColor('0x25F500')
            .setTitle('About this server')
            .addFields(
                { name: '** :pager: Server name :pager: **', value: `${message.guild.name}`},
                { name: '** :busts_in_silhouette: Total members :busts_in_silhouette: **', value: `${message.guild.memberCount}`},
                { name: '** :clock1: Created at :clock1: **', value: `${message.guild.createdAt}`},
            )
        message.channel.send(siEmbed);
    },
};