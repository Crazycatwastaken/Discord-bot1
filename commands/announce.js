const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.find("name", "Admin") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
        .setColor("#2ac075")
        .setTitle(`Announcement by ${message.author.username}:`)
        .setDescription (argsresult) 
        .setTimestamp() 
        mChannel.send(embed)
        
        
        
        // Sends embeded message in memtioned channel ^.
    } else {
        argsresult = args.join(" ")
        let embed = new Discord.RichEmbed()
        .setColor("#2ac075")
        .setTitle(`Announcement by ${message.author.username}:`)
        .setDescription (argsresult)
        .setTimestamp() 
        message.channel.send(embed)
        
    }

}


module.exports.config = {
    name: "announce",
    description: "sends a message that was inputted to a channel",
    usage: "-announce",
    accessableby: "Staff",
    aliases: ["acc", "announcement"]
}