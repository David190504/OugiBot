module.exports =

async function (channelID, filename) {
  let success = false;
  if (client.channels.cache.get(channelID) == undefined) {
    console.log("Skipping unexistent channel " + channelID);
    success = true;
  }
  else {
    lastMessage = (await client.channels.cache.get(channelID).messages.fetch({ limit: 1 })).first();
    await download(lastMessage.attachments.first().url, {
      filename
    }, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Saved as " + filename + ". Checking...");
        let checking = setInterval(() => {
          if (!fs.existsSync(filename)) return;
          if (ougi.readFile(filename) === undefined) {
            lastMessage.delete();
            fs.unlinkSync(filename);
            console.log("Bad file " + filename + " deleted, retrying soon...");
          }
          else {
            console.log(filename + " ok.");
            success = true;
          }
          clearInterval(checking);
        }, 500);
      }
    });
  }
  return success;
}
