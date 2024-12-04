const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("send")
    .setDescription("Send a message as charsibot")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to send")
        .setRequired(true),
    ),
  async execute(interaction) {
    const allowedUserIds = ["729571283645366293", "390331688850554890"];
    if (!allowedUserIds.includes(interaction.user.id)) {
      return interaction.reply({
        content: "You do not have permission to use this command.",
        ephemeral: true,
      });
    }

    const messageContent = interaction.options.getString("message");

    try {
      await interaction.channel.send(messageContent);
      await interaction.reply({ content: "Message sent!", ephemeral: true });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error sending the message.",
        ephemeral: true,
      });
    }
  },
};
