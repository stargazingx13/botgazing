const Discord = require('discord.js');

module.exports = {
	n: 'coffee',
    a: ['energy', 'caffeine', 'cawfee', 'covfefe'],
    d: 'Use this for a little pick-me-up!',
    u: '%coffee',
	b: false,
	async execute (client, message, args) {
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`https://coffee.alexflipnote.dev/random.json`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%coffee")
    .setColor(0x00000)
    .setImage(body.file)
 
  message.channel.send({embed});
	},
};