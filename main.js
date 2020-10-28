// Libraries
const express = require('express');
const handlebars = require('express-handlebars');

// Functions and Variables
const rollDice = () => Math.floor(Math.random() * 6);

const diceImgs = [
  "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"
]

// Configure environment

const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

// Instances
const app = express();

// Configure express
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/static'));

// Configure handlebars
app.engine('hbs', handlebars({defaultLayout: 'default.hbs'}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Request handlers
// Home Page
app.get('/', (req, resp) => {
  resp.status(200);
  resp.type('text/html');
  resp.render('index');
});

console.log(diceImgs[rollDice()]);

// Rolling the Dice
app.get('/rolldice', (req, resp) => {
  const d1 = diceImgs[rollDice()];
  const d2 = diceImgs[rollDice()];

  resp.status(200);
  resp.type('text/html')
  resp.render('diceroll', {d1, d2}
)});

// 404 redirect to homepage
app.use((req, resp) => {
  resp.status(404);
  resp.type('text/html');
  resp.render('index');
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Application started on port ${PORT} at ${new Date()}`);
});
