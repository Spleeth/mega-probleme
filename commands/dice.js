const { MessageEmbed, MessageAttachment } = require("discord.js");
const Thumbnail = new MessageAttachment('./assets/img/dice.png')
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
  name: 'dice',
  desc: 'Renvoie la valeur de plusieurs dès!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
    .setColor("#dc143c")
    .setTitle("Lancé de dès")
    .attachFiles(Thumbnail)
    .setThumbnail('attachment://dice.png')
    .setDescription(randomDice())
    message.channel.send(embed)
  }
};