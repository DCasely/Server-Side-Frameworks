var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
  var sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'I hate you human',
    goldfish: '...'
  };
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:keyword/:num', function(req, res) {
  var keyword = req.params.keyword;
  var num = req.params.num;
  var str = '';
  for (var i = 0; i < num; i++) {
    str += `${keyword} `;
  }
  res.send(str);
});

app.get('*', function(req, res) {
  res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function() {
  console.log('listening on PORT 3000');
});
