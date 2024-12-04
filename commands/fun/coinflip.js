const { SlashCommandBuilder } = require("discord.js");

const results = ["heads", "tails"];
const randomChoice = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flip a coin"),
  category: "fun",
  async execute(interaction) {
    await interaction.reply(`The coin landed on ${randomChoice(results)}.`);
  },
};
