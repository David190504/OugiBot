module.exports =

function checkBadWords(arguments, msg) {
  var badWord = ["nigga", "faggot", "fuck", "nigger", "baka", "stupid", "dumb", "idiot", "hentai", "shit", "fucking", "silly", "ass", "retard", "whore", "gay"]
  for (var i = 0; i < badWord.length; i++) {
      if (msg.content.includes(badWord[i])) {
        var options = ["no u", "you're a bad word", "then you uhhhhh you're a fortniter", "<:nou:638908430899478540>", "<:reverse:638908430878507018>"];
        var response = options[Math.floor(Math.random()*options.length)];
        msg.channel.send(response).then().catch(console.error);
        var r = true
        break;
      }
  }
  if (r = true) {
    var insultos = ["joto", "puto", "estúpido", "verga", "pendejo", "pendeja", "idiota", "mierda", "tonto", "retrasado", "chupa", "pito", "chinga"]
    for (var i = 0; i < insultos.length; i++) {
        if (msg.content.includes(insultos[i])) {
          var options = ["la tuya por si acaso", "tu existencia es un insulto a la humanidad", "entonces no eres un verdadero fortniter", "<:nou:638908430899478540>", "<:reverse:638908430878507018>"];
          var response = options[Math.floor(Math.random()*options.length)];
          msg.channel.send(response).then().catch(console.error);
          break;
      }
    }
  }
}