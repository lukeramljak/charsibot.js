const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bonk')
    .setDescription('Bonk someone')
    .addUserOption((option) => option.setName('name').setRequired(true)),
  category: 'fun',
  async execute(interaction) {
    const target = interaction.options.getUser('target');
    await interaction.reply(
      `${interaction.user.displayName} has bonked <@${target.id}>. Oh my...`
    );
  },
};
