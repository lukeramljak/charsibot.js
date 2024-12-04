const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberRemove,
  async execute(member) {
    const channelId = "1018070065423335437";

    const channel = member.guild.channels.cache.get(channelId);
    if (channel) {
      const emoji = member.guild.emojis.cache.find(
        (emoji) => emoji.name === "rip",
      );
      await channel.send(
        `${member.user.username} has left the server. ${emoji}`,
      );
    }
  },
};
