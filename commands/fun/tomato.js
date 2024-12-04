const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tomato")
    .setDescription("Toss a tomato!")
    .addUserOption((option) =>
      option
        .setName("name")
        .setDescription("choose your target")
        .setRequired(true),
    ),
  category: "fun",
  async execute(interaction) {
    const user = interaction.options.getUser("name");
    await interaction.reply(
      `${interaction.user.displayName} threw a tomato at <@${user.id}>. tomato tomato tomato! <:rip:1057489640636035102>`,
    );
  },
};
