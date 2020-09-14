const KEY = require('../config.json')['api-key'];
const fetch = require('node-fetch');

module.exports = {
  execute(message, args, bot) {
    message.channel.send('Please wait while we apply your roles **this can take some time**...').then((m) => {
      fetch(`https://api.hypixel.net/player?key=${KEY}&player=${args[0]}&name=${args[0]}`)
        .then((result) => result.json())
        .then(({ player }) => {
          let socialMedia;

          if (message.guild.id != '673356418367356948') {
            //Testing Purposes, lets any commands in my test server bypass this
            try {
              socialMedia = player.socialMedia.links.DISCORD;
            } catch {
              m.edit('No discord linked to that account');
              return;
            }

            if (player.socialMedia.links.DISCORD != message.author.tag) {
              m.edit(`Your discord does not match the one linked to this account. \nDiscord linked to account: ${player.socialMedia.links.DISCORD}`);
              return;
            }
          }

          let rank = 'NON';

          if (player.packageRank != null) rank = player.packageRank;

          if (player.newPackageRank != null)
            //VIP-MVP+
            rank = player.newPackageRank;

          if (player.monthlyPackageRank != 'NONE' && player.monthlyPackageRank != null)
            //MVP++
            rank = player.monthlyPackageRank;

          if (player.rank != null)
            //HELPER+
            rank = player.rank;

          console.log(rank.toLowerCase());
          m.edit('Applying Role: ' + rank);
          switch (rank.toLowerCase()) {
            case 'vip':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'VIP'));
              break;
            case 'vip_plus':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'VIP+'));
              break;
            case 'mvp':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'MVP'));
              break;
            case 'mvp_plus':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'MVP+'));
              break;
            case 'superstar':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'MVP++'));
              break;
            case 'helper':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Hypixel Staff'));
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Hypixel Helper'));
              break;
            case 'moderator':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Hypixel Staff'));
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Hypixel Moderator'));
              break;
            case 'youtuber':
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Hypixel Youtube'));
              break;
          }

          m.edit('Applying AP Roles...');
          let ap = player.achievementPoints;
          console.log(ap);
          if (ap < 2000) {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '1k AP'));
          } else if (ap < 5000) {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '2k-4k AP'));
          } else if (ap < 8000) {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '5k-7k AP'));
          } else if (ap < 11000) {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '8k-10k AP'));
          } else if (ap < 14000) {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '11k-13k AP'));
          } else if (ap < 17000) {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '14k-16k AP'));
          } else {
            message.member.roles.add(m.guild.roles.cache.find((r) => r.name === '17k+ AP'));
          }

          m.edit('Applying leveling roles');
          let exp = player.networkExp;

          var BASE = 10000;
          var GROWTH = 2500;
          var HALF_GROWTH = 0.5 * GROWTH;
          var REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
          var REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
          var GROWTH_DIVIDES_2 = 2 / GROWTH;

          if (exp > 0) {
            let rank = Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));

            if (rank === 20 || rank < 35) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 20+'));
            } else if (rank < 45) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 35+'));
            } else if (rank < 55) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 45+'));
            } else if (rank < 65) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 55+'));
            } else if (rank < 75) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 65+'));
            } else if (rank < 85) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 75+'));
            } else if (rank < 95) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 85+'));
            } else if (rank < 150) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 95+'));
            } else if (rank < 200) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 150+'));
            } else if (rank < 250) {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 200+'));
            } else {
              message.member.roles.add(m.guild.roles.cache.find((r) => r.name === 'Network Level 250+'));
            }
          }
          m.edit('All roles have been applied (or will be soon)! If you do not recieve your proper roles shortly please contact Miqhtie#0001');
        });
    });
  },
};
