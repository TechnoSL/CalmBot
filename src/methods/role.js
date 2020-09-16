// creates a new role
const create = (message, data) => {
  const role = message.guild.roles.cache.find((r) => r.name === data.name);
  if (!role) {
    message.guild.roles.create({ data });
  }
};

// deletes a role
const del = (message, name) => {
  const role = message.guild.roles.cache.find((r) => r.name === name);

  if (role) {
    role.delete();
  }
};

// deletes multiple roles
const deleteBulk = (message, roles) => {
  for (let i = 0; i < roles.length; i++) {
    del(message, roles[i]);
  }
};

// add a member to a role
const add = (message, roleName) => {
  const role = message.guild.roles.cache.find((r) => r.name === roleName);

  if (role) {
    message.member.roles.add(role);
  }
};

// remove a role from the person who sends the message
const selfRemove = (message, roleName) => {
  const role = message.guild.roles.cache.find((r) => r.name === roleName);

  if (role) {
    message.member.roles.remove(role);
  }
};

// removes roles from the message sender
const selfRemoveBulk = (message, roles) => {
  for (let i = 0; i < roles.length; i++) {
    selfRemove(message, roles[i]);
  }
};

module.exports = { create, deleteBulk, add, selfRemoveBulk };
