const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'say',
  desc: 'Fait dire ce que tu veux à Portal!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`${member.user.username} à dis :`)
      .setDescription(args.join(" "))
      .setTimestamp();
    message.channel.send(embed);
  }
};