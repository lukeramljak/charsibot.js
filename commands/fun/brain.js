const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('brain')
    .setDescription('Brain not working?')
    .addUserOption((option) =>
      option
        .setName('name')
        .setDescription('choose your target')
        .setRequired(true)
    ),
  category: 'fun',
  async execute(interaction) {
    const user = interaction.options.getUser('name');
    await interaction.reply(
      `Oh dear, it looks like <@${user.id}>'s brain has stopped working... Please wait a moment while it restarts. <:rip:1057489640636035102>`
    );
  },
};
