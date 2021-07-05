const Discord = require('discord.js');

var memberS = [
    "lupiet11",
    "Dämon",
    "Purzelnic",
    "Matteo",
    "Melone",
    "Maxi",
]

var ansS = [
    `WAS MACHST DU DA ${(memberS[Math.floor(Math.random() * memberS.length)])}?`,
    "IN MEINEM BUG, IN MEINEM HECK, IST EIN RIESENGROßES LECK",
    `${(memberS[Math.floor(Math.random() * memberS.length)])} ist ein Vollidiot`,
    "amogus",
    "huge sussy baka",
    "lol",
    "AAAAAAAAHHHHHHHHHHHHHH",
    "Ich bin dumm",
    "Hello there",
    "big chungus",
    "Was wäre mit AB IN DEN SÜÜÜÜÜDEN"
]

module.exports = {
    name: 'skyronic',
    description: 'skyronic fun command',
    execute(message, args) { 
        message.channel.send((memberS[Math.floor(Math.random() * memberS.length)]) + " sagt: " + ansS[Math.floor(Math.random() * ansS.length)])
    },
};