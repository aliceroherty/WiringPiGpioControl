//module imports
var express = require('express');
var wpi = require('./node_modules/wiring-pi');

//utility imports
var config = require('./utils/config');

//destructuring config
const { port } = config;

//creating new express app
var app = express();

app.set('view engine', 'ejs');

//setting static routes
app.use('/assets', express.static('assets'));
app.use('/controllers', express.static('controllers'));

//Setting up Gpio pin
wpi.wiringPiSetup();
wpi.pinMode(config.pin, wpi.OUTPUT);

//routing
app.get('/', (req, res) => {
    res.render('index');
});

//button clicks
app.get('/on', (req, res) => {
    wpi.digitalWrite(config.pin, 1);
    console.log('on');
    res.render('index');
});

app.get('/off', (req, res) => {
    wpi.digitalWrite(config.pin, 0);
    console.log('off');
    res.render('index');
});

app.listen(port);
console.log(`The server is listening on port ${port}`);