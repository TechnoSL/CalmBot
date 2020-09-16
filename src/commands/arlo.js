const baseUrl = 'https://calmbot-images.s3.amazonaws.com/arlo/';
const imgs = [];

// loop 122 times because there is from 0.jpg to 122.jpg in s3 bucket
for (let i = 0; i < 122; i++) {
  imgs.push(`${baseUrl}${i}.jpg`);
}

const cat = (client, message) => {
  const img = imgs[Math.floor(Math.random() * imgs.length)];
  message.channel.send('', { files: [img] });
};

module.exports = cat;
