const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));

const users = [
  {
    1: {
      name: 'marquitos',
      occ: 'noob-slayer',
    }
  }
]

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users:id', (req, res) => {
  res.render('users'), {
    id: users[req.params.id].name
  }
});

app.listen(3000, () => {
  console.log('running on port 3000')
});