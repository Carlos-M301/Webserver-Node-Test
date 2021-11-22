const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
// Handlebars
app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials');

// Content static
app.use( express.static( 'public' ) );

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Carlos Muñoz',
    title: 'Aprendiendo Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Carlos Muñoz',
    title: 'Aprendiendo Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Carlos Muñoz',
    title: 'Aprendiendo Node'
  });
});

// app.get('*', (req, res) => {
//   res.sendFile( __dirname + '/public/404.html' );
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});