const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let sicon =  message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Informacion del server")
     .setColor("FFE300")
     .setThumbnail(sicon)
     .addField("Nombre del server", message.guild.name)
     .addField("Creado el", message.guild.createdAt)
     .addField("Unido", message.member.joinedAt)
     .addField("Mienbros", message.guild.menberCount);

    return message.channel.send(serverembed);

}

module.exports.help = {
  name: "serverinfo"
}
