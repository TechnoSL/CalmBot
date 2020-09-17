const urls = require('../data/arlo.json');

const arlo = (client, message) => {
  const img = urls[Math.floor(Math.random() * urls.length)];
  message.channel.send(img);
};

module.exports = arlo;
