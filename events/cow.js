module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes('cow')) {
      await message.reply('MOOOOO! <:ANGERY:1021275434823995475>');
    }
  },
};
