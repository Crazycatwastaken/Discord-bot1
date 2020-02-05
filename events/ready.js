const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} is online`)
    

    let statuses = [
        `O5-11`,
        "people type -help",
        `over ${bot.users.size} users!`,
        'O5-11 Say good by to spikwed, good speed mate.'
        
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "LISTENING"});

    }, 5000)

}