var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use(express.static('static'))

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Started on 3000');
});
