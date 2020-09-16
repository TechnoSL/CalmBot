const uwulist = [
    'https://tenor.com/view/uwu-owo-gif-gif-13537412',
    'https://tenor.com/view/smug-anime-face-gif-6194051',
    'https://tenor.com/view/uwu-cat-piano-music-tiles-tapping-gif-16391139',
    'https://tenor.com/view/owo-uwu-star-gif-14444240',
];

const uwu = (client, message) => {
    try {
        message.channel.send(uwulist[getRandomInt(0,3)]);
      } catch {
        console.trace();
      }
};
  

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = uwu;