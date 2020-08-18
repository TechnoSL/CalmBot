const Discord = require("discord.js")

const uwu = ["https://tenor.com/view/uwu-owo-gif-gif-13537412","https://tenor.com/view/smug-anime-face-gif-6194051","https://tenor.com/view/uwu-cat-piano-music-tiles-tapping-gif-16391139","https://tenor.com/view/owo-uwu-star-gif-14444240"]

module.exports = {
	execute(message, args, bot) {
        try{
            const random = Math.random() * (uwu.length - 0) + 0;
            console.log(Math.floor(random)-1)
            message.channel.send(uwu[Math.round(random)])
        } catch{
            console.trace()
        }

	}
};