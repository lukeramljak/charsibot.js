const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Hug someone")
    .addUserOption((option) =>
      option.setName("name").setDescription("user to hug").setRequired(true),
    ),
  category: "fun",
  async execute(interaction) {
    const user = interaction.options.getUser("name");
    await interaction.reply(`_hugs <@${user.id}>_`);
  },
};
