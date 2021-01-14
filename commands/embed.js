const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'embed',
  desc: 'Renvoie un embed!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
    .setColor("#dc143c")
    .setTitle("Titre");
    message.channel.send(embed)
  }
};