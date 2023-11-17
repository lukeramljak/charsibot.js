const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('burrito')
    .setDescription('Tuck someone into bed')
    .addUserOption((option) =>
      option.setName('name').setDescription('user to tuck in').setRequired(true)
    ),
  category: 'fun',
  async execute(interaction) {
    const user = interaction.options.getUser('name');
    await interaction.reply(
      `${interaction.user.displayName} has tucked <@${user.id}> into a burrito blanket. awwwww goodnight ${user.username} <:BurritoBlanket:1021275794678497291>`
    );
  },
};
