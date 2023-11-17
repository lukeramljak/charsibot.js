const { SlashCommandBuilder } = require('discord.js');

const responses = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes, definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
  'No way.',
  'Maybe',
  'The answer is hiding inside you',
  'No.',
  '||No||',
  '||Yes||',
  'Hang on',
  "It's over",
  "It's just the beginning",
  'Good luck',
  'Big big chungus, big chungus, big chungus',
];

const randomChoice = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask the magic 8-ball a question')
    .addStringOption((option) =>
      option
        .setName('question')
        .setDescription('ask a question')
        .setRequired(true)
    ),
  category: 'fun',
  async execute(interaction) {
    const question = interaction.options.getString('question');
    await interaction.reply(
      `${
        interaction.user.displayName
      } asked: _${question}_\n\n🎱 ${randomChoice(responses)}`
    );
  },
};
