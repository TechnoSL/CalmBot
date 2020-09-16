const seedrandom = require('seedrandom');

const ship = (client, message) => {
  // if (message.mentions.users.size !== 2) return message.channel.send('you have to ping two different people for the arguments lol');

  // const a = message.mentions.users.first().id;
  // const b = message.mentions.users.last().id;

  // let combinedIds = '';
  // if (parseInt(a, 10) > parseInt(b, 10)) {
  //   combinedIds = a + b;
  // } else {
  //   combinedIds = b + a;
  // }

  const date = new Date().getDate().toString();

  // const rng = Math.floor(seedrandom(combinedIds + date).quick() * 100);
  let filteredMessage = filter(message.content);
  const rng = Math.floor(seedrandom((stringValue(filteredMessage) * 41798) + date).quick() * 100);
  message.channel.send(`they are **${rng}%** compatible! NOTE: This command is very buggy`);
};

function stringValue(string){
  let sValue = 0;
  for(let i = 0; i < string.length; i++){
      let char = string[i];
      sValue += parseInt(alphabetPosition(char));
  }
  return sValue;
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length - 1);
}

function filter(text){
  let desired = text.replace(/[^a-zA-Z0-9]/gi, '')
  console.log(desired);
  return desired;
}



module.exports = ship;
