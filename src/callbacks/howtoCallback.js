require("dotenv").config();

const { InlineKeyboard } = require("grammy");
const { logger } = require("../utils/otherUtils");
const telegramChannels = process.env.TELEGRAM_CHANNELS;
const adminUsername = process.env.ADMIN_USERNAME;

const howtoCallback = async (ctx) => {
  const botId = await ctx.api.getMe().id;
  const channelList = telegramChannels.split(",");

  const errorKeyboard = new InlineKeyboard().url("👤 Contact Admin",`t.me/${adminUsername.replace("@","")}`);

  // Combine channel usernames into a single string with line breaks
  const channelListText = channelList.join("\n");

  // Remove "@" symbols from usernames
  const sanitizedChannelList = channelList.map(username => username.replace("@", ""));

  for (const channelUsername of sanitizedChannelList) {
    try {
      const chatMember = await ctx.api.getChatMember(channelUsername, ctx.from.id);
      console.log(chatMember);
    } catch (error) {
      ctx.deleteMessage()
      await ctx.reply("Sorry! we were unable to check if you're a member in any of the provided channel, it seems bot is not an admin of the specified channels.\n\n Click on /start to try again", { parse_mode: "HTML", reply_markup: errorKeyboard });
      logger.error(error);
      break;
      
    }
  }

  const responseText = `<p> Steps to claim <code>$FOOD</code> </p>`;
  return responseText;
};

module.exports = howtoCallback;
