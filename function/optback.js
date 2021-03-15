module.exports =

async function (msg) {
  let index = settingsOBJ.ignored.indexOf(msg.author.id);
  settingsOBJ.ignored.splice(index);
  let embed = new Discord.MessageEmbed()
  .setTitle("Opt In to Ougi")
  .setAuthor("Ougi [BOT]", client.user.avatarURL())
  .setColor("#230347")
  .setDescription("You've successfully opted in to use Ougi and its services.")
  .setFooter("optoutEmbed by Ougi", client.user.avatarURL())
  .setThumbnail("https://github.com/HakkinDavid/OugiBot/blob/master/images/help.png?raw=true")
  msg.channel.send({embed});
  fs.writeFile('./settings.txt', JSON.stringify(settingsOBJ), console.error);
  ougi.backup("./settings.txt", settingsChannel);
}
