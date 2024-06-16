const { Events } = require('discord.js');

module.exports = {
  name: Events.GuildMemberRemove,
  async execute(member) {
    const channelId = '1018070065423335437';

    const channel = member.guild.channels.cache.get(channelId);
    if (channel) {
      channel.send(`${member.user.tag} has left the server.`);
    }
  },
};
