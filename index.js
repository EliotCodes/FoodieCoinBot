require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

/* START COMMAND */

bot.command("start", require("./src/commands/startCommand"));
bot.callbackQuery("start", require("./src/commands/startCommand"));

bot.callbackQuery("howto", require("./src/callbacks/howtoCallback"));

// bot.use((ctx) => {
//     ctx.reply("I don't understand");
//     console.log(ctx.message);
//   });

bot.start();

console.log("bot running");
