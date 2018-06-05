const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Zara es un bot echo especial mente para the kings of gamings que todavia esta en desarrollo")
  .setColor("#FF0000")
  .setThumbnail(bicon)
  .addField("Nombre del bot", bot.user.username);

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
