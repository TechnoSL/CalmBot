const seedrandom = require('seedrandom');

const ship = (client, message) => {
  if (message.mentions.users.size !== 2) return message.channel.send('you have to ping two different people for the arguments lol');

  const a = message.mentions.users.first().id;
  const b = message.mentions.users.last().id;

  let combinedIds = '';
  if (parseInt(a, 10) > parseInt(b, 10)) {
    combinedIds = a + b;
  } else {
    combinedIds = b + a;
  }

  const date = new Date().getDate().toString();

  const rng = Math.floor(seedrandom(combinedIds + date).quick() * 100);

  message.channel.send(`they are **${rng}%** compatible!`);
};

module.exports = ship;
