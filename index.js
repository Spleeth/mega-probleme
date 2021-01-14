const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {
  TOKEN,
  PREFIX
} = require('./config');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(client.commands);
}

client.on('ready', () => {
  console.log(`Loggé en : ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.bot) return;
  const command = args.shift().toLowerCase();
  const args = message.content.slice(PREFIX.length).split(/ +/);
  
  if (command === 'ping') {
    message.reply('Pong!');
  }
});

client.login(TOKEN);