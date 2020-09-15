const fs = require('fs');
const path = require('path');

const message = async (client, message) => {
  // Prevent bot from responding to other bots and outside of a guild
  if (message.author.bot) return;
  if (!message.guild) return;

  // #count-to-x channel code so invalid numbers are deleted and channel name is updated
  if (message.channel.id === client.settings.countChannelId) {
    const messageList = await message.channel.messages.fetch({ limit: 2 });
    const previousMessage = messageList.last();

    // Makes sure user does not send message twice in a row
    if (message.author.tag === previousMessage.author.tag) {
      return message.delete();
    }

    // Checks if it is correct number OR if the message is not a number at all
    if (parseInt(message.content, 10) != parseInt(previousMessage.content, 10) + 1) {
      return message.delete();
    }

    // Checks if count is divisible by 1000, if so changes the channel name to #count-to-(current count + 1000)
    if (parseInt(message.content) % 1000 === 0) {
      return message.channel.setName(`count-to-${parseInt(message.content, 10) + 1000}`);
    }
  }

  // If you mention the bot, it will tell you its prefix
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this server is \`${client.settings.prefix}\``);
  }

  // Ignores any messages without prefix after this line
  if (!message.content.startsWith(client.settings.prefix)) return;

  // Derives args and command from message content
  const args = message.content.trim().slice(client.settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Puts args into the message object to avoid passing it again into the command function
  // It looks a bit cleaner without the extra argument in the cmd functions
  message.args = args;

  // If the command entered is loaded, execute it, otherwise tell the user that the command wasn't
  if (client.commands[command]) {
    client.commands[command](client, message);
  } else {
    message.channel.send(`\`command not found, run ${client.settings.prefix}help for a list of all commands\``);
  }
};

module.exports = message;
