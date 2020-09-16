const role = require('../methods/role.js');

const roles = (client, message) => {
  if (!message.guild.members.cache.find((m) => m.id === message.author.id).hasPermission('ADMINISTRATOR')) {
    return message.channel.send('you need to be an administrator to run this command');
  }

  if (!message.args[0]) {
    return message.channel.send('your first argument has to be `create` or `delete`');
  }

  if (message.args[0].toLowerCase() === 'create') {
    role.create(message, { name: 'Hypixel Admin', permissions: 0, color: '0xff5555' });
    role.create(message, { name: 'Hypixel Moderator', permissions: 0, color: '0x00aa00' });
    role.create(message, { name: 'Hypixel Helper', permissions: 0, color: '0x5555ff' });
    role.create(message, { name: 'Hypixel Youtuber', permissions: 0, color: '0xff5555' });
    role.create(message, { name: 'MVP++', permissions: 0, color: '0xffaa00' });
    role.create(message, { name: 'MVP+', permissions: 0, color: '0x55ffff' });
    role.create(message, { name: 'MVP', permissions: 0, color: '0x55ffff' });
    role.create(message, { name: 'VIP+', permissions: 0, color: '0x55ff55' });
    role.create(message, { name: 'VIP', permissions: 0, color: '0x55ff55' });
    role.create(message, { name: 'Network Level 250+', permissions: 0, color: 'BLACK' });
    role.create(message, { name: 'Network Level 200+', permissions: 0, color: '0x00a77' });
    role.create(message, { name: 'Network Level 150+', permissions: 0, color: '0xaa0000' });
    role.create(message, { name: 'Network Level 95+', permissions: 0, color: '0x00aa00' });
    role.create(message, { name: 'Network Level 85+', permissions: 0, color: '0x5555ff' });
    role.create(message, { name: 'Network Level 75+', permissions: 0, color: '0xffffff' });
    role.create(message, { name: 'Network Level 65+', permissions: 0, color: '0xff55ff' });
    role.create(message, { name: 'Network Level 55+', permissions: 0, color: '0xffff55' });
    role.create(message, { name: 'Network Level 45+', permissions: 0, color: '0x55ff55' });
    role.create(message, { name: 'Network Level 35+', permissions: 0, color: '0xffaa00' });
    role.create(message, { name: '17k+ AP', permissions: 0 });
    role.create(message, { name: '14k-16k AP', permissions: 0 });
    role.create(message, { name: '11k-13k AP', permissions: 0 });
    role.create(message, { name: '8k-10k AP', permissions: 0 });
    role.create(message, { name: '5k-7k AP', permissions: 0 });
    role.create(message, { name: '2k-4k AP', permissions: 0 });
    role.create(message, { name: 'Hypixel Staff', permissions: 0 });
    role.create(message, { name: 'Linked', permissions: 0 });

    return message.channel.send('roles created!');
  } else if (message.args[0].toLowerCase() === 'delete') {
    role.deleteBulk(message, [
      'Hypixel Admin',
      'Hypixel Moderator',
      'Hypixel Helper',
      'Hypixel Youtuber',
      'MVP++',
      'MVP+',
      'MVP',
      'VIP+',
      'VIP',
      'Network Level 250+',
      'Network Level 200+',
      'Network Level 150+',
      'Network Level 95+',
      'Network Level 85+',
      'Network Level 75+',
      'Network Level 65+',
      'Network Level 55+',
      'Network Level 45+',
      'Network Level 35+',
      '17k+ AP',
      '14k-16k AP',
      '11k-13k AP',
      '8k-10k AP',
      '5k-7k AP',
      '2k-4k AP',
      'Hypixel Staff',
      'Linked',
    ]);

    return message.channel.send('roles deleted!');
  } else {
    return message.channel.send('your first argument has to be `create` or `delete`');
  }
};

module.exports = roles;
