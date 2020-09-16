const pingmiqhtie = (client, message) => {
    message.channel.send(`Ping <@438057670042320896>`).then((m) =>{
        m.delete();
        message.delete()
    });
}

module.exports = pingmiqhtie;