const { InlineKeyboard } = require("grammy");
const fs = require("fs");
const path = require("path");

const startCommand = (ctx) => {
  const inlineKeyboard = new InlineKeyboard().text(
    "How to participate❓",
    "howto"
  );

  const text = `Hey ${ctx.from.first_name}!\n\nWelcome to <b>FoodieCoin Bot</b>, get free <code>$FOOD</code> tokens by completing simple tasks. Earn more by inviting friends!`;
 
  console.log(ctx);
  ctx.replyWithPhoto(
    "AgACAgQAAxkBAANxZmz6T76_AUjU6TWraS4N7BJB_PgAAgzBMRtPZGlTZ4b_o_CDoOoBAAMCAAN5AAM1BA",
    {
      caption: text,
      parse_mode: "HTML",
      reply_markup: inlineKeyboard,
    }
  );
};

module.exports = startCommand;

//AgACAgQAAxkBAANxZmz6T76_AUjU6TWraS4N7BJB_PgAAgzBMRtPZGlTZ4b_o_CDoOoBAAMCAAN5AAM1BA
//
