module.exports =

function (msg) {
  var emoji = ["reverse", "nou", "dorime"];
  var searchFor = emoji[Math.floor(Math.random()*emoji.length)];;
  var phrases = ["<:dorime:726944323660152892>", "<:nou:726944701348970496>", "<:reverse:726944329754476614>"];
  var say = phrases[Math.floor(Math.random()*phrases.length)];
  var embed = new Discord.MessageEmbed()
  .setTitle("Ougi's `emoji` command")
  .setAuthor("Ougi [BOT]", client.user.avatarURL())
  .setColor("#230347")
  .setDescription("Use this command to make Ougi send an emoji based on the provided emoji name (You can ask for more than one!). You may include `random` as emoji name to chose a random emoji from the list.")
  .setFooter("helpEmbed by Ougi", client.user.avatarURL())
  .setThumbnail("https://github.com/HakkinDavid/OugiBot/blob/master/images/help.png?raw=true")
  .addField("Example", "`ougi emoji " + searchFor + "`")
  .addField("Output", spookyEmoji)
  .addField("Emoji list", "Use `ougi emoji-list`")

  msg.channel.send({embed}).catch(console.error);
}
