const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bonk")
    .setDescription("Bonk someone")
    .addUserOption((option) =>
      option.setName("name").setDescription("user to bonk").setRequired(true),
    ),
  category: "fun",
  async execute(interaction) {
    const user = interaction.options.getUser("name");
    await interaction.reply(
      `${interaction.user.displayName} has bonked <@${user.id}> <:smug:1302882589438377984>`,
    );
  },
};
