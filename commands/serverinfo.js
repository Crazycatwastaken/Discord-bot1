const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setTitle("Server Info")
    .setThumbnail(bot.user.displayAvatarURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`Eve bot copy temp name`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "-serverinfo",
    accessableby: "Members",
    noaliases: ["No Aliases"],
    aliases: ["si", "serverdesc"]
}