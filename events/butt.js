module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("but")) {
      if (Math.random() < 0.2) {
        await message.reply("butt");
      }
    }
  },
};
