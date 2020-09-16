const seedrandom = require('seedrandom');

const ship = (client, message) => {
  const date = new Date().getDate().toString();

  let filteredMessage = filter(message.content);
  const rng = Math.floor(seedrandom(stringValue(filteredMessage) * 41798 + date).quick() * 100);
  message.channel.send(`they are **${rng}%** compatible!`);
};

function stringValue(string) {
  let sValue = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    sValue += parseInt(alphabetPosition(char));
  }
  return sValue;
}

function alphabetPosition(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + ' ';
  }

  return result.slice(0, result.length - 1);
}

function filter(text) {
  let desired = text.replace(/[^a-zA-Z0-9]/gi, '');
  console.log(desired);
  return desired;
}

module.exports = ship;
