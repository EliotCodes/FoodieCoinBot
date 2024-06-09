require("dotenv").config();
const { Bot, InlineKeyboard } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

/* START COMMAND */

bot.command("start", (ctx) => {

    const inlineKeyboard = new InlineKeyboard().text("How to participate❓", "howto");

    const text = `Hey ${ctx.from.first_name}!\n\nWelcome to <b>FoodieCoin Bot</b>, get free <code>FOOD</code> tokens by completing simple tasks. Earn more by inviting friends!`;
    ctx.reply(text, { parse_mode: "HTML", reply_markup: inlineKeyboard });

});





bot.start();

console.log("bot running");
