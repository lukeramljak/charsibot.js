module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("cow")) {
      const emoji = message.guild.emojis.cache.find(
        (emoji) => emoji.name === "rage",
      );
      await message.reply(`MOOOOO! ${emoji}`);
    }
  },
};
