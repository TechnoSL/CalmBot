const fs = require('fs');
const files = fs.readdirSync('arlo');

const fetch = require('node-fetch');
module.exports = {
  execute(message, args, bot) {
    let chosenFile = files[Math.floor(Math.random() * files.length)];
    message.channel.send('Arlo', {
      files: ['arlo/' + chosenFile],
    });
  },
};
