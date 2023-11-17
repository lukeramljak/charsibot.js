module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes('egg')) {
      await message.reply('egg');
    }
  },
};
