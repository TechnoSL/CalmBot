const shutdown = (client, message) => {
    if (message.author.id != '438057670042320896') {
        return message.channel.send('Error! You are not my owner!');
      } else {
        client.destroy();
      }
  };
  
module.exports = shutdown;
  