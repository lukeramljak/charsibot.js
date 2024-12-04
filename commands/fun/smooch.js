const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("smooch")
    .setDescription("Give someone a nice big smooch")
    .addUserOption((option) =>
      option.setName("name").setDescription("user to smooch").setRequired(true),
    ),
  category: "fun",
  async execute(interaction) {
    const user = interaction.options.getUser("name");
    await interaction.reply(
      `${interaction.user.displayName} has given <@${user.id}> a big smooch. MWAHHH! <:cuddle:1299195758960054364>`,
    );
  },
};
