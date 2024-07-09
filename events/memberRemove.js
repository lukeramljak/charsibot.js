const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberRemove,
  async execute(member) {
    const channelId = "1018070065423335437";

    const channel = member.guild.channels.cache.get(channelId);
    if (channel) {
      await channel.send(
        `${member.user.username} has left the server. <:rip:1057489640636035102>`
      );
    }
  },
};
