const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Couldn't find user.");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no se puede hacer pal!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("El usuario a sido explusado");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Expulsar")
        .setColor("#002CFF")
        .addField("Usuario expulsado", `${kUser} with ID ${kUser.id}`)
        .addField("Expulsado por", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Expulsado en", message.channel)
        .addField("Hora", message.createdAt)
        .addField("Razon", kReason);

        let kickChannel = message.guild.channels.find(`name`, "baneos");
        if(!kickChannel) return message.channel.send("En el canal de los baneos");

        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);


}

module.exports.help = {
  name: "kick"
}
