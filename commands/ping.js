const Discord = require("discord.js")

module.exports = {
	execute(message, args, bot) {
		message.channel.send("Pinging...").then(m =>{
			  var ping = m.createdTimestamp - message.createdTimestamp;
			  var embed = new Discord.MessageEmbed()
			  m.edit(`Ping: \`${ping}ms\``)
		  });
	},
};