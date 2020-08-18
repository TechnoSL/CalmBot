const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client();

const fs = require("fs");

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(file.slice(0, -3), command)
}

bot.once("ready", async () =>{
    console.log("The bot has started");
});

bot.on("message", async message =>{
    
    if(message.channel.name.startsWith("count-to-") && !message.author.bot){
        newCount(message)
        return;
    }

    const prefix = config.prefix;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "rank"){
        const tools = require("./tools")
        tools.removeRankingRoles(message.member.roles, message)
        tools.removeLevelRoles(message.member.roles, message)
        tools.removeApRoles(message.member.roles, message)
    } 

    try{
        bot.commands.get(command).execute(message, args, bot)
    } catch{
       console.log(`Command Not Found: ${command}`)
    }
});

async function newCount(message){
    let otherMessage = await message.channel.messages.fetch({ limit: 2});
    let recentMessage = otherMessage.last();
    let msgContent = recentMessage.content;

    let numberMessage = 0;
    //Makes sure user does not send message twice in a row
    if(message.author.tag === recentMessage.author.tag){
        message.delete()
        return;
    }

    //Checks if it is correct number OR if the message is not a number at all
    if(parseInt(message.content) != parseInt(msgContent) + 1){
        message.delete()
        return;
    }

    console.log(parseInt(message.content) % 1000)
    if(parseInt(message.content) % 1000 === 0){
        console.log("beep")
        message.channel.setName("count to number")
    }
    console.log(msgContent);
}

bot.login(config.token)