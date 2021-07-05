const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
}

client.once('ready', () => {
        console.log("Ready. Current Prefix: " + `${prefix}`);
});

client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
                client.commands.get(command).execute(message, args);
        } catch (error) {
                console.log(error)
                const errorEmbed = new Discord.MessageEmbed()
                    .setColor('0xFF0000')
                    .setTitle('ERROR')
                    .setDescription('An unknown error occurred')
                    .setThumbnail('https://windows-97.github.io/resources/Error.png')
                message.channel.send(errorEmbed);     
        }
});

client.login(token)