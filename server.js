const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  console.log('Username: ' + username);
  console.log('Password: ' + password);
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});
