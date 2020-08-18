const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

const fs = require("fs");
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}

bot.once("ready", () =>{
    console.log("The bot has started");
});

bot.on("message", message =>{
    const prefix = config.prefix;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        bot.commands.get("ping").execute(message, args);
    }

});

bot.login(config.token)