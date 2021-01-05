const Embeds = require('../Extras/embed.js');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    embed.setTitle("Test")
    embed.setDescription("Test Description")

    const CreateEmbed = Embeds.EmbedGen(embed);
    message.channel.send({ embed: CreateEmbed})
}