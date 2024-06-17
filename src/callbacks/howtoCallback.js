require("dotenv").config();

const { InlineKeyboard } = require("grammy");
const telegramChannels = process.env.TELEGRAM_CHANNELS;

const howtoCallback = async (ctx) => {
  const botId = await ctx.api.getMe().id;
  const channelList = telegramChannels.split(",");

  const errorKeyboard = new InlineKeyboard().text("🔄 Try Again..", `howto`);

  // Combine channel usernames into a single string with line breaks
  const channelListText = channelList.join("\n");

  // Remove "@" symbols from usernames
  const sanitizedChannelList = channelList.map((username) =>
    username.replace("@", "")
  );

  for (const channelUsername of sanitizedChannelList) {
    try {
      const chatMember = await ctx.api.getChatMember(
        channelUsername,
        ctx.from.id
      );
      console.log(chatMember);
    } catch (error) {
      // Inform user about error and log it
      await ctx.reply(`Error: Hi`, {
        parse_mode: "HTML",
        reply_markup: errorKeyboard,
      });
      console.error(error);
    }
  }

  const text = `<p> Steps to claim <code>$FOOD</code> </p>`;
  return text; // Explicitly return the message text
};

module.exports = howtoCallback;
