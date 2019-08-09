const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let numArray = args.map(n=> parseInt(n));
let total = numArray.reduce((p,c) => p-c);
await message.channel.send(`The difference is ${total}.`);
}

module.exports.config = {
    n: "subtract",
    na: "N/A",
    a: [],
    d: "Forget your calculator at home? Have no fear!",
    u: "Type in numbers, seperated by spaces.",
    ab: "All Users",
    s: "%subtract 1 2 3 4 5"
}