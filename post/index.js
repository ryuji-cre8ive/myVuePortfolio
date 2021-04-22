'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const cors = require('cors');
const Datastore = require('nedb');
const axios = require('axios');
const { contentSecurityPolicy } = require('helmet');
// const { resolve } = require('core-js/fn/promise');
// const { reject } = require('core-js/fn/promise');

const db = new Datastore({
  filename: "articles.db"
});

db.loadDatabase();

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
app.use(cors());


app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/public/hello.html');
  // const count = await db.count({ }, (err, docs) => {
  //   console.log('count',docs);
  //   return docs;
  // });
  
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
  db.find({}, (err, docs) => {
    res.send(docs);
  });
});

app.post('/data', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const titleEng = req.body.titleEng;
  const category = req.body.category;
  const date = new Date();

  insertToDatabase(title, content, titleEng, category, date);

  db.find({}, (err, docs) => {
    console.log(docs);
  });

  res.redirect('/');
});

app.get('/data/:index', (req, res) => {
  db.find({_id: req.params.index}, (err, docs) => {
    if (err) {
      res.status(500).json(err);
      return
    }

    if(docs) {
      res.send(docs);
      return
    }

    res.status(404).json({err: 404})
    console.log(docs)
  })
});

app.get('/category/:id', async(req, res) => {
  const id = await req.params.id;
  console.log('arrived');
  console.log(req.params.id);
  db.findOne({_id: id}, (err, docs) => {
    if (err) {
      res.status(500).json(err)
      return
    }

    if (docs) {
      db.find({category: docs.category}, (err, docs) => {
        res.send(docs)
      });
    }
  })
  
})

app.post('/deleteAll', (req, res) => {
  deleteDatabase();
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const deleteId = req.body.id;
  db.remove({_id: deleteId}, {}, (err, docs) => {
    if (err) {
      res.send('error');
      return
    }
  })
  res.send('Your action is accepted');
    // res.redirect('/');
});

// app.get('/delete', (req, res) => {
//   res.redirect('/');
// })

app.listen(8080, () => {
  console.log('server is listening');
});

const deleteDatabase = () => {
  db.remove({}, {multi: true}, (err, runRemove) => {
    console.log('Your action is totally accepted');
  })
}


const insertToDatabase = async (title, content, titleEng, category, date) => {
  // const getDocs = () => {
  //   return new Promise((resolve, reject) => {
  //     db.find({}, (err, docs) => {
  //       if (err) reject(err);
  //       if(docs) resolve(docs);
  //     })
  //   })
  // }

  // const docs = await getDocs();
  const dbDate = new Date().toString();
  let compDate = dbDate.split(' ');
  let day = compDate[2];
  let month = compDate[1];
  let year = compDate[3];
  let time = compDate[4];
  let dateArr = [];
  dateArr.push(year, month, day, time);
  const lastDate = dateArr.join(' ');
  console.log(lastDate);
  let data = {
    title: title,
    content: content,
    titleEng: titleEng,
    category: category,
    date: lastDate,
    image: ""
  };
  db.insert(data);
}