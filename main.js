// Libraries
const express = require('express');
const handlebars = require('express-handlebars');

// Configure environment

const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

// Instances
const app = express();

// Configure express
app.use(express.static(__dirname + '/public'));

// Configure handlebars
app.engine('handlebars', handlebars({
  defaultLayout: 'default.hbs'
}));
app.set('view engine', handlebars);
app.set('views', __dirname + '/views');

// Request handlers
app.get('/images/dice-rolls/')

app.use((req, resp) => {
  resp.status(404);
  resp.type('text/html');
  resp.sendFile(__dirname + '/public/index.html');
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Application started on port ${PORT} at ${new Date()}`);
});
