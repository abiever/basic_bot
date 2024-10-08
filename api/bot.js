import { Bot, webhookCallback } from "grammy";
require('dotenv').config();

// Create a bot object
const bot = new Bot(process.env.BOT_TOKEN); // <-- place your bot token in this string

// Register listeners to handle messages
bot.on("message:text", (ctx) => ctx.reply("Result: " + ctx.message.text * 2));



// Start the bot (using long polling)
//bot.start();

export default webhookCallback(bot, "std/http");
