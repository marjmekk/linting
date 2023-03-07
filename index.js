const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = "Home Page";
  res.render('pages/index',{'title':title});
});

app.get('/hiking', (req, res) => {
  var title = "Hiking";
  res.render('pages/hiking',{'title':title});
});

app.get('/food', (req, res) => {
  var title = "Food";
  res.render('pages/food',{'title':title});
});

app.get('/traveling', (req, res) => {
  var title = "Traveling";
  res.render('pages/traveling',{'title':title});
});

app.get('/projects', (req, res) => {
  var title = "Projects Page";
  res.render('pages/projects',{'title':title});
});

app.get('/contact', (req, res) => {
  var title = "Contact Page";
  res.render('pages/contact',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
