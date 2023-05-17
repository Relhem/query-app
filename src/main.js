const express = require('express');
const cors = require('cors')
const app = express();
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

app.options('*', cors());

const port = process.env.PORT || 3000;
const token = process.env.TOKEN;

// const bot = new TelegramBot(token, {polling: true});
// bot.on('message', (msg, meta) => {
//   console.log(msg);
// });

app.get('/', (req, res) => {
  console.log('body', JSON.stringify(req.params));
  res.send({ message: 'Hello WWW!' });
});

app.listen(port, () => {
    console.log(`Application listening on port ${port}!`);
});