const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Couldn't find user.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("no se puede hacer pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("El usuario a sido baneado");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Banear")
    .setColor("#DD00FF")
    .addField("Usuario baneado", `${bUser} with ID ${bUser.id}`)
    .addField("Baneado por", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Baneado en", message.channel)
    .addField("Hora", message.createdAt)
    .addField("Razon", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "ban");
    if(!incidentchannel) return message.channel.send("En el canal de los baneos");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
