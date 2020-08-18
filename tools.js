const { RichPresenceAssets } = require("discord.js")
const { default: fetch } = require("node-fetch")

module.exports = {
    removeRankingRoles(roles, message){
        roles.remove(message.guild.roles.cache.find(r => r.name === "VIP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "VIP+"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "MVP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "MVP+"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "MVP++"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "Hypixel Staff"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "Hypixel Helper"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "Hypixel Moderator"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "Hypixel Youtube"))
    },

    removeApRoles(roles, message){
        roles.remove(message.guild.roles.cache.find(r => r.name === "1k AP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "2k-4k AP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "5k-7k AP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "8k-10k AP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "11k-13k AP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "14k-16k AP"))
        roles.remove(message.guild.roles.cache.find(r => r.name === "17k+ AP"))
    },

    removeLevelRoles(roles,message){
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 20+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 35+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 45+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 55+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 65+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 75+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 85+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 95+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 150+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 200+"))
        roles.remove(message.guild.roles.cache.find(r=>r.name === "Network Level 250+"))
    }
    
}
