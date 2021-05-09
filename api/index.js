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
const mysql = require('mysql');
module.exports = { path: '/api', handler: app }
// app.listen(5000, () => {
//   console.log('server is listening on 5000')
// })

const db = new Datastore({
  filename: "articles.db",
  autoload: true
});

db.loadDatabase();

const con = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b85ae779ab423c',
  password: 'c8465475',
  database: "heroku_a10312e351ea50a"
});

con.connect((err) => {
  if (err) throw err;
  console.log('connected!')
});


const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const messageChannel = process.env.MSGCHANNEL;

const Botton = new WebClient(SLACK_BOT_TOKEN);

const sendToSlack = (ch, msg) => {
  Botton.chat.postMessage({
    channel: ch,
    text: msg
  });
}

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", 'https://xn--nuxt-e83cxa9hqa9c6rscykta5nnfyi7b2tjevpka'],
    },
  })
);
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts()); // use reverse proxy with ssl
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(cors());


// app.get('/', (req, res) => {
//   const sql = 'SELECT * FROM admin WHERE id=1';
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

app.post('/check', (req, res) => {
  const sql = 'SELECT * FROM admin WHERE id=1';
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

// app.post('/admin', (req, res) => {
//   const name = req.body.name;
//   const password = req.body.password;

//   if (name === "admin" && password === "gegege") {
//     res.sendFile(__dirname + '/public/hello.html');
//     return
//   }
//   res.redirect('/');
// });

// app.get('/admin', (req, res) => {
//   res.sendFile(__dirname + '/public/hello.html');
//   return
// })

app.get('/hello', (req, res) => {
  res.send('Hi')
})

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
  res.send('successfully inserted!');
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
  const deleteId = req.body._id;
  console.log(deleteId);
  db.remove({_id: deleteId}, {}, (err, docs) => {
    if (err) {
      res.send('error');
      return
    }
  })
  // res.send('Your action is accepted');
});

// app.get('/delete', (req, res) => {
//   res.redirect('/');
// })
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log('server is listening on' + PORT);
// });

app.post('/update', (req, res) => {
  const id = req.body._id;
  const content = req.body.content;
  const title = req.body.title;

  db.findOne({_id: id}, (err, docs) => {
    if (err) {
      res.send(err)
      return
    }
    if (docs) {
      let update = {
        _id: docs._id,
        content: content,
        title: title,
        category: docs.category,
        date: docs.date,
        image: docs.image,
        titleEng: docs.titleEng
      }
      db.update({_id: docs._id}, update, (err, numOfDocs) => {
        if (err) {
          res.send(err);
          return
        }
        if(numOfDocs) {
          console.log('success');
        }
      })
    }
  })
})

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