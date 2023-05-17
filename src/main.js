const express = require('express');
const cors = require('cors')
const app = express();
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

app.options('*', cors());

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg, meta) => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, 'test over');
});
