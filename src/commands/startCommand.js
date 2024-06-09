const { InlineKeyboard } = require("grammy");

const startCommand = (ctx) => {
  const inlineKeyboard = new InlineKeyboard().text(
    "How to participate❓",
    "howto"
  );

  const text = `Hey ${ctx.from.first_name}!\n\nWelcome to <b>FoodieCoin Bot</b>, get free <code>FOOD</code> tokens by completing simple tasks. Earn more by inviting friends!`;
  ctx.reply(text, { parse_mode: "HTML", reply_markup: inlineKeyboard });
};


module.exports = startCommand;