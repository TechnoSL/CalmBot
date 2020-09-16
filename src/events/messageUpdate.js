const messageUpdate = (client, oldMessage, newMessage) => {
  if (newMessage.channel.name.startsWith('count-to-')) {
    newMessage.delete();
  }
};

module.exports = messageUpdate;
