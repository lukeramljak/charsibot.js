const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bonk')
    .setDescription('Bonk someone'),
  category: 'fun',
  async execute(interaction) {
    await interaction.reply('bonk');
  },
};
