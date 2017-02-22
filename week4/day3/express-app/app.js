const express = require('express');

const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res, next) => {
  const today = new Date();
  let message;

  if (today.getDay() === 0 || today.getDay() === 6) {
    message = 'WEEKEND YEAH!!';
  } else if (today.getDay() === 3) {
    message = 'HUMP DAY!! Boo.';
  } else if (today.getDay() === 5) {
    message = 'HECK YEAH FRIDAY!!';
  } else {
    message = 'Welcome to the home page';
  }

  // display views/index.ejs for the browser
  res.render('index', {
    todaysMessage: message,
  });
});

app.get('/about', (req, res, next) => {
  // display views/about.ejs for the browser
  res.render('about', {
    name: 'Nizar',
    citiesTraveled: [ 'Miami', 'Madrid', 'Barcelona', 'Paris' ],
    faveFoods: [
      { name: 'pizza slice', calories: 400 },
      { name: 'bagel bites', calories: 380 },
      { name: 'pizza doritos', calories: 450 },
    ]
  });
});

app.get('/hello', (req, res, next) => {
  const randomNumber = Math.floor(Math.random() * 23) + 2;

  res.render('hello', {
    total: randomNumber
  });
});


app.listen(3000, () => {
  console.log('Backend app ONLINE!');
});
