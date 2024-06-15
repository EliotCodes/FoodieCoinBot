require("dotenv").config();

const telegramChannels = process.env.TELEGRAM_CHANNELS;

const howtoCallback = async (ctx) => {
  const botId = await ctx.api.getMe().id;
  const channelList = telegramChannels.split(",");

  let channelListText = channelList.join("\n");

  let newChannelList = channelList.map((numbers) => {
    return (numbers = numbers.replace("@", ""));
  });

  let isUser = newChannelList.forEach(async (channelUsername) => {
    // try {
    //     console.log(await ctx.api.getChatMember(channelUsername, ctx.from.id))
    // } catch (error) {
    //   ctx.reply("Had errors checking if i'm admin in channnel");
    //   console.error(error);
    // }
  });
  

  const text = `<p> 🍕 Steps to claim <code>$FOOD</code> </p>`;
};

module.exports = howtoCallback;
