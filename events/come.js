module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;
    if (
      message.content.toLowerCase().includes('come') ||
      message.content.toLowerCase().includes('coming')
    ) {
      if (Math.random() < 0.20) {
	await message.reply('no coming');
      }
    }
  },
};
