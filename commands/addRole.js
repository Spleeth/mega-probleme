module.exports = {
  name: 'addRole',
  desc: 'Ajouter un rôle!',
  execute(client, message, args) {
    let role = message.guild.roles.cache.find(role => role.name === args[1].toString()) || message.guild.roles.cache.find(role => role.id === args[1].toString()) || message.mentions.roles.first();;
    let mentionnedUser = message.mentions.members.first() || message.guild.members.cache.find((m) => m.user.tag === args[0]) || message.guild.members;
    if (role) {
      if (message.member.roles.cache.has(role.id)) return message.channel.send("Vous avez déjà ce rôle! Essayez à nouveau.");
      if (role.permissons.has('KICK_MEMBERS')) return message.channel.send("Vous ne pouvez pas avoir ce rôle");

      mentionnedUser.roles.add(role.id)
        .then(m => message.channel.send(`Vous possédez maintenant le rôle ${role}.`))
        .catch(e => console.log(e));
    } else {
      message.channel.send("Le rôle n'existe pas!")
    }
  }
};