const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's a json file of user file
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = "Home Page";
  res.render('pages/index',{'title':title});
});

app.get('/about', (req, res) => {
  var title = "About Page";
  res.render('pages/about',{'title':title});
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
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
  console.log(data);
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

