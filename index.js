require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

/* START COMMAND */

bot.command("start", require("./src/commands/startCommand"));

bot.start();

console.log("bot running");
