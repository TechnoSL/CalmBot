const imgs = [
  'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
  'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
];

const cat = (client, message) => {
  const img = imgs[Math.floor(Math.random() * imgs.length)];
  message.channel.send('', { files: [img] });
};

module.exports = cat;
