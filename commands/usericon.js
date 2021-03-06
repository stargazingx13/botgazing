const Discord = require('discord.js');

module.exports = {
	n: 'usericon',
	a: ['usericon', 'uicon', 'useravatar', 'uavatar', 'ua'],
    d: 'Find out what the mentioned user\'s (or your) icon looks like in full.',
    u: '%usericon or %usericon <user>',
	b: false,
	async execute(client, message, args) {
        var member;
        var user;
    
        member = message.mentions.members.first();
        if (!member) member = message.guild.members.get(args[0]);
          else if (!member) member = message.guild.members.find(m => m.user.username === args.join(" "));
            else if (!member) member = message.guild.members.find(m => m.displayName === args.join(" "));
              else if (!member) member = message.guild.members.find(m => m.user.tag === args.join(" "));
                  else if (!member) member = message.member;
        user = member.user;

        message.channel.send(user.avatarURL);
	},
};