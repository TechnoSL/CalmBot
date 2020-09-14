const fs = require('fs');
const files = fs.readdirSync('dog');

module.exports = {
  execute(message, args, bot) {
    let chosenFile = files[Math.floor(Math.random() * files.length)];
    message.channel.send('To submit your own dog picture please contact Miqhtie#0001\n**Must have at least 5 pictures for a submission**', {
      files: ['dog/' + chosenFile],
    });
  },
};
