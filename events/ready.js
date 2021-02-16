module.exports = async (client) => {
  console.log(`bot is online`);
  await client.user.setActivity("Music", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
