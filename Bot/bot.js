const { Telegraf } = require("telegraf");
const TOKEN = "7359560363:AAEml-mvgAJQVbW6mY-Ryg6r6mr2JdH9UeA";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
