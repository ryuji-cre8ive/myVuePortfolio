'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN.toString();
const messageChannel = process.env.MSGCHANNEL.toString();

const Botton = new WebClient(SLACK_BOT_TOKEN);

const sendToSlack = (ch, msg) => {
  Botton.chat.postMessage({
    channel: ch,
    text: msg
  });
}

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/hello.html')
});

app.post('/post', (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  let mail = req.body.mail;
  let text = req.body.text;
  sendToSlack(messageChannel, `名前: ${name}\n e-mail: ${mail}\n 本文: ${text}\n `);

  res.send('the data is totally accepted');
});

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/data/articles.json')
})

app.listen(8080, () => {
  console.log('server is listening');
});