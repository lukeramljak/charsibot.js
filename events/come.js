module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;
    if (
      message.content.toLowerCase().includes('come') ||
      message.content.toLowerCase().includes('coming')
    ) {
      await message.reply('no coming');
    }
  },
};
