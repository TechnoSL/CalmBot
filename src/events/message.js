const fs = require('fs');
const path = require('path');

const message = async (client, message) => {
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

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix on this server is \`${client.settings.prefix}\``);
  }

  if (!message.content.startsWith(client.settings.prefix)) return;

  const args = message.content.trim().slice(client.settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  message.args = args;

  if (client.commands[command]) {
    client.commands[command](client, message);
  } else {
    message.channel.send(`\`Command not found. Please run ${client.settings.prefix}help for a list of all commands\``);
  }
};

module.exports = message;
