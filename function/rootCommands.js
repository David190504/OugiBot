module.exports =

function (msg) {
  if (msg.author.id == "265257341967007758") {
    while (msg.content.includes('  ')) {
      msg.content = msg.content.replace('  ', ' ')
    }
    while (msg.content.includes('\n\n')) {
      msg.content = msg.content.replace('\n\n', '\n')
    }
    var spookyCake = msg.content;
    var spookySlices = spookyCake.toLowerCase().split(" ");
    var hauntedCommand = spookySlices[1];
    var arguments = spookySlices.slice(2);

    var event = new Date();
    client.channels.cache.get(consoleLogging).send("__**" + event.toLocaleTimeString('en-US') + "**__\n:warning: [ROOT] Command received: " + hauntedCommand + "\nArguments: " + arguments + "\nExecuted by: `" + msg.author.tag + "`");
    client.channels.cache.get(consoleLogging).send("\n")

    if (hauntedCommand == "help") {
        ougi.helpRootCommand(arguments, msg)
    } else if (hauntedCommand == "do") {
        ougi.doRootCommand(arguments, msg)
    } else if (hauntedCommand == "status") {
        ougi.statusRootCommand(arguments, msg)
    } else if (hauntedCommand == "log") {
        ougi.logRootCommand(arguments, msg)
    } else if (hauntedCommand == "vibe_check") {
        ougi.vibeCheckReallyHard(arguments, msg)
    } else if (hauntedCommand == "haunt") {
        ougi.hauntRootCommand(arguments, msg)
    } else if (hauntedCommand == "tweet") {
        ougi.tweetRootCommand(msg)
    } else {
        ougi.undefinedCommand(arguments, msg)
    }
  }
  else {
    var options = ["Ara ara! Only David-senpai is allowed to access my root commands", "N-nani? Stop it, my senpai. What are you doing?", "Nani? Nani? Nani? What's going on? Why is my senpai calling me out, using my root commands prefix and trying to peek at them?"];
    var response = options[Math.floor(Math.random()*options.length)];
    msg.channel.send(response).then().catch(console.error);
    return
  }
}
