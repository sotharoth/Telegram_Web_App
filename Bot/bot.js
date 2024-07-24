const { Telegraf } = require("telegraf");
const TOKEN = "7359560363:AAEml-mvgAJQVbW6mY-Ryg6r6mr2JdH9UeA";
const bot = new Telegraf(TOKEN);

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('hello....'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.start((ctx) => ctx.reply('Welcome'))
bot.launch();