module.exports = {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes("dog")) {
      await message.reply("what the dog doin'?");
    }
  },
};
